import { Item } from '../types/types';

export default function isEqual(obj1: Item[], obj2: Item[]) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
