
const button = document.querySelector('.changeGrid')
button.addEventListener('click', () => {

    const askGrid = prompt("Enter the number of squares you want on each side- ")
    if (askGrid >= 100) {
        alert("Not more than 100, you moron")
    }
    else {
            createGrid(askGrid)
    }
})


const container = document.querySelector('.container')
function createGrid(askGrid) {
    container.innerHTML=''
    for (let i = 0; i < askGrid; i++) {
        const row = document.createElement('div')
        row.classList = 'row'
        for (let j = 0; j < askGrid; j++) {
            const cell = document.createElement('div')
            cell.classList = 'cell'
            cell.addEventListener('mouseover', function(e){
                if(isEraserActive==false){
                    e.target.style.background=randomColor()
                }
                else{
                    e.target.style.background=''
                }
            })
            row.appendChild(cell)

        }
        container.appendChild(row)
    }
}

let isEraserActive = false;

const eraseColor = document.querySelector('.eraseColor')
eraseColor.addEventListener('click', () => {
    isEraserActive = !isEraserActive
    if(isEraserActive==true){
        eraseColor.textContent='Eraser Active'
    }
    else{
        eraseColor.textContent='Eraser'
    }

})

function randomColor(){
    let letters='0123456789ABCDEF'
    let color='#'
    for(let i=0; i<6 ; i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}

function clearGrid(){
    const cells = document.querySelectorAll('.cell')

    cells.forEach((cell) => {
        cell.style.background=''
    })
}

const clear = document.querySelector('.clearGrid')
clear.addEventListener('click',clearGrid)

