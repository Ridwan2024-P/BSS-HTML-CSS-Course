// var button = document.getElementById('button');
// console.log(button);

const button = document.querySelector('#button');
const header = document.querySelector('h1');
button.addEventListener('click', function (){
//   console.log(document.body);
document.body.classList.toggle('dark');
header.classList.toggle('yellow')
});
