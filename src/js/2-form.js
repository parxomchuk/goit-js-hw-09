const formElem = document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: "",
    message: "",
};

const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
    try {
        formData = {
            ...formData, ...JSON.parse(saveData)
        };
    } catch (error) {
            console.error('Пошкоджені дані у localStorage:', error);
            localStorage.removeItem(STORAGE_KEY);
        }
    }

formElem.elements.email.value = formData.email;
formElem.elements.message.value = formData.message;

formElem.addEventListener('input', e => {
    const { name, value } = e.target;

    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});



formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    formElem.reset();
});


