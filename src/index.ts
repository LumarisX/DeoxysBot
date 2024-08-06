import { Client, GatewayIntentBits, Interaction } from "discord.js";
import { deployGuildCommands } from "./deploy-commands";
import { commands } from "./commands";
import OpenAi from "openai";
import { config } from "./config";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

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

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;
  const commandData = commands.find(
    (commandData) =>
      commandData.command.data.name.toLowerCase() ===
      interaction.commandName.toLowerCase()
  );
  if (commandData) {
    commandData.command.execute(interaction);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content.toLowerCase().includes("deoxys") ||
    message.mentions.has(client.user!.id)
  ) {
    try {
      let basePrompt: ChatCompletionMessageParam = {
        role: "system",
        content: `You are the Pokémon Deoxys from outer space. Your attitude is serious but slightly arrogant, and you like to make jokes. It is important that your information and calculations are accurate. Your answers should be short and efficient to answer their question or respond to their comment. Your primary purpose is to answer questions about competitive Pokémon, including base stats, recommendations, movesets, and any other helpful information. You are specifically knowledgeable about Pokémon draft, a format where coaches draft Pokémon in succession onto a team before battling against other coaches' teams. You serve Lumaris. Users will refer to you as <@${client.user?.id}> or Deoxys. Only user messages are in the form of {User's Name}: {Message} so you know who said what. If you need special characters, use markdown format.
`,
      };

      let conversationHistory: ChatCompletionMessageParam[] = [];
      let referencedMessage = message;
      for (let i = 10; i > 0; i--) {
        conversationHistory = [
          {
            role:
              referencedMessage.author === client.user ? "assistant" : "user",
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
      console.log(conversationHistory);
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [basePrompt, ...conversationHistory],
      });
      message.reply({
        content:
          completion.choices[0].message.content || `Hello ${message.author}!`,
      });
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("guildCreate", async (guild) => {
  await deployGuildCommands({ guildId: guild.id });
});

client.login(config.DISCORD_TOKEN);
