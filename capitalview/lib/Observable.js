// Store the stock data in the 
class Observable {
  constructor(value) {
    this.value = value;
    this.subscribers = new Set();
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    fn(this.value); // send initial value
    return () => this.subscribers.delete(fn);
  }

  set(value) {
    this.value = value;
    this.subscribers.forEach((fn) => fn(value));
  }

  get() {
    return this.value;
  }
}

export const counterStore = new Observable(0);
