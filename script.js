// Показываем текстовое поле, если выбран пункт "Возникли технические проблемы"
document.getElementById('tech-issue').addEventListener('change', function () {
  const techDetails = document.getElementById('tech-details');
  if (this.checked) {
    techDetails.style.display = 'block';
  } else {
    techDetails.style.display = 'none';
  }
});

// Обработка отправки формы
document.getElementById('feedback-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Собираем данные формы
  const selectedIssues = [];
  document.querySelectorAll('input[name="issue"]:checked').forEach((checkbox) => {
    selectedIssues.push(checkbox.value);
  });

  const techDetails = document.querySelector('#tech-details textarea').value;

  // Выводим результат в консоль (можно отправить на сервер)
  console.log('Выбранные проблемы:', selectedIssues);
  if (techDetails) {
    console.log('Описание технических проблем:', techDetails);
  }

  alert('Спасибо за ваш отзыв! Мы обязательно учтем ваши замечания.');
});