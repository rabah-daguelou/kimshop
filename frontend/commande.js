let monPanier=JSON.parse(localStorage.getItem('monPanier'));
console.log('monPanier:', monPanier);

let panierQuantity=document.getElementById('panier')
let totalArticles;
/* Récupérer le total d'rticle dans le panier */

if(JSON.parse(localStorage.getItem('totalArticles'))){
    totalArticles=JSON.parse(localStorage.getItem('totalArticles'))
    panierQuantity.textContent=totalArticles;

} else {
    totalArticles=0;
    panierQuantity.textContent=0;
}

/* */

let total=0;
let tableau=document.querySelector('.tableau');

for(let i=0; i<monPanier.length; i++) {

    let ulLine=document.createElement('ul');
    ulLine.setAttribute('class', 'ulLine');

    tableau.appendChild(ulLine)

    let li1=document.createElement('li');
    li1.setAttribute('class', 'li1')

    let li2=document.createElement('li');
    li2.setAttribute('class', 'li2')
    let image=document.createElement('img');
    image.setAttribute('src', `${monPanier[i].productImage}`)
    li2.appendChild(image);

    let li3=document.createElement('li');
    li3.setAttribute('class', 'li3')

    let li4=document.createElement('li');
    li3.setAttribute('class', 'li4')

    let li5=document.createElement('li');
    li3.setAttribute('class', 'li5')

    ulLine.appendChild(li1);
    ulLine.appendChild(li2);
    ulLine.appendChild(li3);
    ulLine.appendChild(li4);
    ulLine.appendChild(li5);

    li1.textContent=monPanier[i].productName;
    li3.textContent=monPanier[i].productPrice + ' €';
    li4.textContent=monPanier[i].quantity;
    li5.textContent=monPanier[i].totalProductPrice + ' €';
    
    total=total+monPanier[i].totalProductPrice;
}
let totalPrice=document.querySelector('.totalPrice');
console.log(totalPrice)
console.log( 'total=', total)
totalPrice.textContent=`Total à payer: ${total} € `