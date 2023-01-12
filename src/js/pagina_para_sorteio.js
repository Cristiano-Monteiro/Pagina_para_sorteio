let display = document.getElementById('display');
let input_numbers = document.getElementById('input_numbers');
let input_text = document.getElementById('input_text');

let bttn_numbers = document.getElementById('bttn_numbers');
let bttn_peoples = document.getElementById('bttn_peoples');

let numbers = document.querySelector('.numbers');
let peoples = document.querySelector('.peoples');

let option_peoples = document.querySelector('.option_peoples');
let option_numbers = document.querySelector('.option_numbers');

let list = document.querySelector('.list');

let list_peoples = [];

input_text.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        let name = input_text.value;
        list_peoples.push(name);
        input_text.value = '';
        list.innerHTML += '<li>'+name+'</li>';
    };
});

function get_random_number(range){
    let number_random = Math.floor(Math.random() * range) + 1;
    if(range == ''){
        alert('Erro, espaço vazio!');
    };
    return number_random;
};

function get_giveaway_number(){
    let amount_numbers = input_numbers.value;
    let giveaway_number = get_random_number(amount_numbers);
    display.innerText = giveaway_number;
};

function get_giveaway_people(){
    let list_range = list_peoples.length;
    let giveaway_people_number = get_random_number(list_range);
    display.innerText = list_peoples[giveaway_people_number - 1];
};

bttn_numbers.addEventListener('click', get_giveaway_number);
bttn_peoples.addEventListener('click', get_giveaway_people);

numbers.addEventListener('click', () => {
    option_peoples.style.display = 'none';
    option_numbers.style.display = 'flex';
});

peoples.addEventListener('click', () => {
    option_numbers.style.display = 'none';
    option_peoples.style.display = 'flex';
});