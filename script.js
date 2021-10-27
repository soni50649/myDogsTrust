"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",picture:"/Images/",age:"1 Year Old"})
dogs.push({name:"Otto",Breed:"Chihuahua",picture:"",age:"10 Months Old"})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:"",age:"5 Years Old"})
dogs.push({name:"Tommy",Breed:"German Shepherd",picture:"",age:"2 Years Old"})
dogs.push({name:"Jonny",Breed:"Husky",picture:"",age:"5 Months Old"})
dogs.push({name:"Puppy",Breed:"Sausage Dog",picture:"",age:" 10 Years Old"})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    card.classList.add("card")
    document.getElementById.appendChild(card)
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name

    
    let dogBreed=document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML=dogs[i].Breed
    
    let dogPicture=document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src=dogs[i].picture
    dogPicture.classList.add("dogpicture")
    


    let adopt=document.classList.add("button")
    adopt.innerHTML="Adopt Now"
    card.appendChild(adopt)
    adopt.classList.add("adoptbutton")
}

