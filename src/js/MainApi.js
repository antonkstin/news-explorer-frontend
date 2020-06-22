/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class MainApi {
  constructor() {
    this.link = 'https://find-news.website/api';
  }

  signup(email, password, name) {
    return fetch(`${this.link}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => res.json());
  }

  signin(email, password) {
    return fetch(`${this.link}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json());
  }

  getUserData() {
    return fetch(`${this.link}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json());
  }

  createArticle(article, keyword) {
    const {
      title, text, date, source, link, image,
    } = article;
    return fetch(`${this.link}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then((res) => res.json());
  }

  removeArticle(id) {
    return fetch(`${this.link}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json());
  }

  getArticles() {
    return fetch(`${this.link}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json());
  }

  deleteCookie() {
    return fetch(`${this.link}/cookie`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json());
  }
}
