export class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.taskId = `task${++Task.id}`;
  }

  // formatDate() {
  //   const month = this.date.split("/")[0];
  //   const day = this.date.split("/")[1];
  //   const year = this.date.split("/")[2];
  //   return `${month}/${day}/${year}`;
  // }
}