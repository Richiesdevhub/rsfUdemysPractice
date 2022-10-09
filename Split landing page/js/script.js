const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', ()=> {
    console.log('Enter mouse to the left')
  container.classList.remove('hover-right');
  container.classList.add('hover-left');
});
right.addEventListener('mouseenter', ()=> {
    console.log('Enter mouse to the right')
  container.classList.remove('hover-left');
  container.classList.add('hover-right')
});
left.addEventListener('mouseleave', ()=>{
    console.log('Leaving the left side')
  container.classList.remove('hover-left');
  console.log('leaving left side');
});
right.addEventListener('mouseleave', ()=> {
    console.log('Leaving the right side')
  container.classList.remove('hover-right');
  console.log('leaving right side');
});