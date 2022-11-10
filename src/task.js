export class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.taskId = `task${++Task.id}`;
  }
}