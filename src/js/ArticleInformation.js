/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class ArticleInformation {
  constructor() {
    this.block = document.querySelector('.article-inf');
    this.title = this.block.querySelector('.article-inf__title');
  }

  renderTitle(name, articles) {
    this.title.textContent = `${name}, у вас ${articles} сохранённых статей`;
  }

  renderText(arr) {
    const templ = `<p class="article-inf__text text">По ключевым словам:
                    <span class="article-inf__keyword">${arr[0] || ''}</span>
                    <span class="article-inf__keyword">${arr[1] ? `, ${arr[1]}` : ''}</span>
                    <span class="article-inf__keyword">${arr.length - 2 > 0 ? `и ${arr.length - 2} другим` : ''}</span>
                  </p>`;
    this.title.insertAdjacentHTML('afterend', templ);
  }
}
