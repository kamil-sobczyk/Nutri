import {action, observable} from "mobx";
import {ScreenController} from "./Stores/ScreenController";

export class ObservableStore {
  screenController: ScreenController;

  constructor() {
    this.screenController = new ScreenController(this);
  }

  @observable text = "helloo";

  @action setText(value: string): void {
    this.text = value;
  }
}

export const Store = new ObservableStore();

export interface StoreProps {
  store: ObservableStore;
}
