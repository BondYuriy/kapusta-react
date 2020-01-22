const userInputPrice = document.querySelector('#js-choice-price').textContent;
const userInputDay = document.querySelector('#js-choice-day').textContent;
const resultCreditPrice = document.querySelector('.js-result-credit-price');
const resultCreditDay = document.querySelector('.js-result-credit-day');
const userPromocodeInput = document.querySelector('.js-promocode-input');
const userPromocodeBtn = document.querySelector('.js-promocode-submit');
const msgPromocodeTrue = document.querySelector('.js-isvalid-true');
const msgPromocodeFalse = document.querySelector('.js-isvalid-false');
const btnPromocodeModalClose = document.querySelector(
  '.js-promocode-modal-close',
);
const promotionalPrice = document.querySelector('.js-promotional-result-price');

let resultChoicePrice = 1500;
const creditRate = 1.75;
let creditRatePromocode = 1;
let isValidPromocode = false;

getPrice();

userPromocodeBtn.addEventListener('click', getPromocode);
btnPromocodeModalClose.addEventListener('click', cleansPromocodeModal);

//======

function getPromocode(e) {
  const resultPromocodeInput = userPromocodeInput.value;

  isValidPromocodeInput(resultPromocodeInput);
  if (isValidPromocode) {
    msgPromocodeTrue.style.display = 'block';
    getPrice();
    setTimeout(function() {
      btnPromocodeModalClose.click();
    }, 1000);
  } else {
    msgPromocodeFalse.style.display = 'inline-block';
  }

  setTimeout(function() {
    cleansPromocodeModal();
  }, 2000);
}

function isValidPromocodeInput() {
  let n = /^[a-zA-Z0-9]{4,25}\b/;
  if (userPromocodeInput.value.search(n) == 0) {
    getDataPromocode();
  } else {
    isValidPromocode = false;
  }
}

function cleansPromocodeModal() {
  msgPromocodeTrue.style.display = 'none';
  msgPromocodeFalse.style.display = 'none';
  userPromocodeInput.value = '';
}

function getDataPromocode() {
  isValidPromocode = true;
  // isValidPromocode = false;
}
