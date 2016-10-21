export class Food {
  public dateLogged: string = new Date().toLocaleDateString();
  constructor(public name: string, public details: string, public calories: number) {}
}
