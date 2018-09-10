var answer;
var correct=0;

    function hide(){
    document.getElementById('first').style.display = "none";
    document.getElementById('second').style.display = "flex";
}

function secondhide(){
    document.getElementById('second').style.display = "none";
    document.getElementById('third').style.display = "flex";
}

function firstquestion(answer){
  if(answer == "Warszawa"){
    ++correct; 
    console.log(correct);
  }
   hide();
}

function secondquestion(answer){
  if(answer == "Berlin"){
    ++correct; 
    console.log(correct);
  }
   secondhide();
}

function thirdquestion(answer){
  if(answer == "Sztokholm"){
    ++correct; 
     console.log(correct);
    if(correct == 3){
      console.log('dziala!');
      document.getElementById('survey').style.display = "none";
      document.getElementById('cv').style.display = "flex";
    }
  }
  if(correct < 3){
    document.getElementById('survey').style.display = "none";
    document.getElementById('modal').style.display = "flex";
  }
}

