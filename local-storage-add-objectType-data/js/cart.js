const getInputValueById = id =>{
     const inputField = document.getElementById(id);
     const inputValue = inputField.value;
     inputValue.value = '';
     return inputValue;
}

const addProduct = () =>{
     const product = getInputValueById('product-name-field');
     const quantity = getInputValueById('product-quantity-fild');

     //display product on uI
     displayProducts(product, quantity)

     //set to local storage
     //simple way
     // localStorage.setItem(product, quantity);
     saveItemToLocalStorage(product, quantity);
}

const getShoppingCartLocalStorage = () =>{
     let savedCart = localStorage.getItem('cart');
     let cart = {};
     if(savedCart){
          cart = JSON.parse(savedCart)
     }
     return cart; 
}

const saveItemToLocalStorage = (product, quantity) =>{
     const cart = getShoppingCartLocalStorage();
     //add product to the object Property
     cart[product] = quantity;

     const cartStingify = JSON.stringify(cart);
     //save to local storage
     localStorage.setItem('cart', cartStingify);
}


const displayProducts = (product, quantity) => {
     const productContainer = document.getElementById('product-container');
     const li = document.createElement('li');
     li.innerText = `${product} : ${quantity}`

     productContainer.appendChild(li);
}

const displayStoreProducts = () =>{
     const cart = getShoppingCartLocalStorage();
     for(const product in cart){
          const quantity = cart[product]
          displayProducts(product, quantity)
     }
}


displayStoreProducts()