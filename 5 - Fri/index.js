console.log(`I poured spot remover on my dog. Now he's gone...`);

const container = document.querySelector(`.btn-container`);
const addBtn = document.querySelector(`[name="addBtn"]`);

const randNum = (max) => Math.floor(Math.random() * Math.floor(max))

// try to add a new button
addBtn.addEventListener('click', (e) => {
    const el = document.createElement('button');
    el.classList.add('addBtn');
    container.appendChild(el);
    const ranNum = randNum(9)+1;
    el.innerHTML = (`I can be clicked  ${ranNum} times.`);
    el.setAttribute('data-number', ranNum);
    });
container.addEventListener(`click`, (e) => {
    if (e.target != e.currentTarget) {
    const btn = e.target;
    e.target.dataset.number = e.target.dataset.number -1;
    let boxCount = e.target.dataset.number;
    e.target.innerText= (`I can be clicked ${boxCount} times`);
    if(boxCount <= 0){
        e.target.disabled = true;
        e.target.innerText= (`STOP`);
    };
}
}); 

/******************************
 * 
 *  Using the existing HTML and CSS, add Javascript code to do the following:
 * 
 *  1 - When the user clicks "Add New Button" a new button is added to the page.
 *  2 - The button can only be clicked a random number of times between 1 -10. A
 *      randNum function has been supplied.
 *  3 - Once the button has been clicked enough times, it should be disabled.
 * 
 ********************************/
