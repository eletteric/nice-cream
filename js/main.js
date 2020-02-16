var bollClone = document.getElementById("defaultBoll").cloneNode(true);
var bollCloneChocolate = document.getElementById("defaultBollChocolate").cloneNode(true);
var bollCloneStrawberry = document.getElementById("defaultBollStrawberry").cloneNode(true);
var bollCloneBanana = document.getElementById("defaultBollBanana").cloneNode(true);
var chocoTopping = document.getElementById("chocoTopping").cloneNode(true);

var vanillaList = document.getElementById("vanillaList");
var chocolateList = document.getElementById("chocolateList");
var strawberryList = document.getElementById("strawberryList");
var bananaList = document.getElementById("bananaList");
var toppingList = document.getElementById("toppingList");
// Add the default Boll
function initiateFirstBoll() {
    vanillaList.appendChild(bollClone);
    var elementsv = document.getElementsByClassName("v");

    for (var i = 0; i < elementsv.length; i++) {

        elementsv[i].beginElement();

    }
}

function initiateBollChocolate() {
    chocolateList.appendChild(bollCloneChocolate);
}

function initiateBollStrawberry() {
    strawberryList.appendChild(bollCloneStrawberry);
}

function initiateBollBanana() {
    bananaList.appendChild(bollCloneBanana);
}

// Remove Clones function
function removeAllClones(listName) {
    while (listName.firstChild) {
        listName.firstChild.remove();
    }
}

function getTotalAmount() {
    var vanillaTotal = document.getElementById("vanillaNmbr").value;
    var vanillaTotalNmbr = parseInt(vanillaTotal);

    var chocolateTotal = document.getElementById("chocolateNmbr").value;
    var chocolateTotalNmbr = parseInt(chocolateTotal);

    var strawberryTotal = document.getElementById("strawberryNmbr").value;
    var strawberryTotalNmbr = parseInt(strawberryTotal);

    var bananaTotal = document.getElementById("bananaNmbr").value;
    var bananaTotalNmbr = parseInt(bananaTotal);

    var totalAmount = vanillaTotalNmbr + chocolateTotalNmbr + strawberryTotalNmbr + bananaTotalNmbr;

    return totalAmount;

}


function vanillaFunction() {



    // Get the value at the MOMENT of selecting
    var vanillaBolls = document.getElementById("vanillaNmbr").value;
    // Change them to an Integer
    var vanillaBollsNmbr = parseInt(vanillaBolls);
    console.log(vanillaBollsNmbr);

    var total = getTotalAmount();
    var maxAmount = 5;
    var bollsLeft = 5 - (total - vanillaBollsNmbr);

    if (total > 5) {
        alert('max amount balls');
        document.getElementById("vanillaNmbr").options[bollsLeft].selected = 'selected';

        removeAllClones(vanillaList);
        for (i = 0; i < bollsLeft; i++) {
            var bollClone = document.getElementById("defaultBoll").cloneNode(true);
            bollClone.style.zIndex = i * -10;
            vanillaList.appendChild(bollClone);
        }

        return;
    } else if (total == 0) {
        removeAllClones(vanillaList);
        initiateFirstBoll();
        alert('minimum amount of balls is 1');
        document.getElementById("vanillaNmbr").options[1].selected = 'selected';
        return;
    }


    removeAllClones(vanillaList);

    for (i = 0; i < vanillaBollsNmbr; i++) {
        var bollClone = document.getElementById("defaultBoll").cloneNode(true);
        bollClone.style.zIndex = i * -10;
        bollClone.id = "vanilla" + i;
        vanillaList.appendChild(bollClone);

    }

    var elementsv = document.getElementsByClassName("v");

    for (var i = 0; i < elementsv.length; i++) {

        elementsv[i].beginElement();

    }


}

function chocolateFunction() {


    // Get the value at the MOMENT of selecting
    var chocolateBolls = document.getElementById("chocolateNmbr").value;
    // Change them to an Integer
    var chocolateBollsNmbr = parseInt(chocolateBolls);
    console.log(chocolateBollsNmbr);


    var total = getTotalAmount();
    var maxAmount = 5;
    var bollsLeft = 5 - (total - chocolateBollsNmbr);

    if (total > 5) {
        alert('max amount balls');
        document.getElementById("chocolateNmbr").options[bollsLeft].selected = 'selected';

        removeAllClones(chocolateList);
        for (i = 0; i < bollsLeft; i++) {
            var bollCloneChocolate = document.getElementById("defaultBollChocolate").cloneNode(true);
            bollCloneChocolate.style.zIndex = i * -20;
            chocolateList.appendChild(bollCloneChocolate);
        }

        return;
    } else if (total == 0) {
        removeAllClones(chocolateList);
        initiateBollChocolate();
        alert('minimum amount of balls is 1');
        document.getElementById("chocolateNmbr").options[1].selected = 'selected';
        return;
    }


    removeAllClones(chocolateList);

    for (i = 0; i < chocolateBollsNmbr; i++) {
        var bollCloneChocolate = document.getElementById("defaultBollChocolate").cloneNode(true);
        bollCloneChocolate.style.zIndex = i * -20;
        chocolateList.appendChild(bollCloneChocolate);
    }

    var elementsc = document.getElementsByClassName("c");
    for (var i = 0; i < elementsc.length; i++) {
        elementsc[i].beginElement();


    }
}

function strawberryFunction() {
    // Get the value at the MOMENT of selecting
    var strawberryBolls = document.getElementById("strawberryNmbr").value;
    // Change them to an Integer
    var strawberryBollsNmbr = parseInt(strawberryBolls);
    console.log(strawberryBollsNmbr);

    var total = getTotalAmount();
    var maxAmount = 5;
    var bollsLeft = 5 - (total - strawberryBollsNmbr);

    if (total > 5) {
        alert('max amount balls');
        document.getElementById("strawberryNmbr").options[bollsLeft].selected = 'selected';


        removeAllClones(strawberryList);
        for (i = 0; i < bollsLeft; i++) {
            var bollCloneStrawberry = document.getElementById("defaultBollStrawberry").cloneNode(true);
            bollCloneStrawberry.style.zIndex = i * -30;
            strawberryList.appendChild(bollCloneStrawberry);
        }

        return;

    } else if (total == 0) {
        removeAllClones(strawberryList);
        initiateBollStrawberry();
        alert('minimum amount of balls is 1');
        document.getElementById("strawberryNmbr").options[1].selected = 'selected';
        return;
    }


    removeAllClones(strawberryList);

    for (i = 0; i < strawberryBollsNmbr; i++) {
        var bollCloneStrawberry = document.getElementById("defaultBollStrawberry").cloneNode(true);
        bollCloneStrawberry.style.zIndex = i * -30;
        strawberryList.appendChild(bollCloneStrawberry);
    }

    var elementss = document.getElementsByClassName("s");
    for (var i = 0; i < elementss.length; i++) {
        elementss[i].beginElement();


    }
}

function bananaFunction() {

    // Get the value at the MOMENT of selecting
    var bananaBolls = document.getElementById("bananaNmbr").value;
    // Change them to an Integer
    var bananaBollsNmbr = parseInt(bananaBolls);
    console.log(bananaBollsNmbr);

    var total = getTotalAmount();
    var maxAmount = 5;
    var bollsLeft = 5 - (total - bananaBollsNmbr);

    if (total > 5) {
        alert('max amount balls');
        document.getElementById("bananaNmbr").options[bollsLeft].selected = 'selected';

        removeAllClones(bananaList);
        for (i = 0; i < bollsLeft; i++) {
            var bollCloneBanana = document.getElementById("defaultBollBanana").cloneNode(true);
            bollCloneBanana.style.zIndex = i * -40;
            bananaList.appendChild(bollCloneBanana);
        }

        return;
    } else if (total == 0) {
        removeAllClones(bananaList);
        initiateBollBanana();
        alert('minimum amount of balls is 1');
        document.getElementById("bananaNmbr").options[1].selected = 'selected';
        return;
    }

    removeAllClones(bananaList);

    for (i = 0; i < bananaBollsNmbr; i++) {
        var bollCloneBanana = document.getElementById("defaultBollBanana").cloneNode(true);
        bollCloneBanana.style.zIndex = i * -40;
        bananaList.appendChild(bollCloneBanana);
    }
    var elementsb = document.getElementsByClassName("b");
    for (var i = 0; i < elementsb.length; i++) {
        elementsb[i].beginElement();
    }
}


function addChoco() {
    var checkbox = document.getElementById('choco');
    var chocoTop = document.getElementById("tc");
    if (checkbox.checked != true) {
        document.getElementById('chocoTopping').style.display = "none";
    } else {
        document.getElementById('chocoTopping').style.display = "block";
        chocoTop.beginElement();
    }

}

function addCaramel() {
    var checkbox = document.getElementById('caramel');
    var chocoTop = document.getElementById("tcaramel");
    if (checkbox.checked != true) {
        document.getElementById('caramelTopping').style.display = "none";
    } else {
        document.getElementById('caramelTopping').style.display = "block";
        chocoTop.beginElement();
    }

}





function addSprinkles() {
    var checkbox = document.getElementById('sprinkles');
    if (checkbox.checked != true) {
        document.getElementById('sprinklesTopping').style.display = "none";
    } else {
        document.getElementById('sprinklesTopping').style.display = "block";
    }

}
