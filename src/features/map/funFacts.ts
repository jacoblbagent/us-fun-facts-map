export interface StateInfo {
  name: string;
  abbr: string;
  fact: string;
}

export const STATE_FACTS: Record<string, StateInfo> = {
  AL: { name: 'Alabama', abbr: 'AL', fact: 'Alabama was the first state to declare Christmas a legal holiday in 1836.' },
  AK: { name: 'Alaska', abbr: 'AK', fact: 'Alaska has more coastline than all other U.S. states combined — over 33,000 miles.' },
  AZ: { name: 'Arizona', abbr: 'AZ', fact: 'Arizona does not observe Daylight Saving Time, except for the Navajo Nation.' },
  AR: { name: 'Arkansas', abbr: 'AR', fact: 'Arkansas is the only U.S. state that produces diamonds — the Crater of Diamonds State Park.' },
  CA: { name: 'California', abbr: 'CA', fact: 'California is the most populous state and the third-largest by area.' },
  CO: { name: 'Colorado', abbr: 'CO', fact: 'Colorado has the highest average elevation of any state at 6,800 feet.' },
  CT: { name: 'Connecticut', abbr: 'CT', fact: 'Connecticut is home to the oldest public library in the U.S., founded in 1771.' },
  DE: { name: 'Delaware', abbr: 'DE', fact: 'Delaware was the first state to ratify the U.S. Constitution in 1787.' },
  FL: { name: 'Florida', abbr: 'FL', fact: 'Florida has the longest coastline in the contiguous U.S. at over 1,350 miles.' },
  GA: { name: 'Georgia', abbr: 'GA', fact: 'Georgia is the largest state east of the Mississippi River by land area.' },
  HI: { name: 'Hawaii', abbr: 'HI', fact: 'Hawaii is the only U.S. state entirely made up of islands and grown from volcanoes.' },
  ID: { name: 'Idaho', abbr: 'ID', fact: 'Idaho produces about one-third of all potatoes grown in the United States.' },
  IL: { name: 'Illinois', abbr: 'IL', fact: 'Illinois was the first state to ratify the 13th Amendment abolishing slavery.' },
  IN: { name: 'Indiana', abbr: 'IN', fact: 'Indiana is home to the largest children\'s museum in the world — The Children\'s Museum of Indianapolis.' },
  IA: { name: 'Iowa', abbr: 'IA', fact: 'Iowa produces more corn than most countries — roughly 2.5 billion bushels annually.' },
  KS: { name: 'Kansas', abbr: 'KS', fact: 'Kansas is flatter than a pancake — scientifically measured to be flatter than a pancake in a 2003 study.' },
  KY: { name: 'Kentucky', abbr: 'KY', fact: 'Kentucky produces 95% of the world\'s bourbon and has more barrels than people.' },
  LA: { name: 'Louisiana', abbr: 'LA', fact: 'Louisiana is the only state with parishes instead of counties, rooted in Catholic history.' },
  ME: { name: 'Maine', abbr: 'ME', fact: 'Maine produces 90% of the nation\'s lobster and is the only state with a one-syllable name.' },
  MD: { name: 'Maryland', abbr: 'MD', fact: 'Maryland was named after Queen Henrietta Maria, wife of King Charles I of England.' },
  MA: { name: 'Massachusetts', abbr: 'MA', fact: 'Massachusetts is home to the oldest public park in the U.S. — Boston Common (1634).' },
  MI: { name: 'Michigan', abbr: 'MI', fact: 'Michigan has more freshwater coastline than any other state and is surrounded by four Great Lakes.' },
  MN: { name: 'Minnesota', abbr: 'MN', fact: 'Minnesota has over 11,000 lakes and is home to the source of the Mississippi River.' },
  MS: { name: 'Mississippi', abbr: 'MS', fact: 'Mississippi is the birthplace of blues music and the International Blues Festival.' },
  MO: { name: 'Missouri', abbr: 'MO', fact: 'Missouri is called the \'Show Me State\' — a phrase that originated from a speech by Congressman Willard Duncan Vandiver.' },
  MT: { name: 'Montana', abbr: 'MT', fact: 'Montana has the largest grizzly bear population in the lower 48 states.' },
  NE: { name: 'Nebraska', abbr: 'NE', fact: 'Nebraska is the only state with a unicameral (single-house) legislature.' },
  NV: { name: 'Nevada', abbr: 'NV', fact: 'Nevada is the most mountainous state in the contiguous U.S., with over 300 mountain ranges.' },
  NH: { name: 'New Hampshire', abbr: 'NH', fact: 'New Hampshire was the first state to declare independence from England in 1775 — six months before the Declaration.' },
  NJ: { name: 'New Jersey', abbr: 'NJ', fact: 'New Jersey has the highest density of shopping malls in the world.' },
  NM: { name: 'New Mexico', abbr: 'NM', fact: 'New Mexico has more sheep than people and is the only state with two official languages (English + Spanish).' },
  NY: { name: 'New York', abbr: 'NY', fact: 'New York was the first state to require license plates on cars in 1901.' },
  NC: { name: 'North Carolina', abbr: 'NC', fact: 'North Carolina is home to the oldest state university in the U.S. — UNC Chapel Hill (founded 1789).' },
  ND: { name: 'North Dakota', abbr: 'ND', fact: 'North Dakota produces more honey than any other state in the country.' },
  OH: { name: 'Ohio', abbr: 'OH', fact: 'Ohio is the birthplace of seven U.S. presidents — the most of any state except Virginia.' },
  OK: { name: 'Oklahoma', abbr: 'OK', fact: 'Oklahoma has the largest Native American population of any state by percentage.' },
  OR: { name: 'Oregon', abbr: 'OR', fact: 'Oregon has no sales tax and was the first state to make psychedelic mushrooms legal.' },
  PA: { name: 'Pennsylvania', abbr: 'PA', fact: 'Pennsylvania is home to the oldest continuously operating brewery in the U.S. — Yuengling (1829).' },
  RI: { name: 'Rhode Island', abbr: 'RI', fact: 'Rhode Island is the smallest state but has the longest official name: \'The State of Rhode Island and Providence Plantations.\'' },
  SC: { name: 'South Carolina', abbr: 'SC', fact: 'South Carolina is where the American Civil War began with the attack on Fort Sumter in 1861.' },
  SD: { name: 'South Dakota', abbr: 'SD', fact: 'South Dakota is home to Mount Rushmore, which took 14 years and 400 workers to carve.' },
  TN: { name: 'Tennessee', abbr: 'TN', fact: 'Tennessee is the birthplace of both bluegrass and country music as distinct genres.' },
  TX: { name: 'Texas', abbr: 'TX', fact: 'Texas has its own power grid — the Texas Interconnection — operated independently from the rest of the U.S.' },
  UT: { name: 'Utah', abbr: 'UT', fact: 'Utah has the highest literacy rate in the United States.' },
  VT: { name: 'Vermont', abbr: 'VT', fact: 'Vermont produces more maple syrup per capita than any other state.' },
  VA: { name: 'Virginia', abbr: 'VA', fact: 'Virginia is home to the Pentagon, the largest office building in the world.' },
  WA: { name: 'Washington', abbr: 'WA', fact: 'Washington produces more apples than any other state — about 10 billion apples per year.' },
  WV: { name: 'West Virginia', abbr: 'WV', fact: 'West Virginia is the only state formed entirely from another state — it split from Virginia during the Civil War.' },
  WI: { name: 'Wisconsin', abbr: 'WI', fact: 'Wisconsin is the leading cheese producer in the U.S. — over 600 varieties.' },
  WY: { name: 'Wyoming', abbr: 'WY', fact: 'Wyoming was the first state to grant women the right to vote in 1869.' },
};

export const STATE_ABBRS = Object.keys(STATE_FACTS).sort();

// Lookup from full state name -> abbreviation (e.g. "Alabama" -> "AL")
export const NAME_TO_ABBR: Record<string, string> = {};
for (const [abbr, info] of Object.entries(STATE_FACTS)) {
  NAME_TO_ABBR[info.name] = abbr;
}