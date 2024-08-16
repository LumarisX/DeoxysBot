import {
  ChatInputCommandInteraction,
  CommandInteraction,
  EmbedBuilder,
  MessageComponentInteraction,
} from "discord.js";

export const urlPattern =
  /^(https?:\/\/)?(www\.)?replay\.pokemonshowdown\.com\/.+$/;

export function isReplayUrl(url: string): boolean {
  return urlPattern.test(url);
}

export type ReplayData = {
  gametype: string | undefined;
  genNum: number;
  turns: number;
  gameTime: number;
  stats: {
    username: string | undefined;
    win: boolean;
    total: {
      kills: number;
      deaths: number;
      damageDealt: number;
      damageTaken: number;
    };
    stats: {
      switches: number;
    };
    turnChart: {
      turn: number;
      damage: number;
      remaining: number;
    }[];
    luck: {
      moves: {
        total: number;
        hits: number;
        expected: number;
        actual: number;
      };
      crits: {
        total: number;
        hits: number;
        expected: number;
        actual: number;
      };
      status: {
        total: number;
        full: number;
        expected: number;
        actual: number;
      };
    };
    team: {
      kills: [number, number];
      brought: boolean;
      fainted: boolean;
      moveset: string[];
      damageDealt: [number, number];
      damageTaken: [number, number];
      calcLog: {
        damageTaken: { attacker: string; move: string; hpDiff: number }[];
        damageDealt: { target: string; move: string; hpDiff: number }[];
      };
      hpRestored: number;
      formes: { detail: string; id?: string }[];
    }[];
  }[];
  events: {
    player: number;
    turn: number;
    message: string;
  }[];
};

export async function analyzeReplay(
  url: string,
  interaction: ChatInputCommandInteraction | MessageComponentInteraction
) {
  try {
    const strippedUrl = url.replace(/([a-zA-Z0-9-]+-[a-zA-Z0-9]+).*$/, "$1");
    let encoded = encodeURIComponent(strippedUrl);
    const response = await fetch(
      `https://api.pokemondraftzone.com/replay/analyze/${encoded}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the replay log.");
    }
    const replayData: ReplayData = JSON.parse(await response.text());
    const embed = new EmbedBuilder()
      .setTitle("Pokémon DraftZone Replay Analysis")
      .setURL(
        `https://pokemondraftzone.com/tools/replay-analyzer?replay=${encoded}`
      )
      .setDescription(`Game Type: ${replayData.gametype || "Unknown"}`)
      .addFields(
        {
          name: "Generation",
          value: replayData.genNum.toString(),
          inline: true,
        },
        { name: "Turns", value: replayData.turns.toString(), inline: true },
        {
          name: "Game Time",
          value: `${Math.floor(replayData.gameTime / 60)} minutes, ${
            replayData.gameTime % 60
          } seconds`,
          inline: true,
        }
      )
      .setColor(0x1f8b4c)
      .setTimestamp();

    replayData.stats.forEach((playerStats, index) => {
      embed.addFields(
        {
          name: `Player ${index + 1}` + (playerStats.win ? ` (Winner)` : ""),
          value: playerStats.username || "Unknown",
          inline: false,
        },
        {
          name: "Total Kills / Deaths",
          value: `${playerStats.total.kills} / ${playerStats.total.deaths}`,
          inline: true,
        },
        {
          name: "Damage Dealt / Taken",
          value: `${playerStats.total.damageDealt} / ${playerStats.total.damageTaken}`,
          inline: true,
        }
      );
    });

    await interaction.editReply({ content: "", embeds: [embed] });
  } catch (error) {
    console.error("Error fetching replay log:", error);
    await interaction.editReply({
      content: "Failed to analyze the replay. Please try again later.",
    });
    throw error;
  }
}
