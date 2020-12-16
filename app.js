//color changer js 

const color_btn=document.querySelector('.color_btn');
const body_bg=document.querySelector('body');

color_btn.addEventListener('click', change_COLOR );

const color_array=['red','blue','green','violet','#F4D35E','#F95738','#FFCAD4','#69DDFF'];

//change_COLOR functon to change the background color
function change_COLOR()
{
//body_bg.style.backgroundColor='red';

const random_val=Math.floor(Math.random()*color_array.length);//getting random numbers 
body_bg.style.backgroundColor=color_array[random_val];
}
