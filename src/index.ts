/* 
* @author Vinay kaithwas
* 
*/
/* 
* Total number of bubble.
*
*/
const totolbubbles = 10;

/* 
* Total number of bubble.
*
*/
const minBubbles = 1;

/* 
* Total number of bubble.
*
*/
const maxBubble = 1;

/**
 * Storing the created bubbles.
 */
 const bubbleBuffer: HTMLDivElement[] = [];

 const containerDiv = document.getElementById("container") as HTMLDivElement;

 AddTextToDom();
 releaseBubbles();

 /**
  * Releases the bubbles after creating them.
  */
 
    function releaseBubbles() {
    createAnimatedDiv();
     for (let i = 0; i < totolbubbles; i++) {
         containerDiv.appendChild(bubbleBuffer[i]);
     }
     console.log("Bubbles released");
    }

  /**
  * Releases the bubbles after creating them.
  */
 
   function AddTextToDom() {
        const pElement = document.createElement('p');
        pElement.classList.add('p-tag-node');
        pElement.innerText = 'Hello World';
        containerDiv.appendChild(pElement);
    }
    /**
     * Generates a random decimal (or) floating point number between the specified range.
     * @param min minimum number for the range to be generated.
     * @param max maximum  number for the range to be generated.
     */
    function randomFloat(min: number, max: number) {
        return (Math.random() * (max - min)) + min
    }

function createAnimatedDiv(){
    for (let i = 0; i < totolbubbles; i++) {
        let div = document.createElement("div");
        div.style.left =  + 50+"px";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.animationDelay =  "30 s";
        div.style.filter = "blur(30px)";
        div.classList.add("bubble");
        bubbleBuffer.push(div);
    }
}