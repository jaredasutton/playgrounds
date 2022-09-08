import {goodbye, getBusinessStateOfSomeA} from './utils';

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log(hello());
console.log(goodbye());
console.log(getBusinessStateOfSomeA({businessState: 'Closed'}))