const list = document.querySelector('.courses__cards');
const cards = document.querySelectorAll('.courses__card');
const cardCheck = document.querySelectorAll('.card__check');
const title = document.querySelector('#courses__title');
const subTitle = document.querySelector('.courses__subtitle');

for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
      cards[i].classList.add('card__checked');
      cardCheck[i].classList.add('card__checked');
      setTimeout(() => {
        if (list.childElementCount == 1) {
          subTitle.style.display = 'none';
          title.textContent = 'Задание выполнено';
          title.classList.add('courses__complete');
        }
        list.removeChild(cards[i])
      }, 1000)
    }
  })
}

