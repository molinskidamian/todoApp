const btnAddItem = document.querySelector('main .btn');
const inputAddItem = document.querySelector('input[name="addItemField"]');
const ul = document.querySelector('.list-items');


// Created li
const li = document.createElement('li');
li.classList.add('item');


const df = document.createDocumentFragment();



const addItem = () => {
  li.textContent = inputAddItem.value;
  df.appendChild(li);
  ul.appendChild(df);
}

btnAddItem.addEventListener('click', addItem);