export default interface Todo {
  name: string;
  isFinished: boolean;
}

export class TodoImpl implements Todo {
  public name = '';
  public isFinished = false;
  constructor(name: string, isFinished: boolean) {
    this.name = name;
    this.isFinished = isFinished;
  }
}
