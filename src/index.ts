/* 
* @author Vinay kaithwas
* 
*/

const containerDiv = document.getElementById("container") as HTMLDivElement;
/**
 * Releases the bubbles after creating them.
 */
 
function AddTextToDom() {
    const pElement = document.createElement('p');
    pElement.classList.add('p-tag-node');
    pElement.innerText = 'Hello World';
    containerDiv.appendChild(pElement);
}

AddTextToDom();