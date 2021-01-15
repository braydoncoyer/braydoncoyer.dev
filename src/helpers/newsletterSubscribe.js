export const processForm = (form, email) => {
  //   const data = new FormData(form);
  //   data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: email,
  })
    .then(() => {
      form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch((error) => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};
