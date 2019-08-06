export class Buff {
  constructor(
    public name: string,
    public atk: {value: number, type: string},
    public dmg: {value: number, type: string},
    public save: {
      value: number,
      category: string,
      type: string
    }[],
    public duration: number,
    public remaining: number,
    public active: boolean
  ) {}
}

export const SAVE_CATEGORY = [
  'Fortitude', 'Reflex', 'Will'
];

export const BONUS_TYPE = [
  'None', 'Alchemical', 'Armor', 'Circumstance', 'Competence', 'Deflection', 'Dodge',
  'Enhancement', 'Insight', 'Luck', 'Morale', 'Profane', 'Racial', 'Resistance', 'Sacred',
  'Shield', 'Size', 'Trait'
];
