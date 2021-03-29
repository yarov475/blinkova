// var cards;
// cards = [
//     {
//         img: "./picturesAnjalla/JPG/1.jpg",
//         title: 'розы',
//         size:'20/15',
//         price: '500 000',
//         isAvailable: false,
//     },
//     {
//         img: "./picturesAnjalla/JPG/2.jpg",
//         title: 'розы',
//         size:'20/15',
//         price: '500 000',
//     },
//     {
//         img: "./picturesAnjalla/JPG/3.jpg",
//         title: 'розы',
//         size:'20/15',
//         price: '500 000',
//     },
//     {
//         img: "./picturesAnjalla/JPG/4.jpg",
//         title: 'розы',
//         size:'20/15',
//         price: '500 000',
//     },
//     {
//         img: "./picturesAnjalla/JPG/5.jpg",
//         title: 'розы',
//         size:'20/15',
//         price: '500 000',
//     },
//
// ];
//
//
// var root = document.querySelector(".root");
// var makeElement = function (tagName, text){
//     var element =  document.createElement(tagName);
//     if(text){element.textContent = text;}
//     return element;
//
// }
//
// var makeCard = function (card){
//     var name = makeElement('p',card.name);
//     root.appendChild(name);
//
//     var  status = makeElement('p', card.status);
//     root.appendChild(status);
//
//     var img = makeElement('img')
//     img.src= card.img;
//     img.style.width='100px'
//     root.appendChild(img);
//
//
//     if(card.isGood){
//         name.style.color = 'red';
//
//     };
//
// };
//
// for(var i = 0; i< cards.length; i++) {
//     var cardItem = makeCard(cards[i]);
//
// }
// root.appendChild(cardItem);
