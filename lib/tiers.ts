export interface Tier {
  id: string
  name: string
  emoji: string
  minItems: number
  description: string
  color: string
}

export const TIERS: Tier[] = [
  { id: 'trash-panda',           name: 'Trash Panda',           emoji: '🐼', minItems: 3,    description: 'Emptied the Compost Bin',      color: '#A0A0A0' },
  { id: 'bin-raider',            name: 'Bin Raider',            emoji: '🗑️', minItems: 10,   description: 'Office Desk Trash Can Cleared', color: '#30D158' },
  { id: 'compost-connoisseur',   name: 'Compost Connoisseur',   emoji: '🍃', minItems: 25,   description: 'Kitchen Trash Can Taken Out',   color: '#0A84FF' },
  { id: 'average-raccoon',       name: 'Average Raccoon',       emoji: '🦝', minItems: 50,   description: 'Residential Trash Can Emptied', color: '#FF9F0A' },
  { id: 'dumpster-diver',        name: 'Dumpster Diver',        emoji: '🏗️', minItems: 100,  description: 'Dumpster Cleaned Out',          color: '#BF5AF2' },
  { id: 'route-raider',          name: 'Route Raider',          emoji: '🚛', minItems: 250,  description: 'Garbage Truck Tipped',          color: '#FF3B2F' },
  { id: 'landfill-legend',       name: 'Landfill Legend',       emoji: '🏔️', minItems: 500,  description: 'Emptied a Landfill',            color: '#FF9F0A' },
  { id: 'distinguished-raccoonian', name: 'Distinguished Raccoonian', emoji: '🌍', minItems: 1000, description: 'Apocalyptic Earth Saver',  color: '#BF5AF2' },
]

export function getTierForCount(count: number): Tier {
  const reversed = [...TIERS].reverse()
  return reversed.find(t => count >= t.minItems) ?? TIERS[0]
}
