

const cardContainer = document.querySelector('.card-container');
const addBtn = document.querySelector('.add');



let cards = [];

addBtn.addEventListener('click', () => {
    cards.push(getRandomCard());
    cardRender()
});


function cardRender() {
    let result = '';
    for(let i  = 0; i < cards.length; i++){
        result += `<div class="omg">                 
                 <div class="card"></div>                                                                     
                 <img class=" picture"  src = https://random.imagecdn.app/500/500 alt="">           
                 <p class="vertycal text1">Card Name</p>               
                 <p class="vertycal text2">card description</p>                                                
                 <div class="removeCard">              
                 <button class="remove" onclick="deleteCard(${cards[i].id})"><img class="trash" src="image_2022-11-08_18-56-46.png"></button>                 
                 </div>
                 </div>`;
    }
    cardContainer.innerHTML = result;
}
cardRender();

function getRandomId(){
    return Math.floor(Math.random() * 1000);
}

function getRandomCard() {
    let name = 'Card Name';
    let description = 'card description';
    return{
        text1: name,
        text2: description,
        id: getRandomId(),
    }

}



function deleteCard(cardsId){
    cards = cards.filter(el => el.id !== cardsId);
    cardRender();
}