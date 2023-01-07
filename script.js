function simulate(){
    let random = ((Math.floor(Math.random()*6))+1)
    if (random == 1){
        document.getElementById("change").src = "Images/Dice1.png";
    }
    else if (random == 2){
        document.getElementById("change").src = "Images/Dice2.png";
    }

    else if (random == 3){
        document.getElementById("change").src = "Images/Dice3.png";
    }    
    else if (random == 4){
        document.getElementById("change").src = "Images/Dice4.png";
    }    
    else if (random == 5){
        document.getElementById("change").src = "Images/Dice5.png";
    
    }

    else {
        document.getElementById("change").src = "Images/Dice6.png";
    }
}