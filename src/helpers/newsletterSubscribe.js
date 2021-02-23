export const processForm = (email) => {
  fetch('/', {
    method: 'POST',
    body: email,
  })
    .then(() => {
      console.log('Made it to frocessForm success');
    })
    .catch((error) => {
      console.log(error);
    });
};
