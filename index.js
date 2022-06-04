
import {api} from "./axios/api";
import './index.css'
import './normalize.css'


const buttonLoadVacancy = document.getElementById('load_vacancy');
const vacancyId = document.getElementById('vacancyId');
const vacancy_amount = document.getElementById('vacancy_amount');
const vacancy = document.getElementById('vacancy');

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    alert('Разметка не предназначена для браузера Safari :( \nИсправить стили комбобоксов мне не удалось. Чтобы посмотреть корректное отображение советую использовать браузер Chrome');
}
let vacancyiess = document.createElement('div');
let innerHTML = ""

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});
const loadVacancies = () => {
    vacancy.innerHTML = "";
    innerHTML = "";
    api.getVacancy(vacancyId.value, vacancy_amount.value).then(data => {
        data.items.map(item => {
            if (item.salary)
                innerHTML += `<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name} зарплата: ${item.salary.from} ${item.salary.currency}</a></p>`
            else
                innerHTML += `<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name}</a></p>`
        });
        console.log(data)
        vacancyiess.innerHTML = innerHTML;
        vacancy.appendChild(vacancyiess);
        console.log(innerHTML);

    })

    console.log(vacancyId.value)
}

buttonLoadVacancy.addEventListener("click", loadVacancies)  