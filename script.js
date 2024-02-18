function createGrid(height, width) {
    const gridContainer = document.querySelector('.gridContainer');
    for(let i = 1; i <= width; i++)
    {
        const gridRow = document.createElement('div');
        gridRow.className = "gridRow";
        for(let j = 1; j <= height; j++)
        {
            const gridCell = document.createElement('div');
            gridCell.className = "gridCell";
            gridCell.setAttribute('style', `height: ${960 / height}px; width: ${960 / width}px;`);
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.backgroundColor = 'red';
            })
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

function deleteGrid(){
    const gridContainer = document.querySelector('.gridContainer');
    gridContainer.innerHTML = '';       
}

const sizeInput = document.querySelector('form');

sizeInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('input').value;
    deleteGrid();
    createGrid(inputValue, inputValue);
})