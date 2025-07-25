function showCaption(){
    var image = document.getElementById("image-caption");
    var text = document.createTextNode("The main trio in promotional material.");

    image.appendChild(text);
}

function noCaption() {
    document.getElementById("image-caption").textContent = "";

}

function showCaption2(){
    var image = document.getElementById("image-caption2");
    var text = document.createTextNode("You can knock enemies off-balance with a well-timed parry.");

    image.appendChild(text);
}

function noCaption2() {
    document.getElementById("image-caption2").textContent = "";

}


function showCaption3(){
    var image = document.getElementById("divimage");
    var text = document.createTextNode("A young Nier stands in front of the fountain in his home village.");

    image.appendChild(text);
}

function noCaption3() {
    document.getElementById("divimage").textContent = "";

}

function showCaption4(){
    var image = document.getElementById("divimage2");
    var text = document.createTextNode("Fishing is an integral part of the quests offerred in Seafront.");

    image.appendChild(text);
}

function noCaption4() {
    document.getElementById("divimage2").textContent = "";

}

function showCaption5(){
    var image = document.getElementById("divimage3");
    var text = document.createTextNode("A desert city, Facade provide its own subplots and quests.");

    image.appendChild(text);
}

function noCaption5() {
    document.getElementById("divimage3").textContent = "";
}

function showCaption6(){
    var image = document.getElementById("divimage4");
    var text = document.createTextNode("For example, killing boars will allow you to travel faster.");

    image.appendChild(text);
}

function noCaption6() {
    document.getElementById("divimage4").textContent = "";
}



let status1 = false;

function enlargeImage(){

    const img = document.getElementById("combat");

        if (status1 == false){
            img.style.height = "400px";
        } else {
            img.style.height = "300px";
        }
        status1 = true;
    }

let status2 = false;

    function enlargeImage2(){

    const img = document.getElementById("replicantpic");

        if (status2 == false){
            img.style.height = "400px";
        } else {
            img.style.height = "354px";
        }
        status2 = true;
    }

let status3 = false;

    function enlargeImage3(){

    const img = document.getElementById("village");

        if (status3 == false){
            img.style.height = "400px";
        } else {
            img.style.height = "300px";
        }
        status3 = true;
    }

let status4 = false;

    function enlargeImage4(){

    const img = document.getElementById("fishing");

        if (status4 == false){
            img.style.height = "400px";
        } else {
            img.style.height = "300px";
        }
        status4 = true;
    }

let status5 = false;

    function enlargeImage5(){

    const img = document.getElementById("facade");

        if (status5 == false){
            img.style.height = "400px";
        } else {
            img.style.height = "300px";
        }
        status5 = true;
    }

    function enlargeImage6(){

    const img = document.getElementById("boar");

        if (status == false){
            img.style.height = "350px";
        } else {
            img.style.height = "250px";
        }
        status = true;
    }





function revertNormal() {
    var ogSection = document.getElementById("div1");
    div1.outerHTML = "<div class='chart' id='div1'> <div> <p> <ul> <li> Herbal Remedies </li></ul> <ul> <li> Book Smarts </li></ul> <ul> <li> The Gate Keeper’s Errand </li></ul> <ul> <li> Boar Hunt! </li></ul> <ul> <li> The Lost Eggs </li></ul> <ul> <li> Old-Fashioned Home Cooking </li></ul> <ul> <li> The Postman's Request </li></ul> <ul> <li> The Fisherman's Gambit </li></ul> <ul> <li> The Fisherman's Gambit Part 2 </li></ul> <ul> <li> The Fisherman's Gambit Part 3 </li></ul> <ul> <li> The Fisherman's Gambit Part 4 </li></ul> <ul> <li> The Fisherman's Gambit Part 5 </li></ul> </p> </div> <div> <p> <ul> <li>  Shopping List </li></ul> <ul> <li> A Return to Shopping </li></ul> <ul> <li> The Tavern Keeper's Grandmother </li></ul> <ul> <li> Yonah's Cooking </li></ul> <ul> <li> The Ballad of the Twins </li></ul> <ul> <li> A Dog Astray </li></ul> <ul> <li> The Lighthouse Lady's Wrath </li></ul> <ul> <li> Bon Appetit </li></ul> <ul> <li> Letter to a Lover </li></ul> <ul> <li> The Littlest Hero </li></ul> <ul> <li> The Tangled Message </li></ul> <ul> <li> A Signature Dish </li></ul> </p> </div> <div> <p> <ul> <li> Fragile Delivery 2 </li></ul> <ul> <li> Yonah's Cooking  </li></ul> <ul> <li> Yonah's Gift </li></ul> <ul> <li> The Runaway Son  </li></ul> <ul> <li> On the Wings of Eagles </li></ul> <ul> <li> Fragile Delivery 3 </li></ul> <ul> <li> The New Merchant in Town </li></ul><ul> <li> Closure </li></ul> <ul> <li> The Pride of a Lover </li></ul> <ul> <li> Apology from a Fool </li></ul> <ul> <li> Item Unknown </li></ul> <ul> <li> The Missing Girl </li></ul> </p> </div> </div>"


    var headings = document.getElementsByClassName("heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontWeight = "normal";
    }

}

function changeSection1() {

    var section1 = document.getElementById("div1");

    div1.outerHTML = "<div class='chart' id='div1'> <div> <h2> High Priority </h2> <ul> <li> Boar Hunt!</li></ul> <ul> <li> A Dog Astray </li></ul> <ul> <li> The Ballad of the Twins </li></ul> <ul> <li> Yonah's Cooking 1 </li></ul> <ul> <li> Yonah's Cooking 2 </li></ul> <ul> <li> The Lighthouse Lady's Wrath </li></ul> <ul> <li> Shopping List </li></ul> <ul> <li> Fragile Delivery 2 </li></ul> <ul> <li> Yonah's Cooking  </li></ul> <ul> <li> Yonah's Gift </li></ul> <ul> <li> The Runaway Son  </li></ul> <ul> <li> Fragile Delivery 3 </li></ul> </div> <div id='div6'>  <div id='divimage4'> </div> </div> </div>";

    const img = document.createElement("img");
    img.src = "images/boar.jpg";
    img.alt = "Nier standing over the vanquished boar, whose tusk allows him to travel faster.";
    img.id = "boar";

    img.addEventListener("mouseover", showCaption6);
    img.addEventListener("mouseout", noCaption6);
    img.addEventListener("click", enlargeImage6);

    document.getElementById("div6").appendChild(img);

    var headings = document.getElementsByClassName("heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontWeight = "normal";
    }

    var heading = document.getElementById("highPriority").style.fontWeight = "bold";

}

function changeSection2() {
    var section2 = document.getElementById("div1");
    div1.outerHTML="<div class='chart' id='div1'> <div> <h2 id='your-village'> Your Village </h2> <ul> <li> Herbal Remedies </li></ul> <ul> <li> Book Smarts </li></ul> <ul> <li> The Gate Keeper’s Errand </li></ul> <ul> <li> Boar Hunt! </li></ul> <ul> <li> The Lost Eggs </li></ul> <ul> <li>  Shopping List </li></ul> <ul> <li> A Return to Shopping </li></ul> <ul> <li> The Tavern Keeper's Grandmother </li></ul> <ul> <li> On the Wings of Eagles </li></ul> <ul> <li> Yonah's Cooking </li></ul> <ul> <li> The Ballad of the Twins </li></ul> <ul> <li> A Dog Astray </li></ul> <ul> <li> Fragile Delivery 2 </li></ul> <ul> <li> Yonah's Cooking  </li></ul> <ul> <li> Yonah's Gift </li></ul> <ul> <li> The Runaway Son  </li></ul> <ul> <li> Fragile Delivery 3 </li></ul> </div> <div id='div3'> <div id='divimage'> </div> </div> </div>";

    const img = document.createElement("img");
    img.src = "images/village.jpg";
    img.alt = "The player standing in front of the village fountain — the village being where most of these quests originate.";
    img.id = "village";

    img.addEventListener("mouseover", showCaption3);
    img.addEventListener("mouseout", noCaption3);
    img.addEventListener("click", enlargeImage3);

    document.getElementById("div3").appendChild(img);

    var headings = document.getElementsByClassName("heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontWeight = "normal";
    }

    var heading = document.getElementById("yourVillage").style.fontWeight = "bold";

}

function changeSection3() {
    var section3 = document.getElementById("div1");
    div1.outerHTML="<div class='chart' id='div1'> <div> <h2 id='seafront'> Seafront </h2> <ul> <li> The Postman's Request </li></ul> <ul> <li> The Fisherman's Gambit </li></ul> <ul> <li> The Fisherman's Gambit Part 2 </li></ul> <ul> <li> The Fisherman's Gambit Part 3 </li></ul> <ul> <li> The Fisherman's Gambit Part 4 </li></ul> <ul> <li> The Fisherman's Gambit Part 5 </li></ul> <ul> <li> The Lighthouse Lady's Wrath </li></ul> <ul> <li> The New Merchant in Town </li></ul> <ul> <li> Closure </li></ul> <ul> <li> The Pride of a Lover </li></ul> <ul> <li> Bon Appetit </li></ul> <ul> <li> Letter to a Lover </li></ul> <ul> <li> A Signature Dish </li></ul> </div> <div id='div4'> <div id='divimage2'>  </div> </div> </div>";

    const img = document.createElement("img");
    img.src = "images/fishing.jpg";
    img.alt = "The player ready to accept the fishing quest, one of the many tasks offerred at the town of Seafront.";
    img.id = "fishing";

    img.addEventListener("mouseover", showCaption4);
    img.addEventListener("mouseout", noCaption4);
    img.addEventListener("click", enlargeImage4);


    document.getElementById("div4").appendChild(img);

    var headings = document.getElementsByClassName("heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontWeight = "normal";
    }

    var heading = document.getElementById("seafront").style.fontWeight = "bold";

}

function changeSection4() {
    var section4 = document.getElementById("div1");
    div1.outerHTML="<div class='chart' id='div1'> <div> <h2 id='facade-region'> Facade </h2> <ul> <li> Item Unknown </li></ul> <ul> <li> The Littlest Hero </li></ul> <ul> <li> Apology from a Fool </li></ul> <ul> <li> The Missing Girl </li></ul> <ul> <li> The Tangled Message </li></ul> </div> <div id='div3'> <div id='divimage3'> </div> </div> </div>";

    const img = document.createElement("img");
    img.src = "images/facade.jpg";
    img.alt = "The player talks to a Facade guard to recieve one of the many quests from the desert city.";
    img.id = "facade";


    img.addEventListener("mouseover", showCaption5);
    img.addEventListener("mouseout", noCaption5);
    img.addEventListener("click", enlargeImage5);

    document.getElementById("div3").appendChild(img);

    var headings = document.getElementsByClassName("heading");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontWeight = "normal";
    }

    var heading = document.getElementById("facade-tag").style.fontWeight = "bold";

}
