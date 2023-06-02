// script.js

function genererConfiguration() {
    var box = document.getElementsByName("box");

    var configurationsGirls = {
        b01x01: ["Laurie", "Heiko"],
        b01x02: ["Alice", "Selena"],
        b01x03: ["Barbara", "Adelaide"],
        b01x04: ["Asami", "Charlie"],
        b01x05: ["Nancy", "Sheila"],
        b01x06: ["Melanie"],
        b02x01: ["Jenette", "Ellen"],
        b02x02: ["Kate", "Uki"],
        b02x03: ["Ginny", "Ava"],
        b02x04: ["Gretel", "Red"],
        b02x05: ["Heather", "Veronica"],
        b02x06: ["Patsy"]
    };

    var configurationsKillers = {
        b01x01: ["Hans le Boucher"],
        b01x02: ["Poltergeist"],
        b01x03: ["Inkanyamba"],
        b01x04: ["Gepetto"],
        b01x05: ["Dr. Peur"],
        b01x06: ["Terror From Above"],
        b02x01: ["Evomorph"],
        b02x02: ["The Organism"],
        b02x03: ["The Intruders"],
        b02x04: ["Big Bad Wolf"],
        b02x05: ["The Ratchet Lady"],
        b02x06: ["Terror From the Grave"]
    };

    var configurationsLocations = {
        b01x01: ["Le Camp Happy Trails"],
        b01x02: ["Le Manoir Creech"],
        b01x03: ["Le Bosquet Sanglant"],
        b01x04: ["La Foire Infernale"],
        b01x05: ["Maple Lane"],
        b02x01: ["The USS Konrad"],
        b02x02: ["Station 2891"],
        b02x03: ["Wingard Cottage"],
        b02x04: ["Storybook Woods"],
        b02x05: ["Wolfe Asylum"]
    };

    var listGirls = [];
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked) {
            listGirls = listGirls.concat(configurationsGirls[box[i].value]);
        }
    }
    var listKillers = [];
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked) {
            listKillers = listKillers.concat(configurationsKillers[box[i].value]);
        }
    }
    var listLocations = [];
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked) {
            listLocations = listLocations.concat(configurationsLocations[box[i].value]);
        }
    }

    var selectedGirl = getRandomElement(listGirls);
    
    var selectedKiller = getRandomElement(listKillers);
    var killerLogoName = killerImages[selectedKiller]['logoName'];
    var killerLogo = killerImages[selectedKiller]['logo'];
    var killerBoard = killerImages[selectedKiller]['board'];

    var selectedLocation = getRandomElement(listLocations);
    var locationLogoName = locationImages[selectedLocation]['logoName'];
    var locationLogo = locationImages[selectedLocation]['logo'];
    var locationBoard = locationImages[selectedLocation]['board'];
    

    var configuration = selectedGirl + " va combattre " + selectedKiller + " dans " + selectedLocation + ".";

    document.getElementById("configuration").innerHTML = configuration;

    document.getElementById("girlName").innerHTML = selectedGirl;
    document.getElementById("girlCard").innerHTML = "<img src='img/000_girl.png'>";
    document.getElementById("killerName").innerHTML = killerLogo + killerLogoName;
    document.getElementById("killerBoard").innerHTML = killerBoard;
    document.getElementById("locationName").innerHTML = locationLogo + locationLogoName;
    document.getElementById("locationBoard").innerHTML = locationBoard;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}