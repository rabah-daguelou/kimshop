
let panierQuantity=document.getElementById('panier')
let totalArticles;
let commander=document.querySelector('.commander')

/* Récupérer le total d'rticle dans le panier */

if(JSON.parse(localStorage.getItem('totalArticles'))){
    totalArticles=JSON.parse(localStorage.getItem('totalArticles'))
    panierQuantity.textContent=totalArticles;

} else {
    totalArticles=0;
    panierQuantity.textContent=0;
}

/* Récupérer le panier dans LocalStorage */

let monPanier=JSON.parse(localStorage.getItem('monPanier'))

let monPanier2=monPanier;

/* Insérer les produits dans la page */

    let divProducts = document.getElementById('divProducts');

    for(let i=0; i<monPanier2.length; i++){

    let productCard=document.createElement('div')
    let productImage = document.createElement('img');
    let productNamePrice = document.createElement('div')
    let productName = document.createElement('p');
    let productPrice = document.createElement('p');
    
    let productTotalArticlesAndProductTotalPrice=document.createElement('div')
    let productTotalArticles=document.createElement('p');
    let productTotalPrice=document.createElement('p')
    
    divProducts.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.setAttribute('class', 'productCard')
    productImage.setAttribute(`src`, `${monPanier2[i].productImage}`);
    productCard.appendChild(productNamePrice);
    productNamePrice.setAttribute('class', 'productNamePrice')
    productNamePrice.appendChild(productName);
    productName.innerText = monPanier2[i].productName;
    productNamePrice.appendChild(productPrice);
    productPrice.innerText = monPanier2[i].productPrice + " €";
    
    productCard.appendChild(productTotalArticlesAndProductTotalPrice);
    productTotalArticlesAndProductTotalPrice.setAttribute('class', 'productNamePrice');
    productTotalArticlesAndProductTotalPrice.classList.add('productNamePrice1');
    productTotalArticlesAndProductTotalPrice.appendChild(productTotalArticles);
    productTotalArticles.textContent='Articles: ' + monPanier2[i].quantity;
    
    /* */

    let btnPlus=document.createElement('button')
    let btnMoins=document.createElement('button')
    btnMoins.innerHTML="-"
    btnPlus.innerHTML="+"

    btnMoins.setAttribute('class', 'moins');
    btnPlus.setAttribute('class', 'plus');
    
    productTotalArticlesAndProductTotalPrice.appendChild(btnMoins);
    productTotalArticlesAndProductTotalPrice.appendChild(btnPlus);

    productTotalArticlesAndProductTotalPrice.appendChild(productTotalPrice);
    productTotalPrice.textContent=' Prix: '+ monPanier2[i].totalProductPrice + ' €';

/* Ajouter un article*/
    btnPlus.addEventListener('click',function(){    
        
        monPanier2[i].quantity++;
        monPanier2[i].totalProductPrice+=monPanier2[i].productPrice;
        productTotalArticles.textContent='Articles: ' + monPanier2[i].quantity;
        productTotalPrice.textContent=' Prix: '+ monPanier2[i].totalProductPrice + ' €';
        totalArticles++;
        panierQuantity.textContent=totalArticles;
        localStorage.setItem('totalArticles', JSON.stringify(totalArticles))
    })

/* Supprimer un article*/
btnMoins.addEventListener('click',function(){    
        
    monPanier2[i].quantity--;
    monPanier2[i].totalProductPrice-=monPanier2[i].productPrice;
    totalArticles--;
    localStorage.setItem('totalArticles', JSON.stringify(totalArticles))
    
    panierQuantity.textContent=totalArticles;
    productTotalArticles.textContent='Articles: ' + monPanier2[i].quantity;
    productTotalPrice.textContent=' Prix: '+ monPanier2[i].totalProductPrice + ' €';
    
    if(monPanier2[i].quantity===0){
        productCard.remove()
        monPanier2.splice(i,1);   
    } 
    if(totalArticles===0){
        document.location.href='index.html';
        localStorage.clear()
    }    
})

}

/* Bouton commander */

commander.addEventListener('click', ()=>{
localStorage.setItem('monPanier', JSON.stringify(monPanier2));
document.location.href='commande.html'
})

















