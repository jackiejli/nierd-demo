
fetch("https://www.giantbomb.com/api/search/?api_key=505899e0807ace2f297637684f97b7d8245fc99d&&format=json&query=Devola&resources=character")
  .then(res => res.json())
  .then(data => {
    const guid = data.results[0].guid;
    console.log("GUID:", guid);
  });


//Assigns the URL to a constant. Note that the format=json is necessary to make this code work because we're going on the basis of returning in JSON
const url = "https://www.giantbomb.com/api/character/3005-14309/?api_key=1ba9861393e199daac5b12eca159cf18d838629b&format=json&field_list=deck"

let nierResults = [];



//Make an asynchronous function
async function getData(){
  try{
  //Adding await to make sure it's the object that's returned, not just the promise
  const response = await fetch(url);
  //TIP: it helps to add an await in front of the response portion as well
  const data = await response.json();

  console.log("Data from API:", data);
  nierResults = data.results;
  renderCharacters();

  } catch (error) {
    console.log("Error fetching data", error);
  }
}

function renderCharacters(){
    const container = document.getElementById("nier-deck");
    container.innerHTML = "";

    nierResults.forEach(character => {
        const div = document.createElement("div");
        div.textContent = nierResults;
        container.appendChild(div);
    }
    )
    
}


const url2 = "https://www.giantbomb.com/api/character/3005-14901/?api_key=505899e0807ace2f297637684f97b7d8245fc99d&format=json&field_list=deck"

//Make an asynchronous function
async function getData2(){
  try{
  //Adding await to make sure it's the object that's returned, not just the promise
  const response = await fetch(url2);
  //TIP: it helps to add an await in front of the response portion as well
  const data = await response.json();
  console.log("kaineDeck", data.results);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getData2()

const url3 = "https://www.giantbomb.com/api/character/3005-16027/?api_key=505899e0807ace2f297637684f97b7d8245fc99d&format=json&field_list=deck"

//Make an asynchronous function
async function getData3(){
  try{
  //Adding await to make sure it's the object that's returned, not just the promise
  const response = await fetch(url3);
  //TIP: it helps to add an await in front of the response portion as well
  const data = await response.json();
  console.log("emilDeck", data.results);
  } catch (error){
    console.log("Error fetching data", error);
  }
}

getData3()

const url4 = "https://www.giantbomb.com/api/character/3005-16033/?api_key=505899e0807ace2f297637684f97b7d8245fc99d&format=json&field_list=deck"

//Make an asynchronous function
async function getData4(){
  try{
  //Adding await to make sure it's the object that's returned, not just the promise
  const response = await fetch(url4);
  //TIP: it helps to add an await in front of the response portion as well
  const data = await response.json();
  console.log("popolaDeck", data.results)
  } catch (error)
{
  console.error("Error fetching data", error)
}}

getData4()

const url5 = "https://www.giantbomb.com/api/character/3005-16037/?api_key=505899e0807ace2f297637684f97b7d8245fc99d&format=json&field_list=deck"

//Make an asynchronous function
async function getData5(){
  try{
  //Adding await to make sure it's the object that's returned, not just the promise
  const response = await fetch(url5)
  //TIP: it helps to add an await in front of the response portion as well
  const data = await response.json()
  console.log("devolaDeck", data.results)
    
  } catch (error){
    console.error("Error fetching data", error)
  }
}

getData5()
    


