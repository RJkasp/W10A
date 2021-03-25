// Setup a GitHub repository and local git repository
// The local repository should be a project created by the projectStarter script
// Setup the index.html to link to your app.js
// Add some simple content in your HTML (this can be anything) with some classes and id's
// In you app.js show your knowledge of each of the following selectors:








// You must show each method by changing the page somehow! Not simply console.log anymore.

// querySelector()
var h1 = document.querySelector('body>header>h1');    //queryselector selects a single object 
h1.innerText = "Follow the White Rabbit";             // changes text to "what ever you want"

// querySelectorAll()
var allPTags = document.querySelectorAll('p');                    //querySelectorAll selects all p tags
for(var i = 0; i < allPTags.length; i++){                         //runs loop to catch all p tags 
    allPTags[i].innerText = "Your not safe, I came to warn you."  //changed text of all p tags
}

// getElementById()
var title2 = document.getElementById('title2');   //chose elementId (id tag)
title2.innerText = "Hello Mr Anderson";           //chaged text to "what ever you want"
//extra play
var title2 = document.getElementById('title2');   //chose element id 
title2.style.color = "green";                     //styled text to green for fun

// getElementsByClassName()
var information = document.getElementsByClassName('info');  //chooses class
for(var i=0; i < information.length; i++){                  //runs a loop to hit all in the class 
information[i].style.color = `yellow`;                      // adds style to the class i chose 
}
//extra play
var information = document.getElementsByClassName('info');
for(var i=0; i<information.length; i++){
    information[i].style.background = 'black';
}

// getElementsByTagName                      //[i]selects which a tag i want to turn red
 var aTag = document.getElementsByTagName("a")[1].style.color = 'red';
 
 // for fun getElementsByTagName added a loop to remove text decoration
 var aTag = document.getElementsByTagName("a");
    for(var i = 0; i< aTag.length; i++){
       aTag[i].style.textDecoration = 'none';
    }

    // createElement()
//does it only always show um on bottom of container you choose
//to place the new element in?? Alex.
var newElement = document.createElement('h3');   //using functiong createElement to add new tags into our cod here i created a h3 tag
container.append(newElement);                    //the append method will insertDOMString objests as TextNodes still not quiet sure how it works but it does 
newElement.innerText = "Remember I only offer the TRUTH!"; //places the new h3 tag with what its going to say on the webpage.

// createTextNode()
//takes the newElement from above and adds more text to the end of it
var text = document.createTextNode("nothing more");
newElement.appendChild(text);

// removeChild(). 
var lastPTag = document.getElementById('foot'); //targets the foot(container)
lastPTag.removeChild(lastPTag.childNodes[3]);  //selects p tag in container and removes it

// extra turned the removeChild into a function
function removeTheChild(id, index){   //this function works by you being able to chose the id, and index inside that id to remove child
    var disapear = document.getElementById(id)
    disapear.removeChild(disapear.childNodes[index])
}
removeTheChild('foot', 1);

 
//to target things in queryelector id use (#id),class use (.class),for tag (tagName).

//classList add()
var addClass = document.querySelector('footer');
addClass.classList.add('boom3');

// remove()target only one class out of the 3 info class's the first one it hits it removes and stops
var boom = document.querySelector('.info');//had to use a querySelector to remove my target.
boom.classList.remove('info');  //removes first class info it runs into

//toggle()
boom.classList.toggle('info');//toggles info back on

//remove() targeted all with the class name matrix loop keeps pushing onto the next until all are removed
var boom1 = document.querySelectorAll('.matrix');//with this one im targeting all matrix class 
for(i = 0; i < boom1.length; i++){               //looping through all the class of matrix
    boom1[i].classList.remove('matrix');         //and turning them off
}
//I tryed this first and it wouldnt work finally i discovered removing line 97 because its redeclaring a 
//selector that dont exist makes the loop unable to work to toggle back on matrix class.
//  boom1 = document.querySelectorAll('.matrix'); 
for(i = 0; i < boom1.length; i++){            
    boom1[i].classList.toggle('matrix');    
}



