export class Food {
  public dateLogged: string = new Date().toLocaleDateString();
  constructor(public name: string, public details: string, public calories: number) {}

  // formatDate() {
  //   var currentDate: Date = new Date();
  //   currentDate.format('EEE MMM dd yy h:mm:ss a');
  //   return currentDate;
  // }
}
