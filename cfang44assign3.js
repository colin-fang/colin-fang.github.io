//js for Colin Fang's third assignment

var i = 0
var k = 7
//above are global default variable values for the total number of turns in the game(k) and how many turns have passed(i)

function checkName() {
  if (document.getElementById("firstName").value != "" && document.getElementById("secondName").value != "") {
    document.getElementById("dRoll").disabled = false;
  } else {
    document.getElementById("dRoll").disabled = true;
  }
}
// above is the function for forcing the players to enter their names before the rest of the game is enabled

function setValue(button) {
  k = button;
}
//above is function for setting the value of the turns to 5,6,7, or 8 according to which radio buttons the players have selected

function rollDice() {
  if (i < k) {
    document.getElementById("diceNumber").innerHTML = Math.floor((Math.random() * 6) + 1);
    i = i + 1;
    document.getElementById("oneAble").disabled = false;
    document.getElementById("twoAble").disabled = false;
    document.getElementById("threeAble").disabled = false;
    document.getElementById("fourAble").disabled = false;
    document.getElementById("dRoll").disabled = true;
    document.getElementById("fiveRoll").disabled = true;
    document.getElementById("sixRoll").disabled = true;
    document.getElementById("sevenRoll").disabled = true;
    document.getElementById("eightRoll").disabled = true;
// in this function, the turn number selection radio buttons are disabled, the roll dice button is disabled, and the first player's interface is enabled
	
  } else {
    document.getElementById("diceNumber").innerHTML = "Great Game";
    document.getElementById("dRoll").disabled = true;
    document.getElementById("fiveRoll").disabled = true;
    document.getElementById("sixRoll").disabled = true;
    document.getElementById("sevenRoll").disabled = true;
    document.getElementById("eightRoll").disabled = true;
    if (+document.getElementById("oneTotal").innerHTML > +document.getElementById("twoTotal").innerHTML) {
      document.getElementById("gratz").innerHTML = "Congratulations " + document.getElementById("firstName").value + ", you have won!";
    } else if (+document.getElementById("twoTotal").innerHTML > +document.getElementById("oneTotal").innerHTML) {
      document.getElementById("gratz").innerHTML = "Congratulations " + document.getElementById("secondName").value + ", you have won!";
    } else if (+document.getElementById("twoTotal").innerHTML == +document.getElementById("oneTotal").innerHTML) {
      document.getElementById("gratz").innerHTML = "It is a draw!";
    }
// this function is for when the number of turns have been used up and none of the players have exceeded 100 cents, to display the game's conclusion	
  }
}

function oneCalc() {
  var x
  if (document.getElementById("oneAble").checked == true) {
    document.getElementById("oneT").innerHTML = document.getElementById("diceNumber").innerHTML * 1 + "cents";
    x = document.getElementById("diceNumber").innerHTML * 1;
  } else if (document.getElementById("twoAble").checked == true) {
    document.getElementById("oneT").innerHTML = document.getElementById("diceNumber").innerHTML * 5 + "cents";
    x = document.getElementById("diceNumber").innerHTML * 5;
  } else if (document.getElementById("threeAble").checked == true) {
    x = document.getElementById("diceNumber").innerHTML * 10;
    document.getElementById("oneT").innerHTML = document.getElementById("diceNumber").innerHTML * 10 + "cents";
//the above three "ifs" are for calculating the player's turn cent total and overall cent total according to which coin radio button is selected	
	
  }
  document.getElementById("oneTotal").innerHTML = +document.getElementById("oneTotal").innerHTML + x;
  document.getElementById("oneAble").disabled = true;
  document.getElementById("twoAble").disabled = true;
  document.getElementById("threeAble").disabled = true;
  document.getElementById("fourAble").disabled = true;
  document.getElementById("fiveAble").disabled = false;
  document.getElementById("sixAble").disabled = false;
  document.getElementById("sevenAble").disabled = false;
  document.getElementById("eightAble").disabled = false;
 //the above function is for disabling the first player's interface and enabling the second player's interface 
  
}

function twoCalc() {
  var y
  if (document.getElementById("fiveAble").checked == true) {
    document.getElementById("twoT").innerHTML = document.getElementById("diceNumber").innerHTML * 1 + "cents";
    y = document.getElementById("diceNumber").innerHTML * 1;
  } else if (document.getElementById("sixAble").checked == true) {
    document.getElementById("twoT").innerHTML = document.getElementById("diceNumber").innerHTML * 5 + "cents";
    y = document.getElementById("diceNumber").innerHTML * 5;
  } else if (document.getElementById("sevenAble").checked == true) {
    y = document.getElementById("diceNumber").innerHTML * 10;
    document.getElementById("twoT").innerHTML = document.getElementById("diceNumber").innerHTML * 10 + "cents";
//the above three "ifs" are for calculating the player's turn cent total and overall cent total according to which coin radio button is selected	
	
  }
  document.getElementById("twoTotal").innerHTML = +document.getElementById("twoTotal").innerHTML + y;
  document.getElementById("fiveAble").disabled = true;
  document.getElementById("sixAble").disabled = true;
  document.getElementById("sevenAble").disabled = true;
  document.getElementById("eightAble").disabled = true;
//the above function is for disabling the second player's interface 
  
  if (+document.getElementById("oneTotal").innerHTML > 100 && +document.getElementById("twoTotal").innerHTML <= 100) {
    document.getElementById("gratz").innerHTML = "Sorry, " + document.getElementById("firstName").value + ", you have exceeded 100 cents. The winner is " + document.getElementById("secondName").value + "!";
  } else if (+document.getElementById("twoTotal").innerHTML > 100 && +document.getElementById("oneTotal").innerHTML <= 100) {
    document.getElementById("gratz").innerHTML = "Sorry, " + document.getElementById("secondName").value + ", you have exceeded 100 cents. The winner is " + document.getElementById("firstName").value + "!";
  } else if (+document.getElementById("twoTotal").innerHTML > 100 && +document.getElementById("oneTotal").innerHTML > 100) {
    document.getElementById("gratz").innerHTML = "Sorry, " + document.getElementById("secondName").value + " and " + document.getElementById("firstName").value + ", you have both exceeded 100 cents. It is a draw!";
//the above three "ifs" are for when either player or both players exceed the 100 cent limit. 
//NOTE: this is intentionally not put in the first player's interface due to the circumstance in which both player's exceed the 100 cent limit in the same turn
//Cont. Otherwise for example, if the first player and second player both reach 100 cent before the turns are over, the first player will lose by default because his turn is first even though the second player also deserves the loss
	
 } else {
    document.getElementById("dRoll").disabled = false;
//This function is for enabling the roll dice function when both players have completed their turns	
	
  }
}
