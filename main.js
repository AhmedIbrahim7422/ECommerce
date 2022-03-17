//cart

let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
let removeBtn = document.querySelector('#cart-remove')


cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


//remove button functions

function removeButton(){
    var removeDiv = document.querySelector('.remove')
    removeDiv.parentElement.remove();
}

// add Item to Cart
function addCart(id){
    var parent  = document.getElementsByClassName('product-box')[id]
    children = parent.children;
   var cartContent = document.querySelector('.cart-content')
  var node = cartContent.firstElementChild
    var clone = node.cloneNode(true)
    
    cartContent.appendChild(clone)

   node.classList.remove("none");
   let x =  document.querySelector('.none')
  
    document.querySelector('.cart-product-name').innerHTML = children[1].innerText
    document.querySelector('.cart-price').innerHTML = children[2].innerText
    document.querySelector('.cart-img').src = `img/product${(parseInt(id)+1)}.jpg`

    if (x === null){}
    else{
        x.remove()
    }
    totle()
}

// totle
var totlePrice = 0

function totle(){
   
    let cartPrice = document.querySelectorAll('.cart-price')
    for (i = 0; i < cartPrice.length; i++){
        let price = document.querySelectorAll('.cart-price')[i].innerHTML
        let item = price.split(" ")
        let num = parseInt(item[0])
        var quantity = document.querySelectorAll(".quantity")[i].value
        
        if (i == 0){
            totlePrice = num * quantity
            document.querySelector('.totle-price').innerHTML = `${totlePrice} $`
            console.log(totlePrice)
        }else{
            totlePrice = totlePrice + num * quantity
            document.querySelector('.totle-price').innerHTML = `${totlePrice} $`
            console.log(totlePrice)
        }
    
    }   
}

