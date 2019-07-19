console.log('*********');


// const colors = ['orange', 'blue', 'red', 'black'];
// function getColor(colors) { 
//     return colors[Math.floor(Math.random() * colors.length)]};
// console.log(colors);

const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');
//creating variable for x and y input numbers, and the button
const xIn = document.querySelector('.x');
const yIn = document.querySelector('.y');
const butt = document.querySelector('.butt');
//create function for adding boxes
butt.addEventListener('click', (e) => {
    const el = document.createElement('div');
    el.classList.add('box');
    boxContainer.appendChild(el);
    console.log(el);
    el.style.left=`${xIn.value}px`;
    el.style.bottom=`${yIn.value}px`;
    const colorpick = document.getElementById('colors');
    console.log(colorpick);

    if (`${xIn.value}` >= 538 || `${yIn.value}` >= 338) {
        alert("no");
        el.style.backgroundColor = 'red';
    } else {
        el.classList.add('box');
        boxContainer.appendChild(el);
        el.style.backgroundColor = colorpick.value;
        const clicky = document.querySelector('.box');
        clicky.addEventListener('click', (e) => {
            e.target.remove();
        });
        let colorRan = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let colorStr = '#';
        for(colorIndex = 0; colorIndex <6; colorIndex++){
            colorStr += colorRan[Math.floor(Math.random()*16)];
        el.style.backgroundColor=colorStr;
        }
    };
    el.addEventListener('mouseover',(e) => {
        el.style.bottom= Math.floor(Math.random()*338) +1 +'px'
        el.style.right = Math.floor(Math.random()*538) +1 +'px'
    });
});

// e.target.remove();
// const el = document.createElement('div'); //creates element in memory, not where you can see yet
// el.classList.add('box'); //created element, as variable called el, access the class, add remove
// const container = document.querySelector('.box-container'); //found container to put element in
// container.appendChild(el); //appends new element to dom
// console.log(el);
// // change the bg color of all the boxes
// // get boxes from the DOM, don't get em, can't manipulate
// const boxes = document.querySelectorAll('.box');
// //loop through all the boxes, and update their bg color
// boxes.forEach((box) => {
//     // add an eventListener that fires on click
//     // and updates background color
//     box.addEventListener('click', (e)=>{ 
//         const currentBG = e.target.style.backgroundColor;
//         e.target.style.backgroundColor = 
//             (currentBG==='orange') ? '#bada55':
//             (currentBG==='lavender') ? 'orange': 'lavender';
        
//     });
//     // box.style.backgroundColor = 'orange';
// });




/**********************************
 * Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * add a SELECT box (drop down list)  with at least 4 colors. When the user clicks "add box"
 * use the slected color as the background color
 * change the slect element to be a color input. this will allow the user
 * to choose the color they want.
 * when the user clicks on a box, it will remove it from the DOM
 * when the user hovers over the box, move it to random location
 * if the user enters no values, then add a box with a random color
 * and x/y coordinates.
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/