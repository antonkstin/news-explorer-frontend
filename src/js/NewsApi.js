/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class NewsApi {
  constructor() {
    this.link = 'https://praktikum.tk/news/v2/everything?';
    this.apiKey = '80c56555c03e4564980aed5f6b4d71cb';
    this.pageSize = 100;

    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    this.dateString = `${this.year}-${this.month}-${this.day}`;
    this.dateStringWeekAgo = `${this.year}-${this.month}-${this.day - 7}`;
  }

  getNews(keyword) {
    return fetch(`${this.link}q=${keyword}&from=${this.dateString}&to=${this.dateStringWeekAgo}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
      .then((res) => res.json());
  }
}
