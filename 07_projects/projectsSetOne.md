# Projects related to DOM

## Project link 
[Click to get the link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css,1-colorChanger%2Findex.html)

# Solution Code
## Project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function (button) {
  console.log(button);
  button.addEventListener('click' , function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  })
});




```