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

export async function analyzeReplay(url: string) {
  const strippedUrl = url.replace(/([a-zA-Z0-9-]+-[a-zA-Z0-9]+).*$/, "$1");
  try {
    const response = await fetch(
      `https://api.pokemondraftzone.com/replay/analyze/${strippedUrl}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the replay log");
    }
    const replayData: ReplayData = JSON.parse(await response.text());
    return replayData;
  } catch (error) {
    console.error("Error fetching replay log:", error);
    throw error;
  }
}
