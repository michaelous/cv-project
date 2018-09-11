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
  }
   hide();
}

function secondquestion(answer){
  if(answer == "Berlin"){
    ++correct; 
  }
   secondhide();
}

function thirdquestion(answer){
  if(answer == "Sztokholm"){
    ++correct; 
    if(correct == 3){
      document.getElementById('survey').style.display = "none";
      document.getElementById('cv').style.display = "flex";
    }
  }
  if(correct < 3){
    document.getElementById('survey').style.display = "none";
    document.getElementById('modal').style.display = "flex";
  }
}

