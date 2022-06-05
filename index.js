let products = [
    {
        productName: 'kim1',
        productImage: 'images/kim1.jpg',
        productPrice: 5,
        productDescription: 'Ce produit vous ai recommandé !'
    },

    {
        productName: 'kim2',
        productImage: 'images/kim2.jpg',
        productPrice: 20,
        productDescription: 'kim2'
    },

    {
        productName: 'kim3',
        productImage: 'images/kim3.jpg',
        productPrice: 10,
        productDescription: 'kim2'
    },

    {
        productName: 'kim4',
        productImage: 'images/kim4.jpg',
        productPrice: 50,
        productDescription: 'kim5'
    },

    {
        productName: 'kim5',
        productImage: 'images/kim5.jpg',
        productPrice: 15,
        productDescription: 'kim5'
    },

    {
        productName: 'kim6',
        productImage: 'images/kim6.jpg',
        productPrice: 5,
        productDescription: 'kim6'
    },

    {
        productName: 'kim7',
        productImage: 'images/kim7.jpg',
        productPrice: 20,
        productDescription: 'kim7'
    },

    {
        productName: 'kim8',
        productImage: 'images/kim8.jpg',
        productPrice: 10,
        productDescription: 'kim8'
    },

    {
        productName: 'kim9',
        productImage: 'images/kim9.jpg',
        productPrice: 50,
        productDescription: 'kim9'
    },

    {
        productName: 'kim10',
        productImage: 'images/kim10.jpg',
        productPrice: 30,
        productDescription: 'kim10'
    }
]

let divProducts = document.getElementById('divProducts')


//inssérer les produits du tableau dans le html

for (let i=0;
    i<products.length;
    i++
) {
    //création des éléments
    let productCard = document.createElement('div');
    let productImage = document.createElement('img');
    let productNamePrice=document.createElement('div')
    let productName = document.createElement('p');
    let productPrice = document.createElement('p');
    let productDescription = document.createElement('p');
    
    divProducts.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.setAttribute('class', 'productCard')
    productImage.setAttribute(`src`,`${products[i].productImage}`);
    productCard.appendChild(productNamePrice);
    productNamePrice.setAttribute('class', 'productNamePrice')
    productNamePrice.appendChild(productName);
    productName.innerText=products[i].productName;
    productNamePrice.appendChild(productPrice);
    productPrice.innerText=products[i].productPrice+" €";
    productCard.appendChild(productDescription);
    productDescription.innerText=products[i].productDescription;
    productDescription.setAttribute('class','productDescription')
}  








