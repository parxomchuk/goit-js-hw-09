const formElem = document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';

let formState = {
    email: "",
    message: "",
};

const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
    try {
        formState = {
            ...formState, ...JSON.parse(saveData)
        };
    } catch (error) {
            console.error('Пошкоджені дані у localStorage:', error);
            localStorage.removeItem(STORAGE_KEY);
        }
    }

formElem.elements.email.value = formState.email;
formElem.elements.message.value = formState.message;

formElem.addEventListener('input', e => {
    const { name, value } = e.target;

    formState[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});



formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (formState.email === '' || formState.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formState);

  localStorage.removeItem(STORAGE_KEY);
    formState = { email: '', message: '' };
    formElem.reset();
});


