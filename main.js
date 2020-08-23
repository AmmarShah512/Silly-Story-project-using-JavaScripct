let customName = document.querySelector('#customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array) {
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;
   storyText = storyText.replace('Bob',name); 
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);
    
    storyText = storyText.replace('94',temperature);
    storyText = storyText.replace('300',weight);
  }
  
  //storyText = storyText.replace('94',temperature);
  //storyText = storyText.replace('300',weight);
  storyText = storyText.replace('insertx',randomValueFromArray(insertx));
  storyText = storyText.replace('inserty',randomValueFromArray(inserty));
  storyText = storyText.replace('insertz',randomValueFromArray(insertz));
  



  story.textContent = storyText;
  story.style.visibility = 'visible';
}