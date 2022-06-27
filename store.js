import { action, computed, makeObservable, observable } from "mobx";

class HeartBeat {
  beat = false;

  constructor(title) {
    makeObservable(this, {
      beat: observable,
      toggle: action,
    });
  }

  toggle(value) {
    this.beat = value;
  }
}
export const heartBeat = new HeartBeat();
