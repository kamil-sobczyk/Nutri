import { action, observable } from 'mobx';

class ObservableStore {
  @observable property = '';

  @action setProperty(newProperty: string) {
    this.property = newProperty;
  }
}

export const Store = new ObservableStore();
