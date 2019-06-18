import { User } from '../models';
import { ObjectCache } from './ObjectCache';
export class RootStore {
  constructor() {
    this.users = new ObjectCache(this, User);
  }
}

