'use strict';
var root = document.querySelector(".root");
var makeElement = function (tagName, text){
    var element =  document.createElement(tagName);
    if(text){element.textContent = text;}
    return element;

}

var makeCard = function (card){

    var img = makeElement('img')
    img.src= card.img;
    img.style.width='100%'
    root.appendChild(img);

    var title = makeElement('p',card.title);
    root.appendChild(title);

    var  size = makeElement('p',  'размер ' + card.size);
    root.appendChild(size);


    let price = makeElement('p', card.price + 'р');
    root.appendChild(price);
    if(card.sold){
        price.style.color = 'red';
        price.innerHTML="В частной коллекции";
    }


};

var renderCard = function (gallery) {
    for (let i = 0; i < gallery.length; i++) {
        let cardItem = makeCard(gallery[i]);
    };

    root.appendChild(cardItem);
}
renderCard(cards);