const theInput = document.getElementById
('the-input');
console.log(theInput)

const newnameInput = document.getElementById
('newname-input')
console.log(newnameInput)

const newnameButton = document.getElementById
('newname-button')
console.log(newnameButton)

const box = document.getElementById
('box')

console.log(box)

newnameButton.addEventListener('click', () =>{

    box.textContent = theInput.value

})