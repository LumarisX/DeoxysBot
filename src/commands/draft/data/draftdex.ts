export function getDexData(query: string) {
  return DraftDex.find(
    (e) => e.pid === query || e.name.toLowerCase() === query.toLowerCase()
  );
}

export type DexData = { name: string; pid: string; png: string };
export const DraftDex: DexData[] = [
  {
    name: "Bulbasaur",
    pid: "bulbasaur",
    png: "bulbasaur",
  },
  {
    name: "Ivysaur",
    pid: "ivysaur",
    png: "ivysaur",
  },
  {
    name: "Venusaur",
    pid: "venusaur",
    png: "venusaur",
  },
  {
    name: "Charmander",
    pid: "charmander",
    png: "charmander",
  },
  {
    name: "Charmeleon",
    pid: "charmeleon",
    png: "charmeleon",
  },
  {
    name: "Charizard",
    pid: "charizard",
    png: "charizard",
  },
  {
    name: "Squirtle",
    pid: "squirtle",
    png: "squirtle",
  },
  {
    name: "Wartortle",
    pid: "wartortle",
    png: "wartortle",
  },
  {
    name: "Blastoise",
    pid: "blastoise",
    png: "blastoise",
  },
  {
    name: "Caterpie",
    pid: "caterpie",
    png: "caterpie",
  },
  {
    name: "Metapod",
    pid: "metapod",
    png: "metapod",
  },
  {
    name: "Butterfree",
    pid: "butterfree",
    png: "butterfree",
  },
  {
    name: "Weedle",
    pid: "weedle",
    png: "weedle",
  },
  {
    name: "Kakuna",
    pid: "kakuna",
    png: "kakuna",
  },
  {
    name: "Beedrill",
    pid: "beedrill",
    png: "beedrill",
  },
  {
    name: "Pidgey",
    pid: "pidgey",
    png: "pidgey",
  },
  {
    name: "Pidgeotto",
    pid: "pidgeotto",
    png: "pidgeotto",
  },
  {
    name: "Pidgeot",
    pid: "pidgeot",
    png: "pidgeot",
  },
  {
    name: "Rattata",
    pid: "rattata",
    png: "rattata",
  },
  {
    name: "Rattata-Alola",
    pid: "rattataalola",
    png: "rattata-alola",
  },
  {
    name: "Raticate",
    pid: "raticate",
    png: "raticate",
  },
  {
    name: "Raticate-Alola",
    pid: "raticatealola",
    png: "raticate-alola",
  },
  {
    name: "Spearow",
    pid: "spearow",
    png: "spearow",
  },
  {
    name: "Fearow",
    pid: "fearow",
    png: "fearow",
  },
  {
    name: "Ekans",
    pid: "ekans",
    png: "ekans",
  },
  {
    name: "Arbok",
    pid: "arbok",
    png: "arbok",
  },
  {
    name: "Pikachu",
    pid: "pikachu",
    png: "pikachu",
  },
  {
    name: "Raichu",
    pid: "raichu",
    png: "raichu",
  },
  {
    name: "Raichu-Alola",
    pid: "raichualola",
    png: "raichu-alola",
  },
  {
    name: "Sandshrew",
    pid: "sandshrew",
    png: "sandshrew",
  },
  {
    name: "Sandshrew-Alola",
    pid: "sandshrewalola",
    png: "sandshrew-alola",
  },
  {
    name: "Sandslash",
    pid: "sandslash",
    png: "sandslash",
  },
  {
    name: "Sandslash-Alola",
    pid: "sandslashalola",
    png: "sandslash-alola",
  },
  {
    name: "Nidoran-F",
    pid: "nidoranf",
    png: "nidoranf",
  },
  {
    name: "Nidorina",
    pid: "nidorina",
    png: "nidorina",
  },
  {
    name: "Nidoqueen",
    pid: "nidoqueen",
    png: "nidoqueen",
  },
  {
    name: "Nidoran-M",
    pid: "nidoranm",
    png: "nidoranm",
  },
  {
    name: "Nidorino",
    pid: "nidorino",
    png: "nidorino",
  },
  {
    name: "Nidoking",
    pid: "nidoking",
    png: "nidoking",
  },
  {
    name: "Clefairy",
    pid: "clefairy",
    png: "clefairy",
  },
  {
    name: "Clefable",
    pid: "clefable",
    png: "clefable",
  },
  {
    name: "Vulpix",
    pid: "vulpix",
    png: "vulpix",
  },
  {
    name: "Vulpix-Alola",
    pid: "vulpixalola",
    png: "vulpix-alola",
  },
  {
    name: "Ninetales",
    pid: "ninetales",
    png: "ninetales",
  },
  {
    name: "Ninetales-Alola",
    pid: "ninetalesalola",
    png: "ninetales-alola",
  },
  {
    name: "Jigglypuff",
    pid: "jigglypuff",
    png: "jigglypuff",
  },
  {
    name: "Wigglytuff",
    pid: "wigglytuff",
    png: "wigglytuff",
  },
  {
    name: "Zubat",
    pid: "zubat",
    png: "zubat",
  },
  {
    name: "Golbat",
    pid: "golbat",
    png: "golbat",
  },
  {
    name: "Oddish",
    pid: "oddish",
    png: "oddish",
  },
  {
    name: "Gloom",
    pid: "gloom",
    png: "gloom",
  },
  {
    name: "Vileplume",
    pid: "vileplume",
    png: "vileplume",
  },
  {
    name: "Paras",
    pid: "paras",
    png: "paras",
  },
  {
    name: "Parasect",
    pid: "parasect",
    png: "parasect",
  },
  {
    name: "Venonat",
    pid: "venonat",
    png: "venonat",
  },
  {
    name: "Venomoth",
    pid: "venomoth",
    png: "venomoth",
  },
  {
    name: "Diglett",
    pid: "diglett",
    png: "diglett",
  },
  {
    name: "Diglett-Alola",
    pid: "diglettalola",
    png: "diglett-alola",
  },
  {
    name: "Dugtrio",
    pid: "dugtrio",
    png: "dugtrio",
  },
  {
    name: "Dugtrio-Alola",
    pid: "dugtrioalola",
    png: "dugtrio-alola",
  },
  {
    name: "Meowth",
    pid: "meowth",
    png: "meowth",
  },
  {
    name: "Meowth-Alola",
    pid: "meowthalola",
    png: "meowth-alola",
  },
  {
    name: "Meowth-Galar",
    pid: "meowthgalar",
    png: "meowth-galar",
  },
  {
    name: "Persian",
    pid: "persian",
    png: "persian",
  },
  {
    name: "Persian-Alola",
    pid: "persianalola",
    png: "persian-alola",
  },
  {
    name: "Psyduck",
    pid: "psyduck",
    png: "psyduck",
  },
  {
    name: "Golduck",
    pid: "golduck",
    png: "golduck",
  },
  {
    name: "Mankey",
    pid: "mankey",
    png: "mankey",
  },
  {
    name: "Primeape",
    pid: "primeape",
    png: "primeape",
  },
  {
    name: "Growlithe",
    pid: "growlithe",
    png: "growlithe",
  },
  {
    name: "Growlithe-Hisui",
    pid: "growlithehisui",
    png: "growlithe-hisui",
  },
  {
    name: "Arcanine",
    pid: "arcanine",
    png: "arcanine",
  },
  {
    name: "Arcanine-Hisui",
    pid: "arcaninehisui",
    png: "arcanine-hisui",
  },
  {
    name: "Poliwag",
    pid: "poliwag",
    png: "poliwag",
  },
  {
    name: "Poliwhirl",
    pid: "poliwhirl",
    png: "poliwhirl",
  },
  {
    name: "Poliwrath",
    pid: "poliwrath",
    png: "poliwrath",
  },
  {
    name: "Abra",
    pid: "abra",
    png: "abra",
  },
  {
    name: "Kadabra",
    pid: "kadabra",
    png: "kadabra",
  },
  {
    name: "Alakazam",
    pid: "alakazam",
    png: "alakazam",
  },
  {
    name: "Machop",
    pid: "machop",
    png: "machop",
  },
  {
    name: "Machoke",
    pid: "machoke",
    png: "machoke",
  },
  {
    name: "Machamp",
    pid: "machamp",
    png: "machamp",
  },
  {
    name: "Bellsprout",
    pid: "bellsprout",
    png: "bellsprout",
  },
  {
    name: "Weepinbell",
    pid: "weepinbell",
    png: "weepinbell",
  },
  {
    name: "Victreebel",
    pid: "victreebel",
    png: "victreebel",
  },
  {
    name: "Tentacool",
    pid: "tentacool",
    png: "tentacool",
  },
  {
    name: "Tentacruel",
    pid: "tentacruel",
    png: "tentacruel",
  },
  {
    name: "Geodude",
    pid: "geodude",
    png: "geodude",
  },
  {
    name: "Geodude-Alola",
    pid: "geodudealola",
    png: "geodude-alola",
  },
  {
    name: "Graveler",
    pid: "graveler",
    png: "graveler",
  },
  {
    name: "Graveler-Alola",
    pid: "graveleralola",
    png: "graveler-alola",
  },
  {
    name: "Golem",
    pid: "golem",
    png: "golem",
  },
  {
    name: "Golem-Alola",
    pid: "golemalola",
    png: "golem-alola",
  },
  {
    name: "Ponyta",
    pid: "ponyta",
    png: "ponyta",
  },
  {
    name: "Ponyta-Galar",
    pid: "ponytagalar",
    png: "ponyta-galar",
  },
  {
    name: "Rapidash",
    pid: "rapidash",
    png: "rapidash",
  },
  {
    name: "Rapidash-Galar",
    pid: "rapidashgalar",
    png: "rapidash-galar",
  },
  {
    name: "Slowpoke",
    pid: "slowpoke",
    png: "slowpoke",
  },
  {
    name: "Slowpoke-Galar",
    pid: "slowpokegalar",
    png: "slowpoke-galar",
  },
  {
    name: "Slowbro",
    pid: "slowbro",
    png: "slowbro",
  },
  {
    name: "Slowbro-Galar",
    pid: "slowbrogalar",
    png: "slowbro-galar",
  },
  {
    name: "Magnemite",
    pid: "magnemite",
    png: "magnemite",
  },
  {
    name: "Magneton",
    pid: "magneton",
    png: "magneton",
  },
  {
    name: "Farfetch’d",
    pid: "farfetchd",
    png: "farfetchd",
  },
  {
    name: "Farfetch’d-Galar",
    pid: "farfetchdgalar",
    png: "farfetchd-galar",
  },
  {
    name: "Doduo",
    pid: "doduo",
    png: "doduo",
  },
  {
    name: "Dodrio",
    pid: "dodrio",
    png: "dodrio",
  },
  {
    name: "Seel",
    pid: "seel",
    png: "seel",
  },
  {
    name: "Dewgong",
    pid: "dewgong",
    png: "dewgong",
  },
  {
    name: "Grimer",
    pid: "grimer",
    png: "grimer",
  },
  {
    name: "Grimer-Alola",
    pid: "grimeralola",
    png: "grimer-alola",
  },
  {
    name: "Muk",
    pid: "muk",
    png: "muk",
  },
  {
    name: "Muk-Alola",
    pid: "mukalola",
    png: "muk-alola",
  },
  {
    name: "Shellder",
    pid: "shellder",
    png: "shellder",
  },
  {
    name: "Cloyster",
    pid: "cloyster",
    png: "cloyster",
  },
  {
    name: "Gastly",
    pid: "gastly",
    png: "gastly",
  },
  {
    name: "Haunter",
    pid: "haunter",
    png: "haunter",
  },
  {
    name: "Gengar",
    pid: "gengar",
    png: "gengar",
  },
  {
    name: "Onix",
    pid: "onix",
    png: "onix",
  },
  {
    name: "Drowzee",
    pid: "drowzee",
    png: "drowzee",
  },
  {
    name: "Hypno",
    pid: "hypno",
    png: "hypno",
  },
  {
    name: "Krabby",
    pid: "krabby",
    png: "krabby",
  },
  {
    name: "Kingler",
    pid: "kingler",
    png: "kingler",
  },
  {
    name: "Voltorb",
    pid: "voltorb",
    png: "voltorb",
  },
  {
    name: "Voltorb-Hisui",
    pid: "voltorbhisui",
    png: "voltorb-hisui",
  },
  {
    name: "Electrode",
    pid: "electrode",
    png: "electrode",
  },
  {
    name: "Electrode-Hisui",
    pid: "electrodehisui",
    png: "electrode-hisui",
  },
  {
    name: "Exeggcute",
    pid: "exeggcute",
    png: "exeggcute",
  },
  {
    name: "Exeggutor",
    pid: "exeggutor",
    png: "exeggutor",
  },
  {
    name: "Exeggutor-Alola",
    pid: "exeggutoralola",
    png: "exeggutor-alola",
  },
  {
    name: "Cubone",
    pid: "cubone",
    png: "cubone",
  },
  {
    name: "Marowak",
    pid: "marowak",
    png: "marowak",
  },
  {
    name: "Marowak-Alola",
    pid: "marowakalola",
    png: "marowak-alola",
  },
  {
    name: "Hitmonlee",
    pid: "hitmonlee",
    png: "hitmonlee",
  },
  {
    name: "Hitmonchan",
    pid: "hitmonchan",
    png: "hitmonchan",
  },
  {
    name: "Lickitung",
    pid: "lickitung",
    png: "lickitung",
  },
  {
    name: "Koffing",
    pid: "koffing",
    png: "koffing",
  },
  {
    name: "Weezing",
    pid: "weezing",
    png: "weezing",
  },
  {
    name: "Weezing-Galar",
    pid: "weezinggalar",
    png: "weezing-galar",
  },
  {
    name: "Rhyhorn",
    pid: "rhyhorn",
    png: "rhyhorn",
  },
  {
    name: "Rhydon",
    pid: "rhydon",
    png: "rhydon",
  },
  {
    name: "Chansey",
    pid: "chansey",
    png: "chansey",
  },
  {
    name: "Tangela",
    pid: "tangela",
    png: "tangela",
  },
  {
    name: "Kangaskhan",
    pid: "kangaskhan",
    png: "kangaskhan",
  },
  {
    name: "Horsea",
    pid: "horsea",
    png: "horsea",
  },
  {
    name: "Seadra",
    pid: "seadra",
    png: "seadra",
  },
  {
    name: "Goldeen",
    pid: "goldeen",
    png: "goldeen",
  },
  {
    name: "Seaking",
    pid: "seaking",
    png: "seaking",
  },
  {
    name: "Staryu",
    pid: "staryu",
    png: "staryu",
  },
  {
    name: "Starmie",
    pid: "starmie",
    png: "starmie",
  },
  {
    name: "Mr. Mime",
    pid: "mrmime",
    png: "mrmime",
  },
  {
    name: "Mr. Mime-Galar",
    pid: "mrmimegalar",
    png: "mrmime-galar",
  },
  {
    name: "Scyther",
    pid: "scyther",
    png: "scyther",
  },
  {
    name: "Jynx",
    pid: "jynx",
    png: "jynx",
  },
  {
    name: "Electabuzz",
    pid: "electabuzz",
    png: "electabuzz",
  },
  {
    name: "Magmar",
    pid: "magmar",
    png: "magmar",
  },
  {
    name: "Pinsir",
    pid: "pinsir",
    png: "pinsir",
  },
  {
    name: "Tauros",
    pid: "tauros",
    png: "tauros",
  },
  {
    name: "Tauros-Paldea-Combat",
    pid: "taurospaldeacombat",
    png: "tauros-paldeacombat",
  },
  {
    name: "Tauros-Paldea-Blaze",
    pid: "taurospaldeablaze",
    png: "tauros-paldeablaze",
  },
  {
    name: "Tauros-Paldea-Aqua",
    pid: "taurospaldeaaqua",
    png: "tauros-paldeaaqua",
  },
  {
    name: "Magikarp",
    pid: "magikarp",
    png: "magikarp",
  },
  {
    name: "Gyarados",
    pid: "gyarados",
    png: "gyarados",
  },
  {
    name: "Lapras",
    pid: "lapras",
    png: "lapras",
  },
  {
    name: "Ditto",
    pid: "ditto",
    png: "ditto",
  },
  {
    name: "Eevee",
    pid: "eevee",
    png: "eevee",
  },
  {
    name: "Vaporeon",
    pid: "vaporeon",
    png: "vaporeon",
  },
  {
    name: "Jolteon",
    pid: "jolteon",
    png: "jolteon",
  },
  {
    name: "Flareon",
    pid: "flareon",
    png: "flareon",
  },
  {
    name: "Porygon",
    pid: "porygon",
    png: "porygon",
  },
  {
    name: "Omanyte",
    pid: "omanyte",
    png: "omanyte",
  },
  {
    name: "Omastar",
    pid: "omastar",
    png: "omastar",
  },
  {
    name: "Kabuto",
    pid: "kabuto",
    png: "kabuto",
  },
  {
    name: "Kabutops",
    pid: "kabutops",
    png: "kabutops",
  },
  {
    name: "Aerodactyl",
    pid: "aerodactyl",
    png: "aerodactyl",
  },
  {
    name: "Snorlax",
    pid: "snorlax",
    png: "snorlax",
  },
  {
    name: "Articuno",
    pid: "articuno",
    png: "articuno",
  },
  {
    name: "Articuno-Galar",
    pid: "articunogalar",
    png: "articuno-galar",
  },
  {
    name: "Zapdos",
    pid: "zapdos",
    png: "zapdos",
  },
  {
    name: "Zapdos-Galar",
    pid: "zapdosgalar",
    png: "zapdos-galar",
  },
  {
    name: "Moltres",
    pid: "moltres",
    png: "moltres",
  },
  {
    name: "Moltres-Galar",
    pid: "moltresgalar",
    png: "moltres-galar",
  },
  {
    name: "Dratini",
    pid: "dratini",
    png: "dratini",
  },
  {
    name: "Dragonair",
    pid: "dragonair",
    png: "dragonair",
  },
  {
    name: "Dragonite",
    pid: "dragonite",
    png: "dragonite",
  },
  {
    name: "Mewtwo",
    pid: "mewtwo",
    png: "mewtwo",
  },
  {
    name: "Mew",
    pid: "mew",
    png: "mew",
  },
  {
    name: "Chikorita",
    pid: "chikorita",
    png: "chikorita",
  },
  {
    name: "Bayleef",
    pid: "bayleef",
    png: "bayleef",
  },
  {
    name: "Meganium",
    pid: "meganium",
    png: "meganium",
  },
  {
    name: "Cyndaquil",
    pid: "cyndaquil",
    png: "cyndaquil",
  },
  {
    name: "Quilava",
    pid: "quilava",
    png: "quilava",
  },
  {
    name: "Typhlosion",
    pid: "typhlosion",
    png: "typhlosion",
  },
  {
    name: "Typhlosion-Hisui",
    pid: "typhlosionhisui",
    png: "typhlosion-hisui",
  },
  {
    name: "Totodile",
    pid: "totodile",
    png: "totodile",
  },
  {
    name: "Croconaw",
    pid: "croconaw",
    png: "croconaw",
  },
  {
    name: "Feraligatr",
    pid: "feraligatr",
    png: "feraligatr",
  },
  {
    name: "Sentret",
    pid: "sentret",
    png: "sentret",
  },
  {
    name: "Furret",
    pid: "furret",
    png: "furret",
  },
  {
    name: "Hoothoot",
    pid: "hoothoot",
    png: "hoothoot",
  },
  {
    name: "Noctowl",
    pid: "noctowl",
    png: "noctowl",
  },
  {
    name: "Ledyba",
    pid: "ledyba",
    png: "ledyba",
  },
  {
    name: "Ledian",
    pid: "ledian",
    png: "ledian",
  },
  {
    name: "Spinarak",
    pid: "spinarak",
    png: "spinarak",
  },
  {
    name: "Ariados",
    pid: "ariados",
    png: "ariados",
  },
  {
    name: "Crobat",
    pid: "crobat",
    png: "crobat",
  },
  {
    name: "Chinchou",
    pid: "chinchou",
    png: "chinchou",
  },
  {
    name: "Lanturn",
    pid: "lanturn",
    png: "lanturn",
  },
  {
    name: "Pichu",
    pid: "pichu",
    png: "pichu",
  },
  {
    name: "Cleffa",
    pid: "cleffa",
    png: "cleffa",
  },
  {
    name: "Igglybuff",
    pid: "igglybuff",
    png: "igglybuff",
  },
  {
    name: "Togepi",
    pid: "togepi",
    png: "togepi",
  },
  {
    name: "Togetic",
    pid: "togetic",
    png: "togetic",
  },
  {
    name: "Natu",
    pid: "natu",
    png: "natu",
  },
  {
    name: "Xatu",
    pid: "xatu",
    png: "xatu",
  },
  {
    name: "Mareep",
    pid: "mareep",
    png: "mareep",
  },
  {
    name: "Flaaffy",
    pid: "flaaffy",
    png: "flaaffy",
  },
  {
    name: "Ampharos",
    pid: "ampharos",
    png: "ampharos",
  },
  {
    name: "Bellossom",
    pid: "bellossom",
    png: "bellossom",
  },
  {
    name: "Marill",
    pid: "marill",
    png: "marill",
  },
  {
    name: "Azumarill",
    pid: "azumarill",
    png: "azumarill",
  },
  {
    name: "Sudowoodo",
    pid: "sudowoodo",
    png: "sudowoodo",
  },
  {
    name: "Politoed",
    pid: "politoed",
    png: "politoed",
  },
  {
    name: "Hoppip",
    pid: "hoppip",
    png: "hoppip",
  },
  {
    name: "Skiploom",
    pid: "skiploom",
    png: "skiploom",
  },
  {
    name: "Jumpluff",
    pid: "jumpluff",
    png: "jumpluff",
  },
  {
    name: "Aipom",
    pid: "aipom",
    png: "aipom",
  },
  {
    name: "Sunkern",
    pid: "sunkern",
    png: "sunkern",
  },
  {
    name: "Sunflora",
    pid: "sunflora",
    png: "sunflora",
  },
  {
    name: "Yanma",
    pid: "yanma",
    png: "yanma",
  },
  {
    name: "Wooper",
    pid: "wooper",
    png: "wooper",
  },
  {
    name: "Wooper-Paldea",
    pid: "wooperpaldea",
    png: "wooper-paldea",
  },
  {
    name: "Quagsire",
    pid: "quagsire",
    png: "quagsire",
  },
  {
    name: "Espeon",
    pid: "espeon",
    png: "espeon",
  },
  {
    name: "Umbreon",
    pid: "umbreon",
    png: "umbreon",
  },
  {
    name: "Murkrow",
    pid: "murkrow",
    png: "murkrow",
  },
  {
    name: "Slowking",
    pid: "slowking",
    png: "slowking",
  },
  {
    name: "Slowking-Galar",
    pid: "slowkinggalar",
    png: "slowking-galar",
  },
  {
    name: "Misdreavus",
    pid: "misdreavus",
    png: "misdreavus",
  },
  {
    name: "Unown",
    pid: "unown",
    png: "unown",
  },
  {
    name: "Wobbuffet",
    pid: "wobbuffet",
    png: "wobbuffet",
  },
  {
    name: "Girafarig",
    pid: "girafarig",
    png: "girafarig",
  },
  {
    name: "Pineco",
    pid: "pineco",
    png: "pineco",
  },
  {
    name: "Forretress",
    pid: "forretress",
    png: "forretress",
  },
  {
    name: "Dunsparce",
    pid: "dunsparce",
    png: "dunsparce",
  },
  {
    name: "Gligar",
    pid: "gligar",
    png: "gligar",
  },
  {
    name: "Steelix",
    pid: "steelix",
    png: "steelix",
  },
  {
    name: "Snubbull",
    pid: "snubbull",
    png: "snubbull",
  },
  {
    name: "Granbull",
    pid: "granbull",
    png: "granbull",
  },
  {
    name: "Qwilfish",
    pid: "qwilfish",
    png: "qwilfish",
  },
  {
    name: "Qwilfish-Hisui",
    pid: "qwilfishhisui",
    png: "qwilfish-hisui",
  },
  {
    name: "Scizor",
    pid: "scizor",
    png: "scizor",
  },
  {
    name: "Shuckle",
    pid: "shuckle",
    png: "shuckle",
  },
  {
    name: "Heracross",
    pid: "heracross",
    png: "heracross",
  },
  {
    name: "Sneasel",
    pid: "sneasel",
    png: "sneasel",
  },
  {
    name: "Sneasel-Hisui",
    pid: "sneaselhisui",
    png: "sneasel-hisui",
  },
  {
    name: "Teddiursa",
    pid: "teddiursa",
    png: "teddiursa",
  },
  {
    name: "Ursaring",
    pid: "ursaring",
    png: "ursaring",
  },
  {
    name: "Slugma",
    pid: "slugma",
    png: "slugma",
  },
  {
    name: "Magcargo",
    pid: "magcargo",
    png: "magcargo",
  },
  {
    name: "Swinub",
    pid: "swinub",
    png: "swinub",
  },
  {
    name: "Piloswine",
    pid: "piloswine",
    png: "piloswine",
  },
  {
    name: "Corsola",
    pid: "corsola",
    png: "corsola",
  },
  {
    name: "Corsola-Galar",
    pid: "corsolagalar",
    png: "corsola-galar",
  },
  {
    name: "Remoraid",
    pid: "remoraid",
    png: "remoraid",
  },
  {
    name: "Octillery",
    pid: "octillery",
    png: "octillery",
  },
  {
    name: "Delibird",
    pid: "delibird",
    png: "delibird",
  },
  {
    name: "Mantine",
    pid: "mantine",
    png: "mantine",
  },
  {
    name: "Skarmory",
    pid: "skarmory",
    png: "skarmory",
  },
  {
    name: "Houndour",
    pid: "houndour",
    png: "houndour",
  },
  {
    name: "Houndoom",
    pid: "houndoom",
    png: "houndoom",
  },
  {
    name: "Kingdra",
    pid: "kingdra",
    png: "kingdra",
  },
  {
    name: "Phanpy",
    pid: "phanpy",
    png: "phanpy",
  },
  {
    name: "Donphan",
    pid: "donphan",
    png: "donphan",
  },
  {
    name: "Porygon2",
    pid: "porygon2",
    png: "porygon2",
  },
  {
    name: "Stantler",
    pid: "stantler",
    png: "stantler",
  },
  {
    name: "Smeargle",
    pid: "smeargle",
    png: "smeargle",
  },
  {
    name: "Tyrogue",
    pid: "tyrogue",
    png: "tyrogue",
  },
  {
    name: "Hitmontop",
    pid: "hitmontop",
    png: "hitmontop",
  },
  {
    name: "Smoochum",
    pid: "smoochum",
    png: "smoochum",
  },
  {
    name: "Elekid",
    pid: "elekid",
    png: "elekid",
  },
  {
    name: "Magby",
    pid: "magby",
    png: "magby",
  },
  {
    name: "Miltank",
    pid: "miltank",
    png: "miltank",
  },
  {
    name: "Blissey",
    pid: "blissey",
    png: "blissey",
  },
  {
    name: "Raikou",
    pid: "raikou",
    png: "raikou",
  },
  {
    name: "Entei",
    pid: "entei",
    png: "entei",
  },
  {
    name: "Suicune",
    pid: "suicune",
    png: "suicune",
  },
  {
    name: "Larvitar",
    pid: "larvitar",
    png: "larvitar",
  },
  {
    name: "Pupitar",
    pid: "pupitar",
    png: "pupitar",
  },
  {
    name: "Tyranitar",
    pid: "tyranitar",
    png: "tyranitar",
  },
  {
    name: "Lugia",
    pid: "lugia",
    png: "lugia",
  },
  {
    name: "Ho-Oh",
    pid: "hooh",
    png: "hooh",
  },
  {
    name: "Celebi",
    pid: "celebi",
    png: "celebi",
  },
  {
    name: "Treecko",
    pid: "treecko",
    png: "treecko",
  },
  {
    name: "Grovyle",
    pid: "grovyle",
    png: "grovyle",
  },
  {
    name: "Sceptile",
    pid: "sceptile",
    png: "sceptile",
  },
  {
    name: "Torchic",
    pid: "torchic",
    png: "torchic",
  },
  {
    name: "Combusken",
    pid: "combusken",
    png: "combusken",
  },
  {
    name: "Blaziken",
    pid: "blaziken",
    png: "blaziken",
  },
  {
    name: "Mudkip",
    pid: "mudkip",
    png: "mudkip",
  },
  {
    name: "Marshtomp",
    pid: "marshtomp",
    png: "marshtomp",
  },
  {
    name: "Swampert",
    pid: "swampert",
    png: "swampert",
  },
  {
    name: "Poochyena",
    pid: "poochyena",
    png: "poochyena",
  },
  {
    name: "Mightyena",
    pid: "mightyena",
    png: "mightyena",
  },
  {
    name: "Zigzagoon",
    pid: "zigzagoon",
    png: "zigzagoon",
  },
  {
    name: "Zigzagoon-Galar",
    pid: "zigzagoongalar",
    png: "zigzagoon-galar",
  },
  {
    name: "Linoone",
    pid: "linoone",
    png: "linoone",
  },
  {
    name: "Linoone-Galar",
    pid: "linoonegalar",
    png: "linoone-galar",
  },
  {
    name: "Wurmple",
    pid: "wurmple",
    png: "wurmple",
  },
  {
    name: "Silcoon",
    pid: "silcoon",
    png: "silcoon",
  },
  {
    name: "Beautifly",
    pid: "beautifly",
    png: "beautifly",
  },
  {
    name: "Cascoon",
    pid: "cascoon",
    png: "cascoon",
  },
  {
    name: "Dustox",
    pid: "dustox",
    png: "dustox",
  },
  {
    name: "Lotad",
    pid: "lotad",
    png: "lotad",
  },
  {
    name: "Lombre",
    pid: "lombre",
    png: "lombre",
  },
  {
    name: "Ludicolo",
    pid: "ludicolo",
    png: "ludicolo",
  },
  {
    name: "Seedot",
    pid: "seedot",
    png: "seedot",
  },
  {
    name: "Nuzleaf",
    pid: "nuzleaf",
    png: "nuzleaf",
  },
  {
    name: "Shiftry",
    pid: "shiftry",
    png: "shiftry",
  },
  {
    name: "Taillow",
    pid: "taillow",
    png: "taillow",
  },
  {
    name: "Swellow",
    pid: "swellow",
    png: "swellow",
  },
  {
    name: "Wingull",
    pid: "wingull",
    png: "wingull",
  },
  {
    name: "Pelipper",
    pid: "pelipper",
    png: "pelipper",
  },
  {
    name: "Ralts",
    pid: "ralts",
    png: "ralts",
  },
  {
    name: "Kirlia",
    pid: "kirlia",
    png: "kirlia",
  },
  {
    name: "Gardevoir",
    pid: "gardevoir",
    png: "gardevoir",
  },
  {
    name: "Surskit",
    pid: "surskit",
    png: "surskit",
  },
  {
    name: "Masquerain",
    pid: "masquerain",
    png: "masquerain",
  },
  {
    name: "Shroomish",
    pid: "shroomish",
    png: "shroomish",
  },
  {
    name: "Breloom",
    pid: "breloom",
    png: "breloom",
  },
  {
    name: "Slakoth",
    pid: "slakoth",
    png: "slakoth",
  },
  {
    name: "Vigoroth",
    pid: "vigoroth",
    png: "vigoroth",
  },
  {
    name: "Slaking",
    pid: "slaking",
    png: "slaking",
  },
  {
    name: "Nincada",
    pid: "nincada",
    png: "nincada",
  },
  {
    name: "Ninjask",
    pid: "ninjask",
    png: "ninjask",
  },
  {
    name: "Shedinja",
    pid: "shedinja",
    png: "shedinja",
  },
  {
    name: "Whismur",
    pid: "whismur",
    png: "whismur",
  },
  {
    name: "Loudred",
    pid: "loudred",
    png: "loudred",
  },
  {
    name: "Exploud",
    pid: "exploud",
    png: "exploud",
  },
  {
    name: "Makuhita",
    pid: "makuhita",
    png: "makuhita",
  },
  {
    name: "Hariyama",
    pid: "hariyama",
    png: "hariyama",
  },
  {
    name: "Azurill",
    pid: "azurill",
    png: "azurill",
  },
  {
    name: "Nosepass",
    pid: "nosepass",
    png: "nosepass",
  },
  {
    name: "Skitty",
    pid: "skitty",
    png: "skitty",
  },
  {
    name: "Delcatty",
    pid: "delcatty",
    png: "delcatty",
  },
  {
    name: "Sableye",
    pid: "sableye",
    png: "sableye",
  },
  {
    name: "Mawile",
    pid: "mawile",
    png: "mawile",
  },
  {
    name: "Aron",
    pid: "aron",
    png: "aron",
  },
  {
    name: "Lairon",
    pid: "lairon",
    png: "lairon",
  },
  {
    name: "Aggron",
    pid: "aggron",
    png: "aggron",
  },
  {
    name: "Meditite",
    pid: "meditite",
    png: "meditite",
  },
  {
    name: "Medicham",
    pid: "medicham",
    png: "medicham",
  },
  {
    name: "Electrike",
    pid: "electrike",
    png: "electrike",
  },
  {
    name: "Manectric",
    pid: "manectric",
    png: "manectric",
  },
  {
    name: "Plusle",
    pid: "plusle",
    png: "plusle",
  },
  {
    name: "Minun",
    pid: "minun",
    png: "minun",
  },
  {
    name: "Volbeat",
    pid: "volbeat",
    png: "volbeat",
  },
  {
    name: "Illumise",
    pid: "illumise",
    png: "illumise",
  },
  {
    name: "Roselia",
    pid: "roselia",
    png: "roselia",
  },
  {
    name: "Gulpin",
    pid: "gulpin",
    png: "gulpin",
  },
  {
    name: "Swalot",
    pid: "swalot",
    png: "swalot",
  },
  {
    name: "Carvanha",
    pid: "carvanha",
    png: "carvanha",
  },
  {
    name: "Sharpedo",
    pid: "sharpedo",
    png: "sharpedo",
  },
  {
    name: "Wailmer",
    pid: "wailmer",
    png: "wailmer",
  },
  {
    name: "Wailord",
    pid: "wailord",
    png: "wailord",
  },
  {
    name: "Numel",
    pid: "numel",
    png: "numel",
  },
  {
    name: "Camerupt",
    pid: "camerupt",
    png: "camerupt",
  },
  {
    name: "Torkoal",
    pid: "torkoal",
    png: "torkoal",
  },
  {
    name: "Spoink",
    pid: "spoink",
    png: "spoink",
  },
  {
    name: "Grumpig",
    pid: "grumpig",
    png: "grumpig",
  },
  {
    name: "Spinda",
    pid: "spinda",
    png: "spinda",
  },
  {
    name: "Trapinch",
    pid: "trapinch",
    png: "trapinch",
  },
  {
    name: "Vibrava",
    pid: "vibrava",
    png: "vibrava",
  },
  {
    name: "Flygon",
    pid: "flygon",
    png: "flygon",
  },
  {
    name: "Cacnea",
    pid: "cacnea",
    png: "cacnea",
  },
  {
    name: "Cacturne",
    pid: "cacturne",
    png: "cacturne",
  },
  {
    name: "Swablu",
    pid: "swablu",
    png: "swablu",
  },
  {
    name: "Altaria",
    pid: "altaria",
    png: "altaria",
  },
  {
    name: "Zangoose",
    pid: "zangoose",
    png: "zangoose",
  },
  {
    name: "Seviper",
    pid: "seviper",
    png: "seviper",
  },
  {
    name: "Lunatone",
    pid: "lunatone",
    png: "lunatone",
  },
  {
    name: "Solrock",
    pid: "solrock",
    png: "solrock",
  },
  {
    name: "Barboach",
    pid: "barboach",
    png: "barboach",
  },
  {
    name: "Whiscash",
    pid: "whiscash",
    png: "whiscash",
  },
  {
    name: "Corphish",
    pid: "corphish",
    png: "corphish",
  },
  {
    name: "Crawdaunt",
    pid: "crawdaunt",
    png: "crawdaunt",
  },
  {
    name: "Baltoy",
    pid: "baltoy",
    png: "baltoy",
  },
  {
    name: "Claydol",
    pid: "claydol",
    png: "claydol",
  },
  {
    name: "Lileep",
    pid: "lileep",
    png: "lileep",
  },
  {
    name: "Cradily",
    pid: "cradily",
    png: "cradily",
  },
  {
    name: "Anorith",
    pid: "anorith",
    png: "anorith",
  },
  {
    name: "Armaldo",
    pid: "armaldo",
    png: "armaldo",
  },
  {
    name: "Feebas",
    pid: "feebas",
    png: "feebas",
  },
  {
    name: "Milotic",
    pid: "milotic",
    png: "milotic",
  },
  {
    name: "Castform",
    pid: "castform",
    png: "castform",
  },
  {
    name: "Kecleon",
    pid: "kecleon",
    png: "kecleon",
  },
  {
    name: "Shuppet",
    pid: "shuppet",
    png: "shuppet",
  },
  {
    name: "Banette",
    pid: "banette",
    png: "banette",
  },
  {
    name: "Duskull",
    pid: "duskull",
    png: "duskull",
  },
  {
    name: "Dusclops",
    pid: "dusclops",
    png: "dusclops",
  },
  {
    name: "Tropius",
    pid: "tropius",
    png: "tropius",
  },
  {
    name: "Chimecho",
    pid: "chimecho",
    png: "chimecho",
  },
  {
    name: "Absol",
    pid: "absol",
    png: "absol",
  },
  {
    name: "Wynaut",
    pid: "wynaut",
    png: "wynaut",
  },
  {
    name: "Snorunt",
    pid: "snorunt",
    png: "snorunt",
  },
  {
    name: "Glalie",
    pid: "glalie",
    png: "glalie",
  },
  {
    name: "Spheal",
    pid: "spheal",
    png: "spheal",
  },
  {
    name: "Sealeo",
    pid: "sealeo",
    png: "sealeo",
  },
  {
    name: "Walrein",
    pid: "walrein",
    png: "walrein",
  },
  {
    name: "Clamperl",
    pid: "clamperl",
    png: "clamperl",
  },
  {
    name: "Huntail",
    pid: "huntail",
    png: "huntail",
  },
  {
    name: "Gorebyss",
    pid: "gorebyss",
    png: "gorebyss",
  },
  {
    name: "Relicanth",
    pid: "relicanth",
    png: "relicanth",
  },
  {
    name: "Luvdisc",
    pid: "luvdisc",
    png: "luvdisc",
  },
  {
    name: "Bagon",
    pid: "bagon",
    png: "bagon",
  },
  {
    name: "Shelgon",
    pid: "shelgon",
    png: "shelgon",
  },
  {
    name: "Salamence",
    pid: "salamence",
    png: "salamence",
  },
  {
    name: "Beldum",
    pid: "beldum",
    png: "beldum",
  },
  {
    name: "Metang",
    pid: "metang",
    png: "metang",
  },
  {
    name: "Metagross",
    pid: "metagross",
    png: "metagross",
  },
  {
    name: "Regirock",
    pid: "regirock",
    png: "regirock",
  },
  {
    name: "Regice",
    pid: "regice",
    png: "regice",
  },
  {
    name: "Registeel",
    pid: "registeel",
    png: "registeel",
  },
  {
    name: "Latias",
    pid: "latias",
    png: "latias",
  },
  {
    name: "Latios",
    pid: "latios",
    png: "latios",
  },
  {
    name: "Kyogre",
    pid: "kyogre",
    png: "kyogre",
  },
  {
    name: "Groudon",
    pid: "groudon",
    png: "groudon",
  },
  {
    name: "Rayquaza",
    pid: "rayquaza",
    png: "rayquaza",
  },
  {
    name: "Jirachi",
    pid: "jirachi",
    png: "jirachi",
  },
  {
    name: "Deoxys",
    pid: "deoxys",
    png: "deoxys",
  },
  {
    name: "Deoxys-Attack",
    pid: "deoxysattack",
    png: "deoxys-attack",
  },
  {
    name: "Deoxys-Defense",
    pid: "deoxysdefense",
    png: "deoxys-defense",
  },
  {
    name: "Deoxys-Speed",
    pid: "deoxysspeed",
    png: "deoxys-speed",
  },
  {
    name: "Turtwig",
    pid: "turtwig",
    png: "turtwig",
  },
  {
    name: "Grotle",
    pid: "grotle",
    png: "grotle",
  },
  {
    name: "Torterra",
    pid: "torterra",
    png: "torterra",
  },
  {
    name: "Chimchar",
    pid: "chimchar",
    png: "chimchar",
  },
  {
    name: "Monferno",
    pid: "monferno",
    png: "monferno",
  },
  {
    name: "Infernape",
    pid: "infernape",
    png: "infernape",
  },
  {
    name: "Piplup",
    pid: "piplup",
    png: "piplup",
  },
  {
    name: "Prinplup",
    pid: "prinplup",
    png: "prinplup",
  },
  {
    name: "Empoleon",
    pid: "empoleon",
    png: "empoleon",
  },
  {
    name: "Starly",
    pid: "starly",
    png: "starly",
  },
  {
    name: "Staravia",
    pid: "staravia",
    png: "staravia",
  },
  {
    name: "Staraptor",
    pid: "staraptor",
    png: "staraptor",
  },
  {
    name: "Bidoof",
    pid: "bidoof",
    png: "bidoof",
  },
  {
    name: "Bibarel",
    pid: "bibarel",
    png: "bibarel",
  },
  {
    name: "Kricketot",
    pid: "kricketot",
    png: "kricketot",
  },
  {
    name: "Kricketune",
    pid: "kricketune",
    png: "kricketune",
  },
  {
    name: "Shinx",
    pid: "shinx",
    png: "shinx",
  },
  {
    name: "Luxio",
    pid: "luxio",
    png: "luxio",
  },
  {
    name: "Luxray",
    pid: "luxray",
    png: "luxray",
  },
  {
    name: "Budew",
    pid: "budew",
    png: "budew",
  },
  {
    name: "Roserade",
    pid: "roserade",
    png: "roserade",
  },
  {
    name: "Cranidos",
    pid: "cranidos",
    png: "cranidos",
  },
  {
    name: "Rampardos",
    pid: "rampardos",
    png: "rampardos",
  },
  {
    name: "Shieldon",
    pid: "shieldon",
    png: "shieldon",
  },
  {
    name: "Bastiodon",
    pid: "bastiodon",
    png: "bastiodon",
  },
  {
    name: "Burmy",
    pid: "burmy",
    png: "burmy",
  },
  {
    name: "Wormadam",
    pid: "wormadam",
    png: "wormadam",
  },
  {
    name: "Wormadam-Sandy",
    pid: "wormadamsandy",
    png: "wormadam-sandy",
  },
  {
    name: "Wormadam-Trash",
    pid: "wormadamtrash",
    png: "wormadam-trash",
  },
  {
    name: "Mothim",
    pid: "mothim",
    png: "mothim",
  },
  {
    name: "Combee",
    pid: "combee",
    png: "combee",
  },
  {
    name: "Vespiquen",
    pid: "vespiquen",
    png: "vespiquen",
  },
  {
    name: "Pachirisu",
    pid: "pachirisu",
    png: "pachirisu",
  },
  {
    name: "Buizel",
    pid: "buizel",
    png: "buizel",
  },
  {
    name: "Floatzel",
    pid: "floatzel",
    png: "floatzel",
  },
  {
    name: "Cherubi",
    pid: "cherubi",
    png: "cherubi",
  },
  {
    name: "Cherrim",
    pid: "cherrim",
    png: "cherrim",
  },
  {
    name: "Shellos",
    pid: "shellos",
    png: "shellos",
  },
  {
    name: "Gastrodon",
    pid: "gastrodon",
    png: "gastrodon",
  },
  {
    name: "Ambipom",
    pid: "ambipom",
    png: "ambipom",
  },
  {
    name: "Drifloon",
    pid: "drifloon",
    png: "drifloon",
  },
  {
    name: "Drifblim",
    pid: "drifblim",
    png: "drifblim",
  },
  {
    name: "Buneary",
    pid: "buneary",
    png: "buneary",
  },
  {
    name: "Lopunny",
    pid: "lopunny",
    png: "lopunny",
  },
  {
    name: "Mismagius",
    pid: "mismagius",
    png: "mismagius",
  },
  {
    name: "Honchkrow",
    pid: "honchkrow",
    png: "honchkrow",
  },
  {
    name: "Glameow",
    pid: "glameow",
    png: "glameow",
  },
  {
    name: "Purugly",
    pid: "purugly",
    png: "purugly",
  },
  {
    name: "Chingling",
    pid: "chingling",
    png: "chingling",
  },
  {
    name: "Stunky",
    pid: "stunky",
    png: "stunky",
  },
  {
    name: "Skuntank",
    pid: "skuntank",
    png: "skuntank",
  },
  {
    name: "Bronzor",
    pid: "bronzor",
    png: "bronzor",
  },
  {
    name: "Bronzong",
    pid: "bronzong",
    png: "bronzong",
  },
  {
    name: "Bonsly",
    pid: "bonsly",
    png: "bonsly",
  },
  {
    name: "Mime Jr.",
    pid: "mimejr",
    png: "mimejr",
  },
  {
    name: "Happiny",
    pid: "happiny",
    png: "happiny",
  },
  {
    name: "Chatot",
    pid: "chatot",
    png: "chatot",
  },
  {
    name: "Spiritomb",
    pid: "spiritomb",
    png: "spiritomb",
  },
  {
    name: "Gible",
    pid: "gible",
    png: "gible",
  },
  {
    name: "Gabite",
    pid: "gabite",
    png: "gabite",
  },
  {
    name: "Garchomp",
    pid: "garchomp",
    png: "garchomp",
  },
  {
    name: "Munchlax",
    pid: "munchlax",
    png: "munchlax",
  },
  {
    name: "Riolu",
    pid: "riolu",
    png: "riolu",
  },
  {
    name: "Lucario",
    pid: "lucario",
    png: "lucario",
  },
  {
    name: "Hippopotas",
    pid: "hippopotas",
    png: "hippopotas",
  },
  {
    name: "Hippowdon",
    pid: "hippowdon",
    png: "hippowdon",
  },
  {
    name: "Skorupi",
    pid: "skorupi",
    png: "skorupi",
  },
  {
    name: "Drapion",
    pid: "drapion",
    png: "drapion",
  },
  {
    name: "Croagunk",
    pid: "croagunk",
    png: "croagunk",
  },
  {
    name: "Toxicroak",
    pid: "toxicroak",
    png: "toxicroak",
  },
  {
    name: "Carnivine",
    pid: "carnivine",
    png: "carnivine",
  },
  {
    name: "Finneon",
    pid: "finneon",
    png: "finneon",
  },
  {
    name: "Lumineon",
    pid: "lumineon",
    png: "lumineon",
  },
  {
    name: "Mantyke",
    pid: "mantyke",
    png: "mantyke",
  },
  {
    name: "Snover",
    pid: "snover",
    png: "snover",
  },
  {
    name: "Abomasnow",
    pid: "abomasnow",
    png: "abomasnow",
  },
  {
    name: "Weavile",
    pid: "weavile",
    png: "weavile",
  },
  {
    name: "Magnezone",
    pid: "magnezone",
    png: "magnezone",
  },
  {
    name: "Lickilicky",
    pid: "lickilicky",
    png: "lickilicky",
  },
  {
    name: "Rhyperior",
    pid: "rhyperior",
    png: "rhyperior",
  },
  {
    name: "Tangrowth",
    pid: "tangrowth",
    png: "tangrowth",
  },
  {
    name: "Electivire",
    pid: "electivire",
    png: "electivire",
  },
  {
    name: "Magmortar",
    pid: "magmortar",
    png: "magmortar",
  },
  {
    name: "Togekiss",
    pid: "togekiss",
    png: "togekiss",
  },
  {
    name: "Yanmega",
    pid: "yanmega",
    png: "yanmega",
  },
  {
    name: "Leafeon",
    pid: "leafeon",
    png: "leafeon",
  },
  {
    name: "Glaceon",
    pid: "glaceon",
    png: "glaceon",
  },
  {
    name: "Gliscor",
    pid: "gliscor",
    png: "gliscor",
  },
  {
    name: "Mamoswine",
    pid: "mamoswine",
    png: "mamoswine",
  },
  {
    name: "Porygon-Z",
    pid: "porygonz",
    png: "porygonz",
  },
  {
    name: "Gallade",
    pid: "gallade",
    png: "gallade",
  },
  {
    name: "Probopass",
    pid: "probopass",
    png: "probopass",
  },
  {
    name: "Dusknoir",
    pid: "dusknoir",
    png: "dusknoir",
  },
  {
    name: "Froslass",
    pid: "froslass",
    png: "froslass",
  },
  {
    name: "Rotom",
    pid: "rotom",
    png: "rotom",
  },
  {
    name: "Rotom-Heat",
    pid: "rotomheat",
    png: "rotom-heat",
  },
  {
    name: "Rotom-Wash",
    pid: "rotomwash",
    png: "rotom-wash",
  },
  {
    name: "Rotom-Frost",
    pid: "rotomfrost",
    png: "rotom-frost",
  },
  {
    name: "Rotom-Fan",
    pid: "rotomfan",
    png: "rotom-fan",
  },
  {
    name: "Rotom-Mow",
    pid: "rotommow",
    png: "rotom-mow",
  },
  {
    name: "Uxie",
    pid: "uxie",
    png: "uxie",
  },
  {
    name: "Mesprit",
    pid: "mesprit",
    png: "mesprit",
  },
  {
    name: "Azelf",
    pid: "azelf",
    png: "azelf",
  },
  {
    name: "Dialga",
    pid: "dialga",
    png: "dialga",
  },
  {
    name: "Dialga-Origin",
    pid: "dialgaorigin",
    png: "dialga-origin",
  },
  {
    name: "Palkia",
    pid: "palkia",
    png: "palkia",
  },
  {
    name: "Palkia-Origin",
    pid: "palkiaorigin",
    png: "palkia-origin",
  },
  {
    name: "Heatran",
    pid: "heatran",
    png: "heatran",
  },
  {
    name: "Regigigas",
    pid: "regigigas",
    png: "regigigas",
  },
  {
    name: "Giratina",
    pid: "giratina",
    png: "giratina",
  },
  {
    name: "Giratina-Origin",
    pid: "giratinaorigin",
    png: "giratina-origin",
  },
  {
    name: "Cresselia",
    pid: "cresselia",
    png: "cresselia",
  },
  {
    name: "Phione",
    pid: "phione",
    png: "phione",
  },
  {
    name: "Manaphy",
    pid: "manaphy",
    png: "manaphy",
  },
  {
    name: "Darkrai",
    pid: "darkrai",
    png: "darkrai",
  },
  {
    name: "Shaymin",
    pid: "shaymin",
    png: "shaymin",
  },
  {
    name: "Shaymin-Sky",
    pid: "shayminsky",
    png: "shaymin-sky",
  },
  {
    name: "Arceus",
    pid: "arceus",
    png: "arceus",
  },
  {
    name: "Victini",
    pid: "victini",
    png: "victini",
  },
  {
    name: "Snivy",
    pid: "snivy",
    png: "snivy",
  },
  {
    name: "Servine",
    pid: "servine",
    png: "servine",
  },
  {
    name: "Serperior",
    pid: "serperior",
    png: "serperior",
  },
  {
    name: "Tepig",
    pid: "tepig",
    png: "tepig",
  },
  {
    name: "Pignite",
    pid: "pignite",
    png: "pignite",
  },
  {
    name: "Emboar",
    pid: "emboar",
    png: "emboar",
  },
  {
    name: "Oshawott",
    pid: "oshawott",
    png: "oshawott",
  },
  {
    name: "Dewott",
    pid: "dewott",
    png: "dewott",
  },
  {
    name: "Samurott",
    pid: "samurott",
    png: "samurott",
  },
  {
    name: "Samurott-Hisui",
    pid: "samurotthisui",
    png: "samurott-hisui",
  },
  {
    name: "Patrat",
    pid: "patrat",
    png: "patrat",
  },
  {
    name: "Watchog",
    pid: "watchog",
    png: "watchog",
  },
  {
    name: "Lillipup",
    pid: "lillipup",
    png: "lillipup",
  },
  {
    name: "Herdier",
    pid: "herdier",
    png: "herdier",
  },
  {
    name: "Stoutland",
    pid: "stoutland",
    png: "stoutland",
  },
  {
    name: "Purrloin",
    pid: "purrloin",
    png: "purrloin",
  },
  {
    name: "Liepard",
    pid: "liepard",
    png: "liepard",
  },
  {
    name: "Pansage",
    pid: "pansage",
    png: "pansage",
  },
  {
    name: "Simisage",
    pid: "simisage",
    png: "simisage",
  },
  {
    name: "Pansear",
    pid: "pansear",
    png: "pansear",
  },
  {
    name: "Simisear",
    pid: "simisear",
    png: "simisear",
  },
  {
    name: "Panpour",
    pid: "panpour",
    png: "panpour",
  },
  {
    name: "Simipour",
    pid: "simipour",
    png: "simipour",
  },
  {
    name: "Munna",
    pid: "munna",
    png: "munna",
  },
  {
    name: "Musharna",
    pid: "musharna",
    png: "musharna",
  },
  {
    name: "Pidove",
    pid: "pidove",
    png: "pidove",
  },
  {
    name: "Tranquill",
    pid: "tranquill",
    png: "tranquill",
  },
  {
    name: "Unfezant",
    pid: "unfezant",
    png: "unfezant",
  },
  {
    name: "Blitzle",
    pid: "blitzle",
    png: "blitzle",
  },
  {
    name: "Zebstrika",
    pid: "zebstrika",
    png: "zebstrika",
  },
  {
    name: "Roggenrola",
    pid: "roggenrola",
    png: "roggenrola",
  },
  {
    name: "Boldore",
    pid: "boldore",
    png: "boldore",
  },
  {
    name: "Gigalith",
    pid: "gigalith",
    png: "gigalith",
  },
  {
    name: "Woobat",
    pid: "woobat",
    png: "woobat",
  },
  {
    name: "Swoobat",
    pid: "swoobat",
    png: "swoobat",
  },
  {
    name: "Drilbur",
    pid: "drilbur",
    png: "drilbur",
  },
  {
    name: "Excadrill",
    pid: "excadrill",
    png: "excadrill",
  },
  {
    name: "Audino",
    pid: "audino",
    png: "audino",
  },
  {
    name: "Timburr",
    pid: "timburr",
    png: "timburr",
  },
  {
    name: "Gurdurr",
    pid: "gurdurr",
    png: "gurdurr",
  },
  {
    name: "Conkeldurr",
    pid: "conkeldurr",
    png: "conkeldurr",
  },
  {
    name: "Tympole",
    pid: "tympole",
    png: "tympole",
  },
  {
    name: "Palpitoad",
    pid: "palpitoad",
    png: "palpitoad",
  },
  {
    name: "Seismitoad",
    pid: "seismitoad",
    png: "seismitoad",
  },
  {
    name: "Throh",
    pid: "throh",
    png: "throh",
  },
  {
    name: "Sawk",
    pid: "sawk",
    png: "sawk",
  },
  {
    name: "Sewaddle",
    pid: "sewaddle",
    png: "sewaddle",
  },
  {
    name: "Swadloon",
    pid: "swadloon",
    png: "swadloon",
  },
  {
    name: "Leavanny",
    pid: "leavanny",
    png: "leavanny",
  },
  {
    name: "Venipede",
    pid: "venipede",
    png: "venipede",
  },
  {
    name: "Whirlipede",
    pid: "whirlipede",
    png: "whirlipede",
  },
  {
    name: "Scolipede",
    pid: "scolipede",
    png: "scolipede",
  },
  {
    name: "Cottonee",
    pid: "cottonee",
    png: "cottonee",
  },
  {
    name: "Whimsicott",
    pid: "whimsicott",
    png: "whimsicott",
  },
  {
    name: "Petilil",
    pid: "petilil",
    png: "petilil",
  },
  {
    name: "Lilligant",
    pid: "lilligant",
    png: "lilligant",
  },
  {
    name: "Lilligant-Hisui",
    pid: "lilliganthisui",
    png: "lilligant-hisui",
  },
  {
    name: "Basculin",
    pid: "basculin",
    png: "basculin",
  },
  {
    name: "Basculin-White-Striped",
    pid: "basculinwhitestriped",
    png: "basculin-whitestriped",
  },
  {
    name: "Sandile",
    pid: "sandile",
    png: "sandile",
  },
  {
    name: "Krokorok",
    pid: "krokorok",
    png: "krokorok",
  },
  {
    name: "Krookodile",
    pid: "krookodile",
    png: "krookodile",
  },
  {
    name: "Darumaka",
    pid: "darumaka",
    png: "darumaka",
  },
  {
    name: "Darumaka-Galar",
    pid: "darumakagalar",
    png: "darumaka-galar",
  },
  {
    name: "Darmanitan",
    pid: "darmanitan",
    png: "darmanitan",
  },
  {
    name: "Darmanitan-Galar",
    pid: "darmanitangalar",
    png: "darmanitan-galar",
  },
  {
    name: "Maractus",
    pid: "maractus",
    png: "maractus",
  },
  {
    name: "Dwebble",
    pid: "dwebble",
    png: "dwebble",
  },
  {
    name: "Crustle",
    pid: "crustle",
    png: "crustle",
  },
  {
    name: "Scraggy",
    pid: "scraggy",
    png: "scraggy",
  },
  {
    name: "Scrafty",
    pid: "scrafty",
    png: "scrafty",
  },
  {
    name: "Sigilyph",
    pid: "sigilyph",
    png: "sigilyph",
  },
  {
    name: "Yamask",
    pid: "yamask",
    png: "yamask",
  },
  {
    name: "Yamask-Galar",
    pid: "yamaskgalar",
    png: "yamask-galar",
  },
  {
    name: "Cofagrigus",
    pid: "cofagrigus",
    png: "cofagrigus",
  },
  {
    name: "Tirtouga",
    pid: "tirtouga",
    png: "tirtouga",
  },
  {
    name: "Carracosta",
    pid: "carracosta",
    png: "carracosta",
  },
  {
    name: "Archen",
    pid: "archen",
    png: "archen",
  },
  {
    name: "Archeops",
    pid: "archeops",
    png: "archeops",
  },
  {
    name: "Trubbish",
    pid: "trubbish",
    png: "trubbish",
  },
  {
    name: "Garbodor",
    pid: "garbodor",
    png: "garbodor",
  },
  {
    name: "Zorua",
    pid: "zorua",
    png: "zorua",
  },
  {
    name: "Zorua-Hisui",
    pid: "zoruahisui",
    png: "zorua-hisui",
  },
  {
    name: "Zoroark",
    pid: "zoroark",
    png: "zoroark",
  },
  {
    name: "Zoroark-Hisui",
    pid: "zoroarkhisui",
    png: "zoroark-hisui",
  },
  {
    name: "Minccino",
    pid: "minccino",
    png: "minccino",
  },
  {
    name: "Cinccino",
    pid: "cinccino",
    png: "cinccino",
  },
  {
    name: "Gothita",
    pid: "gothita",
    png: "gothita",
  },
  {
    name: "Gothorita",
    pid: "gothorita",
    png: "gothorita",
  },
  {
    name: "Gothitelle",
    pid: "gothitelle",
    png: "gothitelle",
  },
  {
    name: "Solosis",
    pid: "solosis",
    png: "solosis",
  },
  {
    name: "Duosion",
    pid: "duosion",
    png: "duosion",
  },
  {
    name: "Reuniclus",
    pid: "reuniclus",
    png: "reuniclus",
  },
  {
    name: "Ducklett",
    pid: "ducklett",
    png: "ducklett",
  },
  {
    name: "Swanna",
    pid: "swanna",
    png: "swanna",
  },
  {
    name: "Vanillite",
    pid: "vanillite",
    png: "vanillite",
  },
  {
    name: "Vanillish",
    pid: "vanillish",
    png: "vanillish",
  },
  {
    name: "Vanilluxe",
    pid: "vanilluxe",
    png: "vanilluxe",
  },
  {
    name: "Deerling",
    pid: "deerling",
    png: "deerling",
  },
  {
    name: "Sawsbuck",
    pid: "sawsbuck",
    png: "sawsbuck",
  },
  {
    name: "Emolga",
    pid: "emolga",
    png: "emolga",
  },
  {
    name: "Karrablast",
    pid: "karrablast",
    png: "karrablast",
  },
  {
    name: "Escavalier",
    pid: "escavalier",
    png: "escavalier",
  },
  {
    name: "Foongus",
    pid: "foongus",
    png: "foongus",
  },
  {
    name: "Amoonguss",
    pid: "amoonguss",
    png: "amoonguss",
  },
  {
    name: "Frillish",
    pid: "frillish",
    png: "frillish",
  },
  {
    name: "Jellicent",
    pid: "jellicent",
    png: "jellicent",
  },
  {
    name: "Alomomola",
    pid: "alomomola",
    png: "alomomola",
  },
  {
    name: "Joltik",
    pid: "joltik",
    png: "joltik",
  },
  {
    name: "Galvantula",
    pid: "galvantula",
    png: "galvantula",
  },
  {
    name: "Ferroseed",
    pid: "ferroseed",
    png: "ferroseed",
  },
  {
    name: "Ferrothorn",
    pid: "ferrothorn",
    png: "ferrothorn",
  },
  {
    name: "Klink",
    pid: "klink",
    png: "klink",
  },
  {
    name: "Klang",
    pid: "klang",
    png: "klang",
  },
  {
    name: "Klinklang",
    pid: "klinklang",
    png: "klinklang",
  },
  {
    name: "Tynamo",
    pid: "tynamo",
    png: "tynamo",
  },
  {
    name: "Eelektrik",
    pid: "eelektrik",
    png: "eelektrik",
  },
  {
    name: "Eelektross",
    pid: "eelektross",
    png: "eelektross",
  },
  {
    name: "Elgyem",
    pid: "elgyem",
    png: "elgyem",
  },
  {
    name: "Beheeyem",
    pid: "beheeyem",
    png: "beheeyem",
  },
  {
    name: "Litwick",
    pid: "litwick",
    png: "litwick",
  },
  {
    name: "Lampent",
    pid: "lampent",
    png: "lampent",
  },
  {
    name: "Chandelure",
    pid: "chandelure",
    png: "chandelure",
  },
  {
    name: "Axew",
    pid: "axew",
    png: "axew",
  },
  {
    name: "Fraxure",
    pid: "fraxure",
    png: "fraxure",
  },
  {
    name: "Haxorus",
    pid: "haxorus",
    png: "haxorus",
  },
  {
    name: "Cubchoo",
    pid: "cubchoo",
    png: "cubchoo",
  },
  {
    name: "Beartic",
    pid: "beartic",
    png: "beartic",
  },
  {
    name: "Cryogonal",
    pid: "cryogonal",
    png: "cryogonal",
  },
  {
    name: "Shelmet",
    pid: "shelmet",
    png: "shelmet",
  },
  {
    name: "Accelgor",
    pid: "accelgor",
    png: "accelgor",
  },
  {
    name: "Stunfisk",
    pid: "stunfisk",
    png: "stunfisk",
  },
  {
    name: "Stunfisk-Galar",
    pid: "stunfiskgalar",
    png: "stunfisk-galar",
  },
  {
    name: "Mienfoo",
    pid: "mienfoo",
    png: "mienfoo",
  },
  {
    name: "Mienshao",
    pid: "mienshao",
    png: "mienshao",
  },
  {
    name: "Druddigon",
    pid: "druddigon",
    png: "druddigon",
  },
  {
    name: "Golett",
    pid: "golett",
    png: "golett",
  },
  {
    name: "Golurk",
    pid: "golurk",
    png: "golurk",
  },
  {
    name: "Pawniard",
    pid: "pawniard",
    png: "pawniard",
  },
  {
    name: "Bisharp",
    pid: "bisharp",
    png: "bisharp",
  },
  {
    name: "Bouffalant",
    pid: "bouffalant",
    png: "bouffalant",
  },
  {
    name: "Rufflet",
    pid: "rufflet",
    png: "rufflet",
  },
  {
    name: "Braviary",
    pid: "braviary",
    png: "braviary",
  },
  {
    name: "Braviary-Hisui",
    pid: "braviaryhisui",
    png: "braviary-hisui",
  },
  {
    name: "Vullaby",
    pid: "vullaby",
    png: "vullaby",
  },
  {
    name: "Mandibuzz",
    pid: "mandibuzz",
    png: "mandibuzz",
  },
  {
    name: "Heatmor",
    pid: "heatmor",
    png: "heatmor",
  },
  {
    name: "Durant",
    pid: "durant",
    png: "durant",
  },
  {
    name: "Deino",
    pid: "deino",
    png: "deino",
  },
  {
    name: "Zweilous",
    pid: "zweilous",
    png: "zweilous",
  },
  {
    name: "Hydreigon",
    pid: "hydreigon",
    png: "hydreigon",
  },
  {
    name: "Larvesta",
    pid: "larvesta",
    png: "larvesta",
  },
  {
    name: "Volcarona",
    pid: "volcarona",
    png: "volcarona",
  },
  {
    name: "Cobalion",
    pid: "cobalion",
    png: "cobalion",
  },
  {
    name: "Terrakion",
    pid: "terrakion",
    png: "terrakion",
  },
  {
    name: "Virizion",
    pid: "virizion",
    png: "virizion",
  },
  {
    name: "Tornadus",
    pid: "tornadus",
    png: "tornadus",
  },
  {
    name: "Tornadus-Therian",
    pid: "tornadustherian",
    png: "tornadus-therian",
  },
  {
    name: "Thundurus",
    pid: "thundurus",
    png: "thundurus",
  },
  {
    name: "Thundurus-Therian",
    pid: "thundurustherian",
    png: "thundurus-therian",
  },
  {
    name: "Reshiram",
    pid: "reshiram",
    png: "reshiram",
  },
  {
    name: "Zekrom",
    pid: "zekrom",
    png: "zekrom",
  },
  {
    name: "Landorus",
    pid: "landorus",
    png: "landorus",
  },
  {
    name: "Landorus-Therian",
    pid: "landorustherian",
    png: "landorus-therian",
  },
  {
    name: "Kyurem",
    pid: "kyurem",
    png: "kyurem",
  },
  {
    name: "Kyurem-Black",
    pid: "kyuremblack",
    png: "kyurem-black",
  },
  {
    name: "Kyurem-White",
    pid: "kyuremwhite",
    png: "kyurem-white",
  },
  {
    name: "Keldeo",
    pid: "keldeo",
    png: "keldeo",
  },
  {
    name: "Meloetta",
    pid: "meloetta",
    png: "meloetta",
  },
  {
    name: "Genesect",
    pid: "genesect",
    png: "genesect",
  },
  {
    name: "Chespin",
    pid: "chespin",
    png: "chespin",
  },
  {
    name: "Quilladin",
    pid: "quilladin",
    png: "quilladin",
  },
  {
    name: "Chesnaught",
    pid: "chesnaught",
    png: "chesnaught",
  },
  {
    name: "Fennekin",
    pid: "fennekin",
    png: "fennekin",
  },
  {
    name: "Braixen",
    pid: "braixen",
    png: "braixen",
  },
  {
    name: "Delphox",
    pid: "delphox",
    png: "delphox",
  },
  {
    name: "Froakie",
    pid: "froakie",
    png: "froakie",
  },
  {
    name: "Frogadier",
    pid: "frogadier",
    png: "frogadier",
  },
  {
    name: "Greninja",
    pid: "greninja",
    png: "greninja",
  },
  {
    name: "Bunnelby",
    pid: "bunnelby",
    png: "bunnelby",
  },
  {
    name: "Diggersby",
    pid: "diggersby",
    png: "diggersby",
  },
  {
    name: "Fletchling",
    pid: "fletchling",
    png: "fletchling",
  },
  {
    name: "Fletchinder",
    pid: "fletchinder",
    png: "fletchinder",
  },
  {
    name: "Talonflame",
    pid: "talonflame",
    png: "talonflame",
  },
  {
    name: "Scatterbug",
    pid: "scatterbug",
    png: "scatterbug",
  },
  {
    name: "Spewpa",
    pid: "spewpa",
    png: "spewpa",
  },
  {
    name: "Vivillon",
    pid: "vivillon",
    png: "vivillon",
  },
  {
    name: "Litleo",
    pid: "litleo",
    png: "litleo",
  },
  {
    name: "Pyroar",
    pid: "pyroar",
    png: "pyroar",
  },
  {
    name: "Flabébé",
    pid: "flabebe",
    png: "flabebe",
  },
  {
    name: "Floette",
    pid: "floette",
    png: "floette",
  },
  {
    name: "Florges",
    pid: "florges",
    png: "florges",
  },
  {
    name: "Skiddo",
    pid: "skiddo",
    png: "skiddo",
  },
  {
    name: "Gogoat",
    pid: "gogoat",
    png: "gogoat",
  },
  {
    name: "Pancham",
    pid: "pancham",
    png: "pancham",
  },
  {
    name: "Pangoro",
    pid: "pangoro",
    png: "pangoro",
  },
  {
    name: "Furfrou",
    pid: "furfrou",
    png: "furfrou",
  },
  {
    name: "Espurr",
    pid: "espurr",
    png: "espurr",
  },
  {
    name: "Meowstic",
    pid: "meowstic",
    png: "meowstic",
  },
  {
    name: "Meowstic-F",
    pid: "meowsticf",
    png: "meowstic-f",
  },
  {
    name: "Honedge",
    pid: "honedge",
    png: "honedge",
  },
  {
    name: "Doublade",
    pid: "doublade",
    png: "doublade",
  },
  {
    name: "Aegislash",
    pid: "aegislash",
    png: "aegislash",
  },
  {
    name: "Spritzee",
    pid: "spritzee",
    png: "spritzee",
  },
  {
    name: "Aromatisse",
    pid: "aromatisse",
    png: "aromatisse",
  },
  {
    name: "Swirlix",
    pid: "swirlix",
    png: "swirlix",
  },
  {
    name: "Slurpuff",
    pid: "slurpuff",
    png: "slurpuff",
  },
  {
    name: "Inkay",
    pid: "inkay",
    png: "inkay",
  },
  {
    name: "Malamar",
    pid: "malamar",
    png: "malamar",
  },
  {
    name: "Binacle",
    pid: "binacle",
    png: "binacle",
  },
  {
    name: "Barbaracle",
    pid: "barbaracle",
    png: "barbaracle",
  },
  {
    name: "Skrelp",
    pid: "skrelp",
    png: "skrelp",
  },
  {
    name: "Dragalge",
    pid: "dragalge",
    png: "dragalge",
  },
  {
    name: "Clauncher",
    pid: "clauncher",
    png: "clauncher",
  },
  {
    name: "Clawitzer",
    pid: "clawitzer",
    png: "clawitzer",
  },
  {
    name: "Helioptile",
    pid: "helioptile",
    png: "helioptile",
  },
  {
    name: "Heliolisk",
    pid: "heliolisk",
    png: "heliolisk",
  },
  {
    name: "Tyrunt",
    pid: "tyrunt",
    png: "tyrunt",
  },
  {
    name: "Tyrantrum",
    pid: "tyrantrum",
    png: "tyrantrum",
  },
  {
    name: "Amaura",
    pid: "amaura",
    png: "amaura",
  },
  {
    name: "Aurorus",
    pid: "aurorus",
    png: "aurorus",
  },
  {
    name: "Sylveon",
    pid: "sylveon",
    png: "sylveon",
  },
  {
    name: "Hawlucha",
    pid: "hawlucha",
    png: "hawlucha",
  },
  {
    name: "Dedenne",
    pid: "dedenne",
    png: "dedenne",
  },
  {
    name: "Carbink",
    pid: "carbink",
    png: "carbink",
  },
  {
    name: "Goomy",
    pid: "goomy",
    png: "goomy",
  },
  {
    name: "Sliggoo",
    pid: "sliggoo",
    png: "sliggoo",
  },
  {
    name: "Sliggoo-Hisui",
    pid: "sliggoohisui",
    png: "sliggoo-hisui",
  },
  {
    name: "Goodra",
    pid: "goodra",
    png: "goodra",
  },
  {
    name: "Goodra-Hisui",
    pid: "goodrahisui",
    png: "goodra-hisui",
  },
  {
    name: "Klefki",
    pid: "klefki",
    png: "klefki",
  },
  {
    name: "Phantump",
    pid: "phantump",
    png: "phantump",
  },
  {
    name: "Trevenant",
    pid: "trevenant",
    png: "trevenant",
  },
  {
    name: "Pumpkaboo",
    pid: "pumpkaboo",
    png: "pumpkaboo",
  },
  {
    name: "Gourgeist",
    pid: "gourgeist",
    png: "gourgeist",
  },
  {
    name: "Bergmite",
    pid: "bergmite",
    png: "bergmite",
  },
  {
    name: "Avalugg",
    pid: "avalugg",
    png: "avalugg",
  },
  {
    name: "Avalugg-Hisui",
    pid: "avalugghisui",
    png: "avalugg-hisui",
  },
  {
    name: "Noibat",
    pid: "noibat",
    png: "noibat",
  },
  {
    name: "Noivern",
    pid: "noivern",
    png: "noivern",
  },
  {
    name: "Xerneas",
    pid: "xerneas",
    png: "xerneas",
  },
  {
    name: "Yveltal",
    pid: "yveltal",
    png: "yveltal",
  },
  {
    name: "Zygarde",
    pid: "zygarde",
    png: "zygarde",
  },
  {
    name: "Zygarde-10%",
    pid: "zygarde10",
    png: "zygarde-10",
  },
  {
    name: "Diancie",
    pid: "diancie",
    png: "diancie",
  },
  {
    name: "Hoopa",
    pid: "hoopa",
    png: "hoopa",
  },
  {
    name: "Hoopa-Unbound",
    pid: "hoopaunbound",
    png: "hoopa-unbound",
  },
  {
    name: "Volcanion",
    pid: "volcanion",
    png: "volcanion",
  },
  {
    name: "Rowlet",
    pid: "rowlet",
    png: "rowlet",
  },
  {
    name: "Dartrix",
    pid: "dartrix",
    png: "dartrix",
  },
  {
    name: "Decidueye",
    pid: "decidueye",
    png: "decidueye",
  },
  {
    name: "Decidueye-Hisui",
    pid: "decidueyehisui",
    png: "decidueye-hisui",
  },
  {
    name: "Litten",
    pid: "litten",
    png: "litten",
  },
  {
    name: "Torracat",
    pid: "torracat",
    png: "torracat",
  },
  {
    name: "Incineroar",
    pid: "incineroar",
    png: "incineroar",
  },
  {
    name: "Popplio",
    pid: "popplio",
    png: "popplio",
  },
  {
    name: "Brionne",
    pid: "brionne",
    png: "brionne",
  },
  {
    name: "Primarina",
    pid: "primarina",
    png: "primarina",
  },
  {
    name: "Pikipek",
    pid: "pikipek",
    png: "pikipek",
  },
  {
    name: "Trumbeak",
    pid: "trumbeak",
    png: "trumbeak",
  },
  {
    name: "Toucannon",
    pid: "toucannon",
    png: "toucannon",
  },
  {
    name: "Yungoos",
    pid: "yungoos",
    png: "yungoos",
  },
  {
    name: "Gumshoos",
    pid: "gumshoos",
    png: "gumshoos",
  },
  {
    name: "Grubbin",
    pid: "grubbin",
    png: "grubbin",
  },
  {
    name: "Charjabug",
    pid: "charjabug",
    png: "charjabug",
  },
  {
    name: "Vikavolt",
    pid: "vikavolt",
    png: "vikavolt",
  },
  {
    name: "Crabrawler",
    pid: "crabrawler",
    png: "crabrawler",
  },
  {
    name: "Crabominable",
    pid: "crabominable",
    png: "crabominable",
  },
  {
    name: "Oricorio",
    pid: "oricorio",
    png: "oricorio",
  },
  {
    name: "Cutiefly",
    pid: "cutiefly",
    png: "cutiefly",
  },
  {
    name: "Ribombee",
    pid: "ribombee",
    png: "ribombee",
  },
  {
    name: "Rockruff",
    pid: "rockruff",
    png: "rockruff",
  },
  {
    name: "Lycanroc",
    pid: "lycanroc",
    png: "lycanroc",
  },
  {
    name: "Lycanroc-Midnight",
    pid: "lycanrocmidnight",
    png: "lycanroc-midnight",
  },
  {
    name: "Lycanroc-Dusk",
    pid: "lycanrocdusk",
    png: "lycanroc-dusk",
  },
  {
    name: "Wishiwashi",
    pid: "wishiwashi",
    png: "wishiwashi",
  },
  {
    name: "Mareanie",
    pid: "mareanie",
    png: "mareanie",
  },
  {
    name: "Toxapex",
    pid: "toxapex",
    png: "toxapex",
  },
  {
    name: "Mudbray",
    pid: "mudbray",
    png: "mudbray",
  },
  {
    name: "Mudsdale",
    pid: "mudsdale",
    png: "mudsdale",
  },
  {
    name: "Dewpider",
    pid: "dewpider",
    png: "dewpider",
  },
  {
    name: "Araquanid",
    pid: "araquanid",
    png: "araquanid",
  },
  {
    name: "Fomantis",
    pid: "fomantis",
    png: "fomantis",
  },
  {
    name: "Lurantis",
    pid: "lurantis",
    png: "lurantis",
  },
  {
    name: "Morelull",
    pid: "morelull",
    png: "morelull",
  },
  {
    name: "Shiinotic",
    pid: "shiinotic",
    png: "shiinotic",
  },
  {
    name: "Salandit",
    pid: "salandit",
    png: "salandit",
  },
  {
    name: "Salazzle",
    pid: "salazzle",
    png: "salazzle",
  },
  {
    name: "Stufful",
    pid: "stufful",
    png: "stufful",
  },
  {
    name: "Bewear",
    pid: "bewear",
    png: "bewear",
  },
  {
    name: "Bounsweet",
    pid: "bounsweet",
    png: "bounsweet",
  },
  {
    name: "Steenee",
    pid: "steenee",
    png: "steenee",
  },
  {
    name: "Tsareena",
    pid: "tsareena",
    png: "tsareena",
  },
  {
    name: "Comfey",
    pid: "comfey",
    png: "comfey",
  },
  {
    name: "Oranguru",
    pid: "oranguru",
    png: "oranguru",
  },
  {
    name: "Passimian",
    pid: "passimian",
    png: "passimian",
  },
  {
    name: "Wimpod",
    pid: "wimpod",
    png: "wimpod",
  },
  {
    name: "Golisopod",
    pid: "golisopod",
    png: "golisopod",
  },
  {
    name: "Sandygast",
    pid: "sandygast",
    png: "sandygast",
  },
  {
    name: "Palossand",
    pid: "palossand",
    png: "palossand",
  },
  {
    name: "Pyukumuku",
    pid: "pyukumuku",
    png: "pyukumuku",
  },
  {
    name: "Type: Null",
    pid: "typenull",
    png: "typenull",
  },
  {
    name: "Silvally",
    pid: "silvally",
    png: "silvally",
  },
  {
    name: "Minior",
    pid: "minior",
    png: "minior",
  },
  {
    name: "Komala",
    pid: "komala",
    png: "komala",
  },
  {
    name: "Turtonator",
    pid: "turtonator",
    png: "turtonator",
  },
  {
    name: "Togedemaru",
    pid: "togedemaru",
    png: "togedemaru",
  },
  {
    name: "Mimikyu",
    pid: "mimikyu",
    png: "mimikyu",
  },
  {
    name: "Bruxish",
    pid: "bruxish",
    png: "bruxish",
  },
  {
    name: "Drampa",
    pid: "drampa",
    png: "drampa",
  },
  {
    name: "Dhelmise",
    pid: "dhelmise",
    png: "dhelmise",
  },
  {
    name: "Jangmo-o",
    pid: "jangmoo",
    png: "jangmoo",
  },
  {
    name: "Hakamo-o",
    pid: "hakamoo",
    png: "hakamoo",
  },
  {
    name: "Kommo-o",
    pid: "kommoo",
    png: "kommoo",
  },
  {
    name: "Tapu Koko",
    pid: "tapukoko",
    png: "tapukoko",
  },
  {
    name: "Tapu Lele",
    pid: "tapulele",
    png: "tapulele",
  },
  {
    name: "Tapu Bulu",
    pid: "tapubulu",
    png: "tapubulu",
  },
  {
    name: "Tapu Fini",
    pid: "tapufini",
    png: "tapufini",
  },
  {
    name: "Cosmog",
    pid: "cosmog",
    png: "cosmog",
  },
  {
    name: "Cosmoem",
    pid: "cosmoem",
    png: "cosmoem",
  },
  {
    name: "Solgaleo",
    pid: "solgaleo",
    png: "solgaleo",
  },
  {
    name: "Lunala",
    pid: "lunala",
    png: "lunala",
  },
  {
    name: "Nihilego",
    pid: "nihilego",
    png: "nihilego",
  },
  {
    name: "Buzzwole",
    pid: "buzzwole",
    png: "buzzwole",
  },
  {
    name: "Pheromosa",
    pid: "pheromosa",
    png: "pheromosa",
  },
  {
    name: "Xurkitree",
    pid: "xurkitree",
    png: "xurkitree",
  },
  {
    name: "Celesteela",
    pid: "celesteela",
    png: "celesteela",
  },
  {
    name: "Kartana",
    pid: "kartana",
    png: "kartana",
  },
  {
    name: "Guzzlord",
    pid: "guzzlord",
    png: "guzzlord",
  },
  {
    name: "Necrozma",
    pid: "necrozma",
    png: "necrozma",
  },
  {
    name: "Necrozma-Dusk-Mane",
    pid: "necrozmaduskmane",
    png: "necrozma-duskmane",
  },
  {
    name: "Necrozma-Dawn-Wings",
    pid: "necrozmadawnwings",
    png: "necrozma-dawnwings",
  },
  {
    name: "Magearna",
    pid: "magearna",
    png: "magearna",
  },
  {
    name: "Marshadow",
    pid: "marshadow",
    png: "marshadow",
  },
  {
    name: "Poipole",
    pid: "poipole",
    png: "poipole",
  },
  {
    name: "Naganadel",
    pid: "naganadel",
    png: "naganadel",
  },
  {
    name: "Stakataka",
    pid: "stakataka",
    png: "stakataka",
  },
  {
    name: "Blacephalon",
    pid: "blacephalon",
    png: "blacephalon",
  },
  {
    name: "Zeraora",
    pid: "zeraora",
    png: "zeraora",
  },
  {
    name: "Meltan",
    pid: "meltan",
    png: "meltan",
  },
  {
    name: "Melmetal",
    pid: "melmetal",
    png: "melmetal",
  },
  {
    name: "Grookey",
    pid: "grookey",
    png: "grookey",
  },
  {
    name: "Thwackey",
    pid: "thwackey",
    png: "thwackey",
  },
  {
    name: "Rillaboom",
    pid: "rillaboom",
    png: "rillaboom",
  },
  {
    name: "Scorbunny",
    pid: "scorbunny",
    png: "scorbunny",
  },
  {
    name: "Raboot",
    pid: "raboot",
    png: "raboot",
  },
  {
    name: "Cinderace",
    pid: "cinderace",
    png: "cinderace",
  },
  {
    name: "Sobble",
    pid: "sobble",
    png: "sobble",
  },
  {
    name: "Drizzile",
    pid: "drizzile",
    png: "drizzile",
  },
  {
    name: "Inteleon",
    pid: "inteleon",
    png: "inteleon",
  },
  {
    name: "Skwovet",
    pid: "skwovet",
    png: "skwovet",
  },
  {
    name: "Greedent",
    pid: "greedent",
    png: "greedent",
  },
  {
    name: "Rookidee",
    pid: "rookidee",
    png: "rookidee",
  },
  {
    name: "Corvisquire",
    pid: "corvisquire",
    png: "corvisquire",
  },
  {
    name: "Corviknight",
    pid: "corviknight",
    png: "corviknight",
  },
  {
    name: "Blipbug",
    pid: "blipbug",
    png: "blipbug",
  },
  {
    name: "Dottler",
    pid: "dottler",
    png: "dottler",
  },
  {
    name: "Orbeetle",
    pid: "orbeetle",
    png: "orbeetle",
  },
  {
    name: "Nickit",
    pid: "nickit",
    png: "nickit",
  },
  {
    name: "Thievul",
    pid: "thievul",
    png: "thievul",
  },
  {
    name: "Gossifleur",
    pid: "gossifleur",
    png: "gossifleur",
  },
  {
    name: "Eldegoss",
    pid: "eldegoss",
    png: "eldegoss",
  },
  {
    name: "Wooloo",
    pid: "wooloo",
    png: "wooloo",
  },
  {
    name: "Dubwool",
    pid: "dubwool",
    png: "dubwool",
  },
  {
    name: "Chewtle",
    pid: "chewtle",
    png: "chewtle",
  },
  {
    name: "Drednaw",
    pid: "drednaw",
    png: "drednaw",
  },
  {
    name: "Yamper",
    pid: "yamper",
    png: "yamper",
  },
  {
    name: "Boltund",
    pid: "boltund",
    png: "boltund",
  },
  {
    name: "Rolycoly",
    pid: "rolycoly",
    png: "rolycoly",
  },
  {
    name: "Carkol",
    pid: "carkol",
    png: "carkol",
  },
  {
    name: "Coalossal",
    pid: "coalossal",
    png: "coalossal",
  },
  {
    name: "Applin",
    pid: "applin",
    png: "applin",
  },
  {
    name: "Flapple",
    pid: "flapple",
    png: "flapple",
  },
  {
    name: "Appletun",
    pid: "appletun",
    png: "appletun",
  },
  {
    name: "Silicobra",
    pid: "silicobra",
    png: "silicobra",
  },
  {
    name: "Sandaconda",
    pid: "sandaconda",
    png: "sandaconda",
  },
  {
    name: "Cramorant",
    pid: "cramorant",
    png: "cramorant",
  },
  {
    name: "Arrokuda",
    pid: "arrokuda",
    png: "arrokuda",
  },
  {
    name: "Barraskewda",
    pid: "barraskewda",
    png: "barraskewda",
  },
  {
    name: "Toxel",
    pid: "toxel",
    png: "toxel",
  },
  {
    name: "Toxtricity",
    pid: "toxtricity",
    png: "toxtricity",
  },
  {
    name: "Sizzlipede",
    pid: "sizzlipede",
    png: "sizzlipede",
  },
  {
    name: "Centiskorch",
    pid: "centiskorch",
    png: "centiskorch",
  },
  {
    name: "Clobbopus",
    pid: "clobbopus",
    png: "clobbopus",
  },
  {
    name: "Grapploct",
    pid: "grapploct",
    png: "grapploct",
  },
  {
    name: "Sinistea",
    pid: "sinistea",
    png: "sinistea",
  },
  {
    name: "Polteageist",
    pid: "polteageist",
    png: "polteageist",
  },
  {
    name: "Hatenna",
    pid: "hatenna",
    png: "hatenna",
  },
  {
    name: "Hattrem",
    pid: "hattrem",
    png: "hattrem",
  },
  {
    name: "Hatterene",
    pid: "hatterene",
    png: "hatterene",
  },
  {
    name: "Impidimp",
    pid: "impidimp",
    png: "impidimp",
  },
  {
    name: "Morgrem",
    pid: "morgrem",
    png: "morgrem",
  },
  {
    name: "Grimmsnarl",
    pid: "grimmsnarl",
    png: "grimmsnarl",
  },
  {
    name: "Obstagoon",
    pid: "obstagoon",
    png: "obstagoon",
  },
  {
    name: "Perrserker",
    pid: "perrserker",
    png: "perrserker",
  },
  {
    name: "Cursola",
    pid: "cursola",
    png: "cursola",
  },
  {
    name: "Sirfetch’d",
    pid: "sirfetchd",
    png: "sirfetchd",
  },
  {
    name: "Mr. Rime",
    pid: "mrrime",
    png: "mrrime",
  },
  {
    name: "Runerigus",
    pid: "runerigus",
    png: "runerigus",
  },
  {
    name: "Milcery",
    pid: "milcery",
    png: "milcery",
  },
  {
    name: "Alcremie",
    pid: "alcremie",
    png: "alcremie",
  },
  {
    name: "Falinks",
    pid: "falinks",
    png: "falinks",
  },
  {
    name: "Pincurchin",
    pid: "pincurchin",
    png: "pincurchin",
  },
  {
    name: "Snom",
    pid: "snom",
    png: "snom",
  },
  {
    name: "Frosmoth",
    pid: "frosmoth",
    png: "frosmoth",
  },
  {
    name: "Stonjourner",
    pid: "stonjourner",
    png: "stonjourner",
  },
  {
    name: "Eiscue",
    pid: "eiscue",
    png: "eiscue",
  },
  {
    name: "Indeedee",
    pid: "indeedee",
    png: "indeedee",
  },
  {
    name: "Indeedee-F",
    pid: "indeedeef",
    png: "indeedee-f",
  },
  {
    name: "Morpeko",
    pid: "morpeko",
    png: "morpeko",
  },
  {
    name: "Cufant",
    pid: "cufant",
    png: "cufant",
  },
  {
    name: "Copperajah",
    pid: "copperajah",
    png: "copperajah",
  },
  {
    name: "Dracozolt",
    pid: "dracozolt",
    png: "dracozolt",
  },
  {
    name: "Arctozolt",
    pid: "arctozolt",
    png: "arctozolt",
  },
  {
    name: "Dracovish",
    pid: "dracovish",
    png: "dracovish",
  },
  {
    name: "Arctovish",
    pid: "arctovish",
    png: "arctovish",
  },
  {
    name: "Duraludon",
    pid: "duraludon",
    png: "duraludon",
  },
  {
    name: "Dreepy",
    pid: "dreepy",
    png: "dreepy",
  },
  {
    name: "Drakloak",
    pid: "drakloak",
    png: "drakloak",
  },
  {
    name: "Dragapult",
    pid: "dragapult",
    png: "dragapult",
  },
  {
    name: "Zacian",
    pid: "zacian",
    png: "zacian",
  },
  {
    name: "Zacian-Crowned",
    pid: "zaciancrowned",
    png: "zacian-crowned",
  },
  {
    name: "Zamazenta",
    pid: "zamazenta",
    png: "zamazenta",
  },
  {
    name: "Zamazenta-Crowned",
    pid: "zamazentacrowned",
    png: "zamazenta-crowned",
  },
  {
    name: "Eternatus",
    pid: "eternatus",
    png: "eternatus",
  },
  {
    name: "Kubfu",
    pid: "kubfu",
    png: "kubfu",
  },
  {
    name: "Urshifu",
    pid: "urshifu",
    png: "urshifu",
  },
  {
    name: "Urshifu-Rapid-Strike",
    pid: "urshifurapidstrike",
    png: "urshifu-rapidstrike",
  },
  {
    name: "Zarude",
    pid: "zarude",
    png: "zarude",
  },
  {
    name: "Zarude-Dada",
    pid: "zarudedada",
    png: "zarude-dada",
  },
  {
    name: "Regieleki",
    pid: "regieleki",
    png: "regieleki",
  },
  {
    name: "Regidrago",
    pid: "regidrago",
    png: "regidrago",
  },
  {
    name: "Glastrier",
    pid: "glastrier",
    png: "glastrier",
  },
  {
    name: "Spectrier",
    pid: "spectrier",
    png: "spectrier",
  },
  {
    name: "Calyrex",
    pid: "calyrex",
    png: "calyrex",
  },
  {
    name: "Calyrex-Ice",
    pid: "calyrexice",
    png: "calyrex-ice",
  },
  {
    name: "Calyrex-Shadow",
    pid: "calyrexshadow",
    png: "calyrex-shadow",
  },
  {
    name: "Wyrdeer",
    pid: "wyrdeer",
    png: "wyrdeer",
  },
  {
    name: "Kleavor",
    pid: "kleavor",
    png: "kleavor",
  },
  {
    name: "Ursaluna",
    pid: "ursaluna",
    png: "ursaluna",
  },
  {
    name: "Ursaluna-Bloodmoon",
    pid: "ursalunabloodmoon",
    png: "ursaluna-bloodmoon",
  },
  {
    name: "Basculegion",
    pid: "basculegion",
    png: "basculegion",
  },
  {
    name: "Basculegion-F",
    pid: "basculegionf",
    png: "basculegion-f",
  },
  {
    name: "Sneasler",
    pid: "sneasler",
    png: "sneasler",
  },
  {
    name: "Overqwil",
    pid: "overqwil",
    png: "overqwil",
  },
  {
    name: "Enamorus",
    pid: "enamorus",
    png: "enamorus",
  },
  {
    name: "Enamorus-Therian",
    pid: "enamorustherian",
    png: "enamorus-therian",
  },
  {
    name: "Sprigatito",
    pid: "sprigatito",
    png: "sprigatito",
  },
  {
    name: "Floragato",
    pid: "floragato",
    png: "floragato",
  },
  {
    name: "Meowscarada",
    pid: "meowscarada",
    png: "meowscarada",
  },
  {
    name: "Fuecoco",
    pid: "fuecoco",
    png: "fuecoco",
  },
  {
    name: "Crocalor",
    pid: "crocalor",
    png: "crocalor",
  },
  {
    name: "Skeledirge",
    pid: "skeledirge",
    png: "skeledirge",
  },
  {
    name: "Quaxly",
    pid: "quaxly",
    png: "quaxly",
  },
  {
    name: "Quaxwell",
    pid: "quaxwell",
    png: "quaxwell",
  },
  {
    name: "Quaquaval",
    pid: "quaquaval",
    png: "quaquaval",
  },
  {
    name: "Lechonk",
    pid: "lechonk",
    png: "lechonk",
  },
  {
    name: "Oinkologne",
    pid: "oinkologne",
    png: "oinkologne",
  },
  {
    name: "Oinkologne-F",
    pid: "oinkolognef",
    png: "oinkologne-f",
  },
  {
    name: "Tarountula",
    pid: "tarountula",
    png: "tarountula",
  },
  {
    name: "Spidops",
    pid: "spidops",
    png: "spidops",
  },
  {
    name: "Nymble",
    pid: "nymble",
    png: "nymble",
  },
  {
    name: "Lokix",
    pid: "lokix",
    png: "lokix",
  },
  {
    name: "Pawmi",
    pid: "pawmi",
    png: "pawmi",
  },
  {
    name: "Pawmo",
    pid: "pawmo",
    png: "pawmo",
  },
  {
    name: "Pawmot",
    pid: "pawmot",
    png: "pawmot",
  },
  {
    name: "Tandemaus",
    pid: "tandemaus",
    png: "tandemaus",
  },
  {
    name: "Maushold",
    pid: "maushold",
    png: "maushold",
  },
  {
    name: "Fidough",
    pid: "fidough",
    png: "fidough",
  },
  {
    name: "Dachsbun",
    pid: "dachsbun",
    png: "dachsbun",
  },
  {
    name: "Smoliv",
    pid: "smoliv",
    png: "smoliv",
  },
  {
    name: "Dolliv",
    pid: "dolliv",
    png: "dolliv",
  },
  {
    name: "Arboliva",
    pid: "arboliva",
    png: "arboliva",
  },
  {
    name: "Squawkabilly",
    pid: "squawkabilly",
    png: "squawkabilly",
  },
  {
    name: "Nacli",
    pid: "nacli",
    png: "nacli",
  },
  {
    name: "Naclstack",
    pid: "naclstack",
    png: "naclstack",
  },
  {
    name: "Garganacl",
    pid: "garganacl",
    png: "garganacl",
  },
  {
    name: "Charcadet",
    pid: "charcadet",
    png: "charcadet",
  },
  {
    name: "Armarouge",
    pid: "armarouge",
    png: "armarouge",
  },
  {
    name: "Ceruledge",
    pid: "ceruledge",
    png: "ceruledge",
  },
  {
    name: "Tadbulb",
    pid: "tadbulb",
    png: "tadbulb",
  },
  {
    name: "Bellibolt",
    pid: "bellibolt",
    png: "bellibolt",
  },
  {
    name: "Wattrel",
    pid: "wattrel",
    png: "wattrel",
  },
  {
    name: "Kilowattrel",
    pid: "kilowattrel",
    png: "kilowattrel",
  },
  {
    name: "Maschiff",
    pid: "maschiff",
    png: "maschiff",
  },
  {
    name: "Mabosstiff",
    pid: "mabosstiff",
    png: "mabosstiff",
  },
  {
    name: "Shroodle",
    pid: "shroodle",
    png: "shroodle",
  },
  {
    name: "Grafaiai",
    pid: "grafaiai",
    png: "grafaiai",
  },
  {
    name: "Bramblin",
    pid: "bramblin",
    png: "bramblin",
  },
  {
    name: "Brambleghast",
    pid: "brambleghast",
    png: "brambleghast",
  },
  {
    name: "Toedscool",
    pid: "toedscool",
    png: "toedscool",
  },
  {
    name: "Toedscruel",
    pid: "toedscruel",
    png: "toedscruel",
  },
  {
    name: "Klawf",
    pid: "klawf",
    png: "klawf",
  },
  {
    name: "Capsakid",
    pid: "capsakid",
    png: "capsakid",
  },
  {
    name: "Scovillain",
    pid: "scovillain",
    png: "scovillain",
  },
  {
    name: "Rellor",
    pid: "rellor",
    png: "rellor",
  },
  {
    name: "Rabsca",
    pid: "rabsca",
    png: "rabsca",
  },
  {
    name: "Flittle",
    pid: "flittle",
    png: "flittle",
  },
  {
    name: "Espathra",
    pid: "espathra",
    png: "espathra",
  },
  {
    name: "Tinkatink",
    pid: "tinkatink",
    png: "tinkatink",
  },
  {
    name: "Tinkatuff",
    pid: "tinkatuff",
    png: "tinkatuff",
  },
  {
    name: "Tinkaton",
    pid: "tinkaton",
    png: "tinkaton",
  },
  {
    name: "Wiglett",
    pid: "wiglett",
    png: "wiglett",
  },
  {
    name: "Wugtrio",
    pid: "wugtrio",
    png: "wugtrio",
  },
  {
    name: "Bombirdier",
    pid: "bombirdier",
    png: "bombirdier",
  },
  {
    name: "Finizen",
    pid: "finizen",
    png: "finizen",
  },
  {
    name: "Palafin",
    pid: "palafin",
    png: "palafin",
  },
  {
    name: "Varoom",
    pid: "varoom",
    png: "varoom",
  },
  {
    name: "Revavroom",
    pid: "revavroom",
    png: "revavroom",
  },
  {
    name: "Cyclizar",
    pid: "cyclizar",
    png: "cyclizar",
  },
  {
    name: "Orthworm",
    pid: "orthworm",
    png: "orthworm",
  },
  {
    name: "Glimmet",
    pid: "glimmet",
    png: "glimmet",
  },
  {
    name: "Glimmora",
    pid: "glimmora",
    png: "glimmora",
  },
  {
    name: "Greavard",
    pid: "greavard",
    png: "greavard",
  },
  {
    name: "Houndstone",
    pid: "houndstone",
    png: "houndstone",
  },
  {
    name: "Flamigo",
    pid: "flamigo",
    png: "flamigo",
  },
  {
    name: "Cetoddle",
    pid: "cetoddle",
    png: "cetoddle",
  },
  {
    name: "Cetitan",
    pid: "cetitan",
    png: "cetitan",
  },
  {
    name: "Veluza",
    pid: "veluza",
    png: "veluza",
  },
  {
    name: "Dondozo",
    pid: "dondozo",
    png: "dondozo",
  },
  {
    name: "Tatsugiri",
    pid: "tatsugiri",
    png: "tatsugiri",
  },
  {
    name: "Annihilape",
    pid: "annihilape",
    png: "annihilape",
  },
  {
    name: "Clodsire",
    pid: "clodsire",
    png: "clodsire",
  },
  {
    name: "Farigiraf",
    pid: "farigiraf",
    png: "farigiraf",
  },
  {
    name: "Dudunsparce",
    pid: "dudunsparce",
    png: "dudunsparce",
  },
  {
    name: "Kingambit",
    pid: "kingambit",
    png: "kingambit",
  },
  {
    name: "Great Tusk",
    pid: "greattusk",
    png: "greattusk",
  },
  {
    name: "Scream Tail",
    pid: "screamtail",
    png: "screamtail",
  },
  {
    name: "Brute Bonnet",
    pid: "brutebonnet",
    png: "brutebonnet",
  },
  {
    name: "Flutter Mane",
    pid: "fluttermane",
    png: "fluttermane",
  },
  {
    name: "Slither Wing",
    pid: "slitherwing",
    png: "slitherwing",
  },
  {
    name: "Sandy Shocks",
    pid: "sandyshocks",
    png: "sandyshocks",
  },
  {
    name: "Iron Treads",
    pid: "irontreads",
    png: "irontreads",
  },
  {
    name: "Iron Bundle",
    pid: "ironbundle",
    png: "ironbundle",
  },
  {
    name: "Iron Hands",
    pid: "ironhands",
    png: "ironhands",
  },
  {
    name: "Iron Jugulis",
    pid: "ironjugulis",
    png: "ironjugulis",
  },
  {
    name: "Iron Moth",
    pid: "ironmoth",
    png: "ironmoth",
  },
  {
    name: "Iron Thorns",
    pid: "ironthorns",
    png: "ironthorns",
  },
  {
    name: "Frigibax",
    pid: "frigibax",
    png: "frigibax",
  },
  {
    name: "Arctibax",
    pid: "arctibax",
    png: "arctibax",
  },
  {
    name: "Baxcalibur",
    pid: "baxcalibur",
    png: "baxcalibur",
  },
  {
    name: "Gimmighoul",
    pid: "gimmighoul",
    png: "gimmighoul",
  },
  {
    name: "Gimmighoul-Roaming",
    pid: "gimmighoulroaming",
    png: "gimmighoul-roaming",
  },
  {
    name: "Gholdengo",
    pid: "gholdengo",
    png: "gholdengo",
  },
  {
    name: "Wo-Chien",
    pid: "wochien",
    png: "wochien",
  },
  {
    name: "Chien-Pao",
    pid: "chienpao",
    png: "chienpao",
  },
  {
    name: "Ting-Lu",
    pid: "tinglu",
    png: "tinglu",
  },
  {
    name: "Chi-Yu",
    pid: "chiyu",
    png: "chiyu",
  },
  {
    name: "Roaring Moon",
    pid: "roaringmoon",
    png: "roaringmoon",
  },
  {
    name: "Iron Valiant",
    pid: "ironvaliant",
    png: "ironvaliant",
  },
  {
    name: "Koraidon",
    pid: "koraidon",
    png: "koraidon",
  },
  {
    name: "Miraidon",
    pid: "miraidon",
    png: "miraidon",
  },
  {
    name: "Walking Wake",
    pid: "walkingwake",
    png: "walkingwake",
  },
  {
    name: "Iron Leaves",
    pid: "ironleaves",
    png: "ironleaves",
  },
  {
    name: "Dipplin",
    pid: "dipplin",
    png: "dipplin",
  },
  {
    name: "Poltchageist",
    pid: "poltchageist",
    png: "poltchageist",
  },
  {
    name: "Sinistcha",
    pid: "sinistcha",
    png: "sinistcha",
  },
  {
    name: "Okidogi",
    pid: "okidogi",
    png: "okidogi",
  },
  {
    name: "Munkidori",
    pid: "munkidori",
    png: "munkidori",
  },
  {
    name: "Fezandipiti",
    pid: "fezandipiti",
    png: "fezandipiti",
  },
  {
    name: "Ogerpon",
    pid: "ogerpon",
    png: "ogerpon",
  },
  {
    name: "Ogerpon-Wellspring",
    pid: "ogerponwellspring",
    png: "ogerpon-wellspring",
  },
  {
    name: "Ogerpon-Hearthflame",
    pid: "ogerponhearthflame",
    png: "ogerpon-hearthflame",
  },
  {
    name: "Ogerpon-Cornerstone",
    pid: "ogerponcornerstone",
    png: "ogerpon-cornerstone",
  },
  {
    name: "Archaludon",
    pid: "archaludon",
    png: "archaludon",
  },
  {
    name: "Hydrapple",
    pid: "hydrapple",
    png: "hydrapple",
  },
  {
    name: "Gouging Fire",
    pid: "gougingfire",
    png: "gougingfire",
  },
  {
    name: "Raging Bolt",
    pid: "ragingbolt",
    png: "ragingbolt",
  },
  {
    name: "Iron Boulder",
    pid: "ironboulder",
    png: "ironboulder",
  },
  {
    name: "Iron Crown",
    pid: "ironcrown",
    png: "ironcrown",
  },
  {
    name: "Terapagos",
    pid: "terapagos",
    png: "terapagos",
  },
  {
    name: "Pecharunt",
    pid: "pecharunt",
    png: "pecharunt",
  },
];
