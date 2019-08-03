export class Buff {
    name: string;
    atk: number;
    dmg: number;
    save: {
      value: number,
      type: string,
      bonus: string
    }[];
    duration: number;
    remaining: number;
    active: boolean;
}
