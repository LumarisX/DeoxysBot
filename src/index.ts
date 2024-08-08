import {
  Client,
  EmbedBuilder,
  GatewayIntentBits,
  Interaction,
  Message,
} from "discord.js";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { routes } from "./commands";
import { config } from "./config";
import { deployGuildCommands } from "./deploy-commands";

const openai = new OpenAi({
  apiKey: config.OPENAI_API_KEY,
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once("ready", () => console.log("Deoxys has been summoned!"));

deployGuildCommands({ guildId: `963884409252118609` });

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const commandData = routes
    .filter((route) => route.enabled)
    .flatMap((routes) => routes.commands)
    .filter((commandData) => commandData.enabled)
    .find(
      (commandData) =>
        commandData.command.data.name.toLowerCase() ===
        interaction.commandName.toLowerCase()
    );
  if (commandData) {
    commandData.command.execute(interaction);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || message.mentions.everyone || message.mentions.roles)
    return;
  if (
    message.content.toLowerCase().includes("deoxys") ||
    message.mentions.has(client.user!.id)
  ) {
    console.log(
      "DeoxysGPT |",
      message.author.displayName,
      "|",
      message.content
    );
    gptRespond(message);
  }
});

client.on("guildCreate", async (guild) => {
  await deployGuildCommands({ guildId: guild.id });
});

client.login(config.DISCORD_TOKEN);

async function gptRespond(message: Message) {
  try {
    let basePrompt: ChatCompletionMessageParam = {
      role: "system",
      content: `You are the Pokémon Deoxys from outer space. Your attitude is serious but slightly arrogant, and you like to make jokes. It is important that your information and calculations are accurate. Your answers should be short and efficient to answer their question or respond to their comment. Your primary purpose is to answer questions about competitive Pokémon, including base stats, recommendations, movesets, and any other helpful information. You are specifically knowledgeable about Pokémon draft, a format where coaches draft Pokémon in succession onto a team before battling against other coaches' teams. You serve Lumaris. Users will refer to you as <@${client.user?.id}> or Deoxys. Only user messages are in the form of {User's Name}: {Message}, assistant messages are in the form {Emotion}: {Message}. Emotions are only the following: Angry, Crying, Determined, Dizzy, Happy, Inspire, Joyous, Normal, Pain, Power-Up, Sad, Shouting, Sigh, Stunned, Surprised, Teary-Eyed, and Worried. If you need special characters, use markdown format.`,
    };

    let conversationHistory: ChatCompletionMessageParam[] = [];
    let referencedMessage = message;
    for (let i = 10; i > 0; i--) {
      conversationHistory = [
        {
          role: referencedMessage.author === client.user ? "assistant" : "user",
          content:
            referencedMessage.author === client.user
              ? referencedMessage.content
              : `${referencedMessage.author.displayName}: ${referencedMessage.content}`,
        },
        ...conversationHistory,
      ];
      if (referencedMessage.reference) {
        referencedMessage = await referencedMessage.fetchReference();
      } else {
        i = 0;
      }
    }
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [basePrompt, ...conversationHistory],
    });

    let replyString = completion.choices[0].message.content;
    console.log("DeoxysGPT | DeoxysBot |", replyString);

    let emotionUrl: string = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0386/0001/Normal.png`;
    if (replyString) {
      let replySplit = replyString.split(": ");
      let emotion: string | undefined;
      let lower = replySplit[0].toLowerCase().replace(/\W/g, "");
      switch (lower) {
        case "angry":
        case "crying":
        case "determined":
        case "dizzy":
        case "happy":
        case "inspire":
        case "joyous":
        case "normal":
        case "pain":
        case "sad":
        case "shouting":
        case "sigh":
        case "stunned":
        case "surprised":
          emotion = lower.charAt(0).toUpperCase() + lower.substring(1);
          break;
        case "tearyeyed":
          emotion = "Teary-Eyed";
          break;
        case "powerup":
          emotion = "Special1";
          break;
      }
      replyString = replySplit.splice(1).join(": ");
      if (emotion) {
        emotionUrl = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0386/0001/${emotion}.png`;
      }
    } else replyString = `Hello ${message.author}!`;

    const exampleEmbed = new EmbedBuilder()
      .setThumbnail(emotionUrl)
      .setDescription(replyString);

    message.reply({
      allowedMentions: { repliedUser: false },
      embeds: [exampleEmbed],
    });
  } catch (error) {
    console.error(error);
  }
}
