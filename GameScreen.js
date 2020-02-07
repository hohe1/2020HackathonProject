$(document).ready(function() {

let index = 0
let data =[
  {
    picture:"https://via.placeholder.com/350x150",
    question:"After School you are invited to go eat with the smokers and vapers of the school, you know they have a bad rep but you feel included that they even asked you.",
    choices:["yes go eat with them","no, don't "],
    impact:[-5,0],
    nextQuestion:[1, 2],
  },
  {
    picture:"https://via.placeholder.com/350x150",
    question:"You're out with the group and they pull out cigarettes and vapes, they ask you to hit it",
    choices:["You go for the Juul because you think it's less harmful","You say yes to the Cigarrette because you know its only tobacco","You decline because you now that's not the path you want to take"],
    impact:[-10,-15,3],
    nextQuestion:[3,4,5],
  },
  {
    picture:"https://via.placeholder.com/350x150",
    question:"You go to boba instead,there you see a friend and join them, but then they offer you a hit of their vape ",
    choices:["Hesistate when saying No Thanks","Oh well why not, and hit the Juul","Decline nicely because you don't want to do that"],
    impact:[-1,-5,3],
    nextQuestion:[6,7,8],
  },
  {
    picture:"https://via.placeholder.com/350x150",
    question:"Since you hit the juul, you now have a head rush",
    choices:["Tell them you don't feel well","Ask them if what you're feeling is normal","Ignore it and keep juuling"],
    impact:[3,3,-5],
    nextQuestion:[9,10,11],
  },
  {
    picture:"https://via.placeholder.com/350x150",
    question:"You begin coughing ucontrollably because of the cigarette ",
    choices:["You leave telling them that you have to go somewhere","Keep taking hits of the cigarette",],
    impact:[3,-5],
    nextQuestion:[],
  },
  {
    picture:"https://via.placeholder.com/350x150",
    question:"They tell you that you're scary and pressure you to pick one to smoke",
    choices:["Pick either one because you don't want to seem scary","You Run away"],
    impact:[-5,3,1],
    nextQuestion: [],
  },
  {
    picture:"",
    question:"They pressure you to hit it",
    choices:["tell them angirly to stop ",],
    impact:[],
    nextQuestion:[],
  },
  {
    picture:"",
    question:"",
    choices:["",],
    impact:[],
    nextQuestion:[],
  },
  {
    picture:"",
    question:"",
    choices:["",],
    impact:[],
    nextQuestion:[],
  },
  {
    picture:"",
    question:"",
    choices:["",],
    impact:[],
    nextQuestion:[],
  },
]

let hp = 100;

let twIndex = 0
function typeWriter(){
  let textArr = (data[index].question).split("")
  //console.log(textArr);
  
    setTimeout(function(){
      if(twIndex < textArr.length){
        $(".paragraph").append(textArr[twIndex])
        twIndex++
        typeWriter()
      }
    },25);
    
}

function displayQuestions(){
  $(".image").attr("src",data[index].picture);
  $(".button").show();
  
  if(data[index].choices.length < 4){
      $(".choiceB3").hide();
    if(data[index].choices.length < 3){
      $(".choiceB2").hide();
    }
  }
  
  for(let i=0;i<4;i++){
    $(".choiceB"+i).text(data[index].choices[i]);
  }
}
  
for(let i=0;i<4;i++){
  $(".choiceB"+i).click(function(){
    index = data[index].nextQuestion[i]
    hp = hp + data[index].impact[i]
    console.log(hp)
    
    // after clicking answer buttons
    
    displayQuestions();
    $(".paragraph").text("")
    twIndex = 0
    typeWriter()


    //check for hp and replace picture

    
    if(hp<99){
      $(".hpImg").attr("src","https://www.pngkey.com/png/full/441-4414310_health-bar-exit-button-pixel-art.png")
    }
    if(hp<99 && hp >=75){
      $(".hpImg").attr("src","https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FHealthBar75.png?v=1581118129277")
    }
    else if(hp<75 && hp >=50){
      $(".hpImg").attr("src","https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FHealthBar50.png?v=1581117998851")
    }
     else if(hp<50 && hp >=25){
      $(".hpImg").attr("src","https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FHealthBar25.png?v=1581118023720")
    }
    else if(hp<25 && hp >=0){
      $(".hpImg").attr("src","https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FHealthBar0.png?v=1581118121052")
    }
    
    
  });
}
  displayQuestions();
  $(".paragraph").text("");
  twIndex = 0
  typeWriter();
});