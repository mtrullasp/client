import { action, computed, observable } from "mobx";
import { History } from "history";

export class RouterStore {
  constructor() {
  }

  @action setHistory(history: History) {
    if (!history) {
      return;
    }
    debugger ;this.history = history;
    this.history.listen(ls => {
      this.activeRouterPath = ls.pathname;
    });
  }

  @action setLocation(location: Location) {
    this.location = location;
    this.activeRouterPath = location.pathname;
  }

  @computed get canGoBack(): boolean {
    return !!this.history && this.history.length > 1;
  }

  @action go(path: string) {
    this.history.push(path)
  }

  @action goBack() {
    this.history.goBack();
  }

  private history: History;
  private location: Location;

  @observable menuIndex: number = -1;

  @observable activeRouterPath: string;

  @computed get isRandom(): boolean {
    return this.activeRouterPath.endsWith("random");
  }

  public callbackTitleBar: () => JSX.Element;

}


