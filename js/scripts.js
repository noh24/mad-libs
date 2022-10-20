//user interface logic

//declare function advertisement that is called only once due to .removeEventListener()
function advertisementAlert() {
  alert("This is an ad");
  document.querySelector("button#reset").removeEventListener("click", advertisementAlert);
}

window.addEventListener("load", function() {
  //set up an event handler for the form submission
  let form = document.querySelector("form");

  //target the reset button and story element
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");

  form.addEventListener("submit", function(e) {

    //get the value for each form input
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput = document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const nounInput = document.getElementById("nounInput").value;
    //print values to the story area;
    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person1b").innerText = person1Input;
    document.querySelector("span#person1c").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#person2b").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;

    //show the story by removing class attritube
    story.removeAttribute("class");

    //prevent default "refresh" action for the submit event
    e.preventDefault();
  });

  //new event listener for form submit event to reveal reset button
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  //new event listener for click even on resetbtn to reveal advertisement
  resetBtn.addEventListener("click", advertisementAlert);

  //new event listener for click event on reset button to reset form values by changing values to null
  resetBtn.addEventListener("click", function() {
    story.setAttribute("class", "hidden");
    resetBtn.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
});