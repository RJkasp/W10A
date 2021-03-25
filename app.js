// Setup a GitHub repository and local git repository
// The local repository should be a project created by the projectStarter script
// Setup the index.html to link to your app.js
// Add some simple content in your HTML (this can be anything) with some classes and id's
// In you app.js show your knowledge of each of the following selectors:








// You must show each method by changing the page somehow! Not simply console.log anymore.

// querySelector()
var h1 = document.querySelector('body>header>h1');
h1.innerText = "Follow the White Rabbit";

// querySelectorAll()
var allPTags = document.querySelectorAll('p');
for(var i = 0; i < allPTags.length; i++){
    allPTags[i].innerText = "Your not safe, I came to warn you."
}

// getElementById()
var title2 = document.getElementById('title2');
title2.innerText = "Hello Mr Anderson";
//extra play
var title2 = document.getElementById('title2');
title2.style.color = "green";

// getElementsByClassName()
var information = document.getElementsByClassName('info');
for(var i=0; i < information.length; i++){
information[i].style.color = `yellow`;
}
//extra play
var information = document.getElementsByClassName('info');
for(var i=0; i<information.length; i++){
    information[i].style.background = 'black';
}

// getElementsByTagName
 var aTag = document.getElementsByTagName("a")[1].style.color = 'red';
 
 // for fun getElementsByTagName added a loop to remove text decoration
 var aTag = document.getElementsByTagName("a");
    for(var i = 0; i< aTag.length; i++){
       aTag[i].style.textDecoration = 'none';
    }

    // createElement()
//does it only always show um on bottom of container you choose
//to place the new element in??
var newElement = document.createElement('h3');
container.append(newElement);
newElement.innerText = "Remember I only offer the TRUTH!";

// createTextNode()
//takes the newElement from above and adds more text to the end of it
var text = document.createTextNode("nothing more");
newElement.appendChild(text);

// removeChild(). 
var lastPTag = document.getElementById('foot');
lastPTag.removeChild(lastPTag.childNodes[3]);

// extra turned the removeChild into a function
function removeTheChild(id, index){
    var disapear = document.getElementById(id)
    disapear.removeChild(disapear.childNodes[index])
}
removeTheChild('foot', 1);

// classList add(), remove(), toggle()
//to target things in queryelector id use (#id),class use (.class),for tag (tagName).

var addClass = document.querySelector('footer');
addClass.classList.add('boom3');


var boom = document.querySelector('.info');//had to use a querySelector to remove my target.
boom.classList.remove('info');  //removes first class info it runs into

boom.classList.toggle('info');//toggles info back on

var boom1 = document.querySelectorAll('.matrix');//with this one im targeting all matrix class 
for(i = 0; i < boom1.length; i++){               //looping through all the class of matrix
    boom1[i].classList.remove('matrix');         //and turning them off
}
// var boom1 = document.querySelectorAll('.matrix'); i tryed this first and it wouldnt work finally i discovered removing it because its redeclaring a selector that dont exsist.
for(i = 0; i < boom1.length; i++){            
    boom1[i].classList.toggle('matrix');    
}



