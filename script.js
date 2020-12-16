class Animal{
    constructor(name, myImage){
        this.name = name;
        this.getImage();
    }


action(){
  document.getElementById(this.actionSoundName).play();
  
}
getImage(){

    let myImage = document.querySelector("img")
    myImage.src=this.animalImage;
    
}


putInTheDocument()
{
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
    
    petTR.addEventListener('click', this.getImage.bind(this));
  

    }
}


class Cat extends Animal{
    constructor(name){
        super(name);
        this.legs = 4;
        this.actionText = "Meoow";
        this.actionSoundName = "meow";
        this.animalImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/600px-VAN_CAT.png";
    }
    
}

class Monkey extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.animalImage = "https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s300-c85.jpg";
    }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
