
const swiper = new Swiper('.swiper', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    loop: true,
    });   
    const typeOfDeposit = document.getElementById("type");
const terms = document.getElementById("term");
const calcButton = document.getElementById("calculate_button");
const calcSolution = document.getElementById("calculator__solution");
const calcSolution2 = document.getElementById("calculator__solution2");
const contribution = document.getElementById("calculator__contribution");


const refillableOptions = [
    {months: 6, percent: 10, text: "6 месяцев - 20%"},
    {months: 12, percent: 22, text: "1 год - 22%"},
    {months: 18, percent: 22.5, text: "1,5 года - 15%"},
    {months: 24, percent: 20, text: "2 года - 10%"},
];

const termOptions = [
    {months: 3, percent: 5, text: "3 месяца - 20%"},
    {months: 6, percent: 11, text: "6 месяцев - 22%"},
    {months: 9, percent: 17.25, text: "9 месяцев - 23%"},
    {months: 12, percent: 24, text: "1 год - 24%"},
    {months: 18, percent: 27, text: "1,5 года - 18%"},
    {months: 24, percent: 30, text: "2 года - 15%"},
];

const onTypeChange = () => {
    let arr = [];
    typeOfDeposit.value === "1" ? arr = refillableOptions : arr = termOptions;

    while (terms.options.length > 0) {
        terms.remove(0);
    }

    for (let i = 0; i < arr.length; i++) {
        let opt = document.createElement('option');
        opt.value = arr[i].percent;
        opt.innerHTML = `<p>${arr[i].text}</p>`;
        opt.id = `option${i}`;
        terms.appendChild(opt);
    }
}

const calculateTerm = () => {
    let vklad;
    typeOfDeposit.value === "1" ? vklad = "Пополняемый" : vklad = "Срочный";
    if (contribution.value) {
        if (contribution.value <= 0) {
            calcSolution2.innerHTML = "<p style='color: orange'> Введите верную сумму!</p>"
        } else {
            let finalSolution = Number(terms.value / 100 * contribution.value) + Number(contribution.value);
            calcSolution.textContent = `По вкладу "${vklad}" на срок и ставку ${terms.options[terms.selectedIndex].textContent}, при сумме ${contribution.value}`;
            calcSolution2.textContent = `Вы получите ${finalSolution}р.`
        }
    } else {
        calcSolution.innerHTML = "<p style='color: orange'>Введите сумму вклада!</p>"
        calcSolution2.textContent = "";
    }
}

typeOfDeposit.addEventListener('change', onTypeChange);
calcButton.addEventListener('click', calculateTerm);
onTypeChange();