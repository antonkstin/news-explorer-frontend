const nameField = `
  <div class="popup__field">
    <p class="popup__field-title">Имя</p>
    <input class="popup__input" type="text" placeholder="Введите своё имя" required>
  </div>
`;

const successMessage = `
  <p class="popup__link popup__link_success">Выполнить вход</p>
`;

const regTempl = `
<section class="popup">
  <div class="popup__container">
    <div class="popup__close"></div>
    <h2 class="popup__title text">Регистрация</h2>
    <form class="popup__form">

      <div class="popup__field">
        <p class="popup__field-title">Email</p>
        <input class="popup__input" name="email" type="text" placeholder="Введите почту" required>
        <p class="popup__err-message popup__err-message_input"></p>
      </div>

      <div class="popup__field">
        <p class="popup__field-title">Пароль</p>
        <input class="popup__input" type="password" placeholder="Введите пароль" required>
        <p class="popup__err-message popup__err-message_input"></p>
      </div>



      <div class="popup__button-container">
        <p class="popup__err-message popup__err-message_common"></p>
        <button class="popup__button button text popup__button_blocked">Зарегистрироваться</button>
      </div>
    </form>
    <p class="popup__ending">
      или
      <span class="popup__link">Войти</span>
    </p>
  </div>
</section>
`;

const successTempl = `
<section class="popup">
  <div class="popup__container">
    <div class="popup__close"></div>
    <h2 class="popup__title text">Пользователь успешно зарегистрирован!</h2>
    <p class="popup__link popup__link_success">Выполнить вход</p>
  </div>
</section>
`;
