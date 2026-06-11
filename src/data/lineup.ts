// Days: 1 = Fri Jul 31, 2 = Sat Aug 1, 3 = Sun Aug 2
// Tiers: 1 = headliner, 2 = main acts, 3 = supporting acts
export type Day = 1 | 2 | 3
export type Tier = 1 | 2 | 3

export interface Artist {
  name: string
  day: Day
  tier: Tier
  isNew?: boolean // ⓝ on the official poster = first time at Pentaport
}

export const lineup: Artist[] = [
  // ─── FRI. JUL 31 ────────────────────────────────────────
  { name: 'KHRUANGBIN', day: 1, tier: 1 },

  { name: 'The Volunteers', day: 1, tier: 2 },
  { name: 'THORNAPPLE', day: 1, tier: 2 },

  { name: 'The Lemon Twigs', day: 1, tier: 3 },
  { name: 'Band Nah', day: 1, tier: 3 },
  { name: 'Broken Valentine', day: 1, tier: 3 },
  { name: 'KIRARA', day: 1, tier: 3 },
  { name: 'MONO NO AWARE', day: 1, tier: 3 },
  { name: 'MRCH', day: 1, tier: 3, isNew: true },
  { name: 'Mudd the student', day: 1, tier: 3, isNew: true },
  { name: 'Peach Truck Hijackers', day: 1, tier: 3, isNew: true },
  { name: 'POSER', day: 1, tier: 3 },
  { name: 'QWER', day: 1, tier: 3 },
  { name: 'SHIN IN RYU', day: 1, tier: 3 },
  { name: 'SIMILE LAND', day: 1, tier: 3 },
  { name: 'SOCIALCLUB HYANGWU', day: 1, tier: 3, isNew: true },
  { name: 'The Poles', day: 1, tier: 3, isNew: true },
  { name: 'THE FIX', day: 1, tier: 3 },

  // ─── SAT. AUG 1 ─────────────────────────────────────────
  { name: 'MASSIVE ATTACK', day: 2, tier: 1 },

  { name: 'The Jesus & Mary Chain', day: 2, tier: 2, isNew: true },
  { name: 'HYUKOH', day: 2, tier: 2 },
  { name: 'LEE SEUNG YOON', day: 2, tier: 2, isNew: true },

  { name: 'Jang Pill Soon', day: 2, tier: 3 },
  { name: 'baan', day: 2, tier: 3, isNew: true },
  { name: 'CHUNGYOILE', day: 2, tier: 3 },
  { name: 'Far East Asian Tigers', day: 2, tier: 3 },
  { name: 'Green Flame Boys', day: 2, tier: 3 },
  { name: 'Hi-Fi Un!corn', day: 2, tier: 3 },
  { name: 'Hollow Jan', day: 2, tier: 3 },
  { name: 'Isyana Sarasvati', day: 2, tier: 3 },
  { name: 'JKC', day: 2, tier: 3 },
  { name: 'KWON JIN AH', day: 2, tier: 3, isNew: true },
  { name: 'Lilly Eat Machine', day: 2, tier: 3 },
  { name: 'never young beach', day: 2, tier: 3 },
  { name: 'Sanbo', day: 2, tier: 3 },
  { name: 'Say Sue Me', day: 2, tier: 3, isNew: true },
  { name: 'Song Dongye 宋冬野', day: 2, tier: 3 },
  { name: 'the geeks', day: 2, tier: 3, isNew: true },
  { name: 'TURTLE ISLAND', day: 2, tier: 3, isNew: true },
  { name: 'UREUK AND THE GYPSIES', day: 2, tier: 3 },

  // ─── SUN. AUG 2 ─────────────────────────────────────────
  { name: 'PIXIES', day: 3, tier: 1 },

  { name: 'Silica Gel', day: 3, tier: 2 },
  { name: 'Sultan Of The Disco', day: 3, tier: 2 },
  { name: 'Original Love', day: 3, tier: 2, isNew: true },

  { name: 'Noizegarden', day: 3, tier: 3, isNew: true },
  { name: 'Asian Spice House', day: 3, tier: 3 },
  { name: 'Bek Hyunjin', day: 3, tier: 3 },
  { name: 'betcover!!', day: 3, tier: 3, isNew: true },
  { name: 'Bongjeingan', day: 3, tier: 3 },
  { name: 'Confined White', day: 3, tier: 3 },
  { name: 'Dabda', day: 3, tier: 3 },
  { name: 'Dragon Pony', day: 3, tier: 3 },
  { name: 'Fat Hamster & KANG New', day: 3, tier: 3 },
  { name: 'LEENALCHI', day: 3, tier: 3, isNew: true },
  { name: 'Nyteh', day: 3, tier: 3 },
  { name: 'Redoor', day: 3, tier: 3, isNew: true },
  { name: 'TOUCHED', day: 3, tier: 3, isNew: true },
  { name: 'WE STEAL ORANGES', day: 3, tier: 3 },
]
