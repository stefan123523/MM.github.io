const form = document.getElementById('booking-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    status.textContent = 'Thank you! Your booking request has been sent. / Ви благодриме! Вашата резервација е испратена.';
    form.reset();
  } else {
    status.textContent = 'Oops! There was a problem submitting your form. / Грешка при праќање. Ве молиме обидете се повторно.';
  }
});
function slide(){}
