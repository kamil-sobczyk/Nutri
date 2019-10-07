import {Store, StoreProps} from "../RootStore";
import {ObservableStore} from "../RootStore";
import {observable, action} from "mobx";

interface HeaderState {
  leftArrow: boolean;
  menu: boolean;
  title: string;
}

export interface FooterSingleTab {
  icon: string;
  active: boolean;
  onPress?: any;
}

export class ScreenManager {
  store: ObservableStore;
  constructor(store: ObservableStore) {
    this.store = store;
  }

  @observable headerState: HeaderState = {
    leftArrow: false,
    menu: false,
    title: "Nutri"
  };

  @observable footerTabs: FooterSingleTab[] = [
    {icon: "add", active: false, onPress: () => null},
    {icon: "calculator", active: false, onPress: () => null},
    {
      icon: "pizza",
      active: true,
      onPress: () => null
    },
    {icon: "beer", active: false, onPress: () => null}
  ];

  @observable screen = "main";

  @action getHeaderTitle = () => this.headerState.title;
  @action isMenuVisible = () => this.headerState.menu;
  @action isLeftArrowVisible = () => this.headerState.leftArrow;
}
