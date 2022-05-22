//*********************************************************************************//
//********************************** Global Variables******************************//
//*********************************************************************************//
const removeButton = document.querySelectorAll('.btn-danger')
const cartTotal = document.getElementById('totalPrice')
const quantity = document.querySelectorAll('.cart-quantity-input')
const cartItems = document.getElementById('cartDiv')
const addToCartButton = document.querySelectorAll('.shop-item-button')
const purchase = document.getElementById('purchase')





//function for adding cart in cart Section
addToCartButton.forEach(v=>{
    v.addEventListener('click',(e)=>{
        const cartImages = e.target.parentElement.previousElementSibling.src
       const cartPrice =  parseInt(e.target.parentElement.firstElementChild.innerText.replace('$',''))
       const cartTitle = e.target.parentElement.parentElement.firstElementChild.innerText
       const cartPreviousPrice = parseInt(cartTotal.innerText.replace('$',''))
       cartItems.innerHTML += `
       <div class="cart-row">
       <div class="cart-item cart-column">
           <img class="cart-item-image" src="${cartImages}" width="100" height="100">
           <span class="cart-item-title">${cartTitle}</span>
       </div>
       <span class="cart-price cart-column">$${cartPrice}</span>
       <div class="cart-quantity cart-column">
           <input class="cart-quantity-input" onchange="changeValueOfQuantity(this)" type="number" value="1">
           <button class="btn btn-danger" onclick="removeButtonElement(this)" type="button">REMOVE</button>
       </div>
   </div>
       `
     cartTotal.innerHTML = `$${cartPreviousPrice + cartPrice}`
       
    })
})





//Event listner for update total when user increase his data by input feild value
function changeValueOfQuantity (e){
console.log(e.value)
 const changedPriceQuantity = parseInt(e.value)
        const totalPrice =   parseFloat(e.parentElement.previousElementSibling.innerText.substring(1))
        const previousTotal = parseFloat(cartTotal.innerHTML.replace('$',''))
           cartTotal.innerHTML = `${(previousTotal+totalPrice)}`
}

function removeButtonElement(e){
e.parentElement.parentElement.remove()
 var totalPrice = parseFloat(e.parentElement.previousElementSibling.innerText.substring(1))
  var quantityOfCurrentElement = parseInt(e.parentElement.firstElementChild.value)
  var totalAmount=e.parentElement.previousElementSibling.innerText.replace('$','')
var updatedPrice =parseInt(cartTotal.innerText.replace('$',''))- (totalPrice*quantityOfCurrentElement)
cartTotal.innerHTML = `${updatedPrice}`

}




purchase.addEventListener('click',()=>{
    alert('Thank You bro')
})