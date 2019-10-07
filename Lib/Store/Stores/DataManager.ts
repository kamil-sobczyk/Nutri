import {Store, StoreProps} from "../RootStore";
import {ObservableStore} from "../RootStore";

interface Meal {
  date: string;
  items: string[];
}

interface UserData {
  meals: Meal[];
}

export class DataManager {
  store: ObservableStore;
  constructor(store: ObservableStore) {
    this.store = store;
  }

  userData: UserData;
}
