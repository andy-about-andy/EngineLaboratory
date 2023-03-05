// маска для набора номера
// Функция взята из интернета и доработана
// Источник - https://webkaa.ru/javascript/maska-nomera-telefona-js

const eventCallback = function (evt) {
  let el = evt.target,
  pattern = el.dataset.phonePattern,
  matrixDefault = "+ 7 (___) ___-__-__",
  matrix = pattern ? pattern : matrixDefault,
  i = 0,
  def = matrix.replace(/\D/g, ""),
  val = evt.target.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;
  evt.target.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
}
const phoneInputs = document.querySelectorAll('[data-mask-tel]');
for (let elem of phoneInputs) {
  for (let ev of ['input', 'blur', 'focus']) {
    elem.addEventListener(ev, eventCallback);
  }
}

export {phoneInputs};
