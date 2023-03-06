
function generateList(array) {
    const ulMainElement = document.createElement('ul');
    for (let i = 0; i< array.length; i++) {
        const number = array[i];
        const liElement = document.createElement('li');
        if (Array.isArray(number)){
            const nestedUlElement = generateList(number);
            liElement.appendChild(nestedUlElement);
        } else {
            liElement.textContent = number;
        }
        ulMainElement.appendChild(liElement);
        document.body.appendChild(ulMainElement);
    } 
    return ulMainElement;
}

generateList([1,2, [ 1,2, [1,2,4,5]]]);