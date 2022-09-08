const MOON: string = 'moon';

export function goodbye(who: string = MOON): string {
  return `Goodbye ${who}! `;
}

interface A {
  businessState: BusinessState;
}

type BusinessState = 'Closed'|'Open'|'Draft';

export function getBusinessStateOfSomeA (someA: A) {
  return someA.businessState;
}

type NumStringifier = (num: number) => string;
type NumStringifierBizState = (x: any) => BusinessState;

const x: NumStringifier&NumStringifierBizState = (num) => getBusinessStateOfSomeA({businessState: 'Closed'});