let panierQuantity=document.getElementById('panier')
let totalArticles;
let monPanier;
//vérifier monPanier dans le localSorage
if(JSON.parse(localStorage.getItem('monPanier'))){
    monPanier=JSON.parse(localStorage.getItem('monPanier'))

} else {
    monPanier=[]
};

/* Vérifier le panier dans LocalStorage */
if(JSON.parse(localStorage.getItem('totalArticles'))){
    totalArticles=JSON.parse(localStorage.getItem('totalArticles'))
    panierQuantity.textContent=totalArticles;

} else {
    totalArticles=0;
    panierQuantity.textContent=0;
}

/* Récupération du produit sélectionné dans localStorage */
    let product=localStorage.getItem('product')
    product=JSON.parse(product)
   
/* Cibler les éléments html */
    let panier=document.getElementById('panier')
    let productCard=document.querySelector('.productCard')
    let productQuantity=document.getElementById('productQuantity')
    let articlePrice=document.getElementById('articlePrice')

/* Création de nouveaux éléments html */

    let productImage = document.createElement('img');
    let productName = document.createElement('p');
    let productPrice = document.createElement('p');
    let productNamePrice = document.createElement('div')
    let productDescription = document.createElement('p');
    
    productImage.setAttribute('src',product.productImage)
    productName.setAttribute('class','productName')
    productPrice.setAttribute('class','productPrice')
    productCard.appendChild(productNamePrice);
    productNamePrice.setAttribute('class', 'productNamePrice')
    productDescription.setAttribute('class','productDescription');


    productName.textContent=product.productName
    productPrice.textContent=product.productPrice + ' €'
    productDescription.textContent=product.productDescription
    
    productCard.appendChild(productImage)
    productCard.appendChild(productNamePrice)
    productNamePrice.appendChild(productName)
    productNamePrice.appendChild(productPrice)
    productCard.appendChild(productDescription)

/* Mise à jour quantité et prix des l'article*/
   
    articlePrice.textContent='Prix: '+ productQuantity.value * product.productPrice;
    productQuantity.addEventListener('input', ()=>{
    articlePrice.textContent='Prix: '+ productQuantity.value * product.productPrice;
    
    })
    
//ajout au panier
    let ajouterAuPanier=document.getElementById('ajouterAuPanier');
    ajouterAuPanier.addEventListener('click', ()=>{
        totalArticles+=eval(productQuantity.value);
        panierQuantity.textContent=totalArticles;
               
        localStorage.setItem('totalArticles',JSON.stringify(totalArticles));
        //remplir mon panier
        product.quantity=eval(productQuantity.value)
        product.totalProductPrice=productQuantity.value * product.productPrice

        monPanier.push(product)
        localStorage.setItem('monPanier',JSON.stringify(monPanier))
    })

//fin ajout au panier
//aller au panier

let allerAuPanier=document.getElementById('allerAuPanier')

//fin aller aun panier