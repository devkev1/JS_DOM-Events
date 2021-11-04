console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerText = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].innerText = 'I used the getElementById("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
    h3[i].innerHTML = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
const p = document.createElement("p");
p.innerText = "I am a p element";

// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(p);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
const a = document.createElement("a");
a.innerText = "I am a <a> tag";

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newP = document.createElement("p");
newP.innerText = "New Child Node";

// TODO: Remove the "New Child Node"
const exercise3 = document.getElementById("exercise3");
exercise3.replaceChild(newP, document.getElementById("N1"));

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
let interval = setInterval(move, 10);
let boxPosition = 0;
let box = document.getElementById("box");

function move() {
    if (boxPosition >= 150) {
        clearInterval(interval);
    } else {
        boxPosition +=1;
        box.style.left = boxPosition + "px";
    }
}

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen

function show() {
    let modal = document.createElement("div");
    modal.setAttribute('id', 'modal');
    // BONUS: The modal popup should be able to be closed. Refactor for this functionality
    modal.setAttribute('onClick', 'closeModal();');

    let modalCard = document.createElement("div");
    modalCard.className = 'modal-card';
    modalCard.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    //closeButton.setAttribute('onclick', 'closeModal();')

    modalCard.appendChild(closeButton);
    modal.appendChild(modalCard);
    document.body.appendChild(modal);
}

function closeModal() {
    let modal = document.getElementById('modal');
    document.body.removeChild(modal);
}
