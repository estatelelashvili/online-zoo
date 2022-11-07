document.getElementById('logo-anchor').onclick = function () {
  location.href = '../main/index.html';
};
document.getElementById('logo-anchor2').onclick = function () {
  location.href = '../main/index.html';
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
