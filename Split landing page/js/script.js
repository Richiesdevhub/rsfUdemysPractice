const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', ()=> {
  container.classList.remove('hover-right');
  container.classList.add('hover-left');
});
/*left.addEventlistener('mouseleave', ()=>{
  container.classList.remove('hover-left');
  console.log('leaving left side');
});*/
right.addEventListener('mouseenter', ()=> {
  container.classList.remove('hover-left');
  container.classlist.add('hover-right')
});
/*right.addEventlistener('mouseleave', ()=> {
  container.classList.remove('hover-right');
  console.log('leaving right side');
});*/