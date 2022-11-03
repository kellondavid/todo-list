export default class addTask {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  placeName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  placeDate(date) {
    this.date = date;
  }
  getDate() {
    return this.date;
  }

  formatDate() {
    const month = this.date.split('/')[0]
    const day = this.date.split('/')[1]
    const year = this.date.split('/')[2]
    return `${month}/${day}/${year}`
  }
}
