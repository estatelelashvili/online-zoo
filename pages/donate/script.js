document.getElementById('logo-anchor').onclick = function () {
  location.href = '../main/index.html';
};
document.getElementById('logo-anchor2').onclick = function () {
  location.href = '../main/index.html';
};
document.getElementById('donate-btn').onclick = function () {
  location.href = './index.html';
};

const formElement = document.getElementById('fname');

formElement.addEventListener('input', function () {
  if (formElement.value.length > 4) {
    formElement.value = formElement.value.substring(0, 4);
  }
  if (formElement.value < 0) {
    formElement.value = 0;
  }
});

// console.log(document.querySelector('input[type="radio"]:checked').value);
document.querySelector('input[name=another-money]').value = 100;
const moneyValues = document.querySelectorAll('.donate-amount-p');
const radioBTNArr = document.querySelectorAll('.button-prop input');
for (let i = 0; i < moneyValues.length; i++) {
  radioBTNArr[i].value = moneyValues[i].innerText;
}

for (let i = 0; i < moneyValues.length; i++) {
  radioBTNArr[i].addEventListener('change', (e) => {
    document.querySelector('input[name=another-money]').value =
      radioBTNArr[i].value;
  });
}

document.getElementById('another-amount-id').addEventListener('submit', (e) => {
  e.preventDefault();
});
document
  .querySelector('input[name=another-money]')
  .addEventListener('input', () => {
    for (let i = 0; i < radioBTNArr.length; i++) {
      if (
        document.querySelector('input[name=another-money]').value ===
        radioBTNArr[i].value
      ) {
        radioBTNArr[i].checked = true;
      } else {
        radioBTNArr[i].checked = false;
      }
    }
  });

///////////////////////////////
// BURGER MENU

function toggleBurgerMenu() {
  document.getElementById('open-burger-menu-container-id').style.display =
    'none';
  const page = document.getElementsByTagName('body')[0];
  page.classList.remove('noscroll');
  document.getElementById('overlay-id').style.display = 'none';
  // document.getElementById('overlay-id').style.zIndex = 1001;
  document.getElementById('overlay-id').style.backgroundColor =
    'rgba(0, 0, 0, 0)';
}
document.body.addEventListener('click', toggleBurgerMenu, true);
document.getElementById('burger-control-id').onclick = function () {
  document.getElementById('open-burger-menu-container-id').style.display =
    'block';
  document.getElementById('open-burger-menu-container-id').style.position =
    'fixed';
  document.getElementById('open-burger-menu-container-id').style.zIndex = 1001;
  document.getElementById('overlay-id').style.display = 'block';
  document.getElementById('overlay-id').style.backgroundColor =
    'rgba(0, 0, 0, 0.3)';
  const page = document.getElementsByTagName('body')[0];
  page.classList.add('noscroll');
};

document.getElementById('burger-btn-menu-id').onclick = function (e) {
  e.stopPropagation();
  document.getElementById('open-burger-menu-container-id').style.display =
    'none';
};
