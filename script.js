const form = document.getElementById('form');
const inputValue = document.querySelector('.form-input');
const button = document.querySelector('.submit-btn');
const errorMessage = document.querySelector('.error-text');

form.addEventListener('submit', (e) => {
      e.preventDefault();
})

button.addEventListener('click', () => {
      

      if (inputValue.value === null || inputValue.value === '' || !inputValue.value.match(/^[A-Za-z0-9\.\-_]+@[A-Za-z]+\.[a-z]{2,4}(\.([a-z]{2,4}))?$/)) {
            errorMessage.innerText = 'Please provide a valid email address';   
            inputValue.classList.add('error');    
      } else {
            errorMessage.innerText = ''; 
            inputValue.classList.remove('error');   
      }
})

inputValue.addEventListener('click', () => {
      if (inputValue.classList.contains('error')) {
            inputValue.classList.remove('error');
            errorMessage.innerText = '';
      }
})