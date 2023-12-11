// Функция для создания формы
function createForm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('myForm').style.display = 'block';
    document.body.classList.add('no-scroll');

    var form = document.createElement('form');
    form.id = 'actualForm';

    var title = document.createElement('div');
    title.id = 'formTitle';
    title.textContent = 'Контактная информация';
    form.appendChild(title);

    // Имя
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Имя:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Введите своё имя';
    nameInput.required = true;
    nameInput.pattern = "[a-zA-Zа-яА-ЯёЁ]{3,}";
    nameInput.title = "Имя должно содержать только буквы и быть не менее 3 символов в длину";
    var nameContainer = document.createElement('div');
    nameContainer.className = 'input-container';
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
    form.appendChild(nameContainer);

    // Фамилия
    var lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Фамилия:';
    var lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.name = 'lastName';
    lastNameInput.placeholder = 'Введите свою фамилию';
    lastNameInput.required = true;
    lastNameInput.pattern = "[a-zA-Zа-яА-ЯёЁ]{3,}";
    lastNameInput.title = "Фамилия должна содержать только буквы и быть не менее 3 символов в длину";
    var lastNameContainer = document.createElement('div');
    lastNameContainer.className = 'input-container';
    lastNameContainer.appendChild(lastNameLabel);
    lastNameContainer.appendChild(lastNameInput);
    form.appendChild(lastNameContainer);

    // Номер телефона
    var phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Номер телефона:';
    var phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.placeholder = 'Введите свой номер телефона';
    phoneInput.required = true;
    phoneInput.pattern="\+[7]{1}[0-9]{10}";
    phoneInput.title = "Телефон должен начинаться на +7 и содержать 11 цифр";
    var phoneContainer = document.createElement('div');
    phoneContainer.className = 'input-container';
    phoneContainer.appendChild(phoneLabel);
    phoneContainer.appendChild(phoneInput);
    form.appendChild(phoneContainer);

    // Почта
    var emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Введите свою почту';
    emailInput.required = true;
    var emailContainer = document.createElement('div');
    emailContainer.className = 'input-container';
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);
    form.appendChild(emailContainer);

    // центрирование кнопки
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    // Создание кнопки отправки
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Отправить';
    buttonContainer.appendChild(submitButton);
    form.appendChild(buttonContainer);

    // Крестик
    var closeSymbol = document.createElement('div');
    closeSymbol.innerHTML = '✖';
    closeSymbol.id = 'closeSymbol';

// Обработчик события для закрытия формы при нажатии на крестик
closeSymbol.addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('myForm').style.display = 'none';
    document.body.classList.remove('no-scroll');
    document.getElementById('myForm').innerHTML = '';
});

    // Добавление крестика и форму к контейнеру
    document.getElementById('myForm').appendChild(closeSymbol);
    document.getElementById('myForm').appendChild(form);

    // Добавление обработчика события для формы
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var lastNameValue = lastNameInput.value;
      var nameValue = nameInput.value;
      var phoneValue = phoneInput.value;
      var emailValue = emailInput.value;

      console.log('Отправленные данные:');
      console.log('Фамилия:', lastNameValue);
      console.log('Имя:', nameValue);
      console.log('Номер телефона:', phoneValue);
      console.log('Почта:', emailValue);
    });
  }

document.getElementById('generateFormButton').addEventListener('click', createForm);

document.querySelector('a[href="#continue"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.getElementById('continue').scrollIntoView({
      behavior: 'smooth'
    });
});

document.getElementById('scrollToTopLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });