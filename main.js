"use strict";

// Создание 20 случайных чисел
let generatingNumbers = (countElem) => {
  let arrNum = [];
  for (let i = 0; i < countElem; i++) {
    arrNum.push(Math.floor(Math.random() * 90000) + 10000);
  }
  return arrNum;
};

// Выбор числа из случайных чисел
let chooseRundomNumber = (arrNum) => {
  return arrNum[Math.floor(Math.random() * arrNum.length)];
};

// Отрисовка чисел на странице
let drawNumber = (arrNum) => {
  let container = document.querySelector(".number-random-wrap");

  for (let i = 0; i < arrNum.length; i++) {
    let span = document.createElement("span");
    span.classList.add("number-random");
    span.innerHTML = arrNum[i];
    container.append(span);
  }
};

// Отслеживание клика по элементу
let addEventClick = (selectNumberByCopmuter) => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".number-random")) {
      let el = e.target;
      el.style.color = "red";

      if (selectNumberByCopmuter === Number(el.innerText)) {
        alert("Победа! Мои поздравления");
        location.reload();
        return;
      }

      drawMatches(selectNumberByCopmuter, el);
      drawHealth();
    }
  });
};

// вывод количества совпаших цифр
let drawMatches = (selectNumberByCopmuter, el) => {
  selectNumberByCopmuter = new Set(String(selectNumberByCopmuter).split(""));
  el = new Set(String(el.innerText).split(""));

  let count = 0;

  el.forEach((element) => {
    if (selectNumberByCopmuter.has(element)) count++;
  });

  alert(count);
};

//вывод кол-ва попыток
let drawHealth = () => {};

// Главная функция в которой можно изменять параметры:
// countElem - количество элементов
// countChartOnElem - количество попыток
// countHp - количество символов в элементах
function start(countElem, countChartOnElem, countHp) {
  let arrNum = generatingNumbers(countElem),
    selectNumberByCopmuter = chooseRundomNumber(arrNum);
  drawNumber(arrNum);
  addEventClick(selectNumberByCopmuter);

  console.log(selectNumberByCopmuter);
}
start(25, 5, 4);
