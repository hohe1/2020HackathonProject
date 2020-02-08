$(document).ready(function() {

let index = 0
let data =[
  {
    picture:"https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FChipotle.png?v=1581119800868",
    question:"After School you are invited to go to Chipotle with the smokers and vapers of the school. You know they have a bad rep but you feel included that they even asked you. What do you do?",
    choices:["Yes, go eat with them","no, don't "],
    impact:[-5,0],
    nextQuestion:[1, 2],
  },
  {
    picture:"https://calmatters.org/wp-content/uploads/sites/2/2018/09/41552544744_2ae2d565c6_o-e1536791053851.jpg?fit=794%2C529",
    question:"You're out with the group and they pull out cigarettes and vapes. Someone passes a vape to you and asks you if you want a hit.",
    choices:["You go for the Juul because you think it's less harmful","You say yes to the Cigarrette because you know its only tobacco","You decline because you now that's not the path you want to take"],
    impact:[-22,-35,3],
    nextQuestion:[3,4,5],
    //2
  },
  {
    picture:"https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FBobaguys.jpeg?v=1581119865917",
    question:"You go to boba instead,there you see a friend and join them, but then they offer you a hit of their vape ",
    choices:["Hesistate when saying No Thanks","Oh well why not, and hit the Juul","Decline nicely because you don't want to do that"],
    impact:[-1,-5,3],
    nextQuestion:[],
  },
  {
    picture:"https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FScreenshot%202020-02-07%20at%204.16.35%20PM.png?v=1581121015120",
    question:"Since you hit the juul, you now have a head rush.",
    choices:["Ask them if what you're feeling is normal","Ignore it and keep juuling"],
    impact:[-3,-3,-5],
    nextQuestion:[6,7],
    //2a
  },
  {
    picture:"https://us.123rf.com/450wm/keath/keath1805/keath180500061/100874789-stock-vector-man-coughing-simple-line-style-icon-medical-concept-illustration.jpg?ver=6",
    question:"You begin coughing ucontrollably because of the cigarette ",
    choices:["You leave telling them that you have to go somewhere","Keep taking hits of the cigarette",],
    impact:[3,-5],
    nextQuestion:[9,10],
    //2b
  },
  {
    picture:"https://i7.pngguru.com/preview/21/937/100/peer-pressure-person-conformity-minority-group-value-keji.jpg",
    question:"They tell you that you're scared and pressure you to pick one to smoke",
    choices:["Pick either one because you don't want to seem scared","You Run away"],
    impact:[-5,3,1],
    nextQuestion: [11,12,13],
    //2c
  },
  {
    picture:"https://image.shutterstock.com/image-vector/upset-stick-figure-person-comforting-260nw-1580912602.jpg",
    question:"They tell you that you're supposed to feel like that, it's fine.",
    choices:["You feel really sick so you end up going home."],
    impact:[0],
    nextQuestion:[8],
  },
  {
    picture:"https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FScreenshot%202020-02-07%20at%204.18.22%20PM.png?v=1581121113878",
    question:"You become addicted to vaping",
    choices:[],
    impact:[],
    nextQuestion:[],
  },
  {
    picture:"https://cdn.glitch.com/6bec49b0-c740-4af8-809e-979aa297be0f%2FScreenshot%202020-02-07%20at%204.25.03%20PM.png?v=1581121553600",
    question:"After that you tell yourself you're never smoking again.",
    choices:[],
    impact:[0],
    nextQuestion:[0],
  },
  {
    picture:"",
    question:"",
    choices:[],
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
      if(data[index].choices.length < 2){
        $(".choiceB1").hide();
          if(data[index].choices.length < 1){
            $(".button").hide();
        }
      }
    }
  }
  
  for(let i=0;i<4;i++){
    $(".choiceB"+i).text(data[index].choices[i]);
  }
}
  
for(let i=0;i<4;i++){
  $(".choiceB"+i).click(function(){
    hp = hp + data[index].impact[i]
    console.log(hp)
    index = data[index].nextQuestion[i]

    // after clicking answer buttons
    
    displayQuestions();
    $(".paragraph").text("")
    twIndex = 0
    typeWriter()


    //check for hp and replace picture

    
    if(hp>=99){
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