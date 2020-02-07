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
    question:"You're out with the group and they oull out cigarettes and vapes, they ask you to hit it",
    choices:["You go for the Juul because you think it's less harmful","You say yes to the Cigarrette because you know its only tobacco","You decline because you now that's not the path you want to take"],
    impact:[-5,-5,3],
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
    choices:[""],
    impact:[-1,-5,3],
    nextQuestion:[9,10,11],
  },
  {},
] 

let hp = 100

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
    },50);
    
}

function displayQuestions(){
  $(".image").attr("src",data[index].picture);
  $(".button").show();
  
  if(data[index].choices.length < 4){
      $(".choiceB2").hide();
    if(data[index].choices.length < 3){
      $(".choiceB3").hide();
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


    //check for hp and replace health bar picture
    if(hp<100 && hp >= 80){
      $(".hpImg").attr("src","")
    }
    
    else if(hp<80 && hp >=){
      $(".hpImg").attr("src","https://lh3.googleusercontent.com/proxy/WcPzV_DTi3zvN7CnXU_nu1yki8FSSkwMP9R7xyIw2GMGYcqd2Ydaj4Gpia2gUJjBeit0Rh0tnB-jmzPpC6OoMjaiSIYGapTt")
    }
    else if(){
      $(".hpImg").attr("src","")
    }
     else if(){
      $(".hpImg").attr("src","")
    }
    
  });
}

  
displayQuestions();
$(".paragraph").text("")
twIndex = 0
typeWriter()

  
});

