export class Buff {
  constructor(
    public name: string,
    public atk: {value: number, type: string},
    public dmg: {value: number, type: string},
    public save: {
      fortitude: { value: number, type: string },
      reflex: { value: number, type: string },
      will: { value: number, type: string }
    },
    public duration: number,
    public remaining: number,
    public roundStarted: number,
    public active: boolean
  ) {}
}

export const BONUS_TYPE = [
  'None', 'Alchemical', 'Armor', 'Circumstance', 'Competence', 'Deflection', 'Dodge',
  'Enhancement', 'Insight', 'Luck', 'Morale', 'Natural', 'Profane', 'Racial', 'Resistance', 'Sacred',
  'Shield', 'Size', 'Trait'
];
