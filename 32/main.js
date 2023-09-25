const shopItems = [
  {
    name: "Product 1",
    price: 19.99,
    description= "lorem ipsum"
  }
  {
    name: "Product 2",
    price: 19.99,
    description= "lorem ipsum"
  }
  {
    name: "Product 3",
    price: 19.99,
    description= "lorem ipsum"
  }
]


function renderShopItems(shopItems){
  const shoppingList = document.getElementById("shopping-list")

  shopItems.foreach(shopItem)=>{
    const listItems = document.createElement("li")
    listItems.classList.add("shop-Item")

    listItems.innerHTML ='
    <h2>${shopItems.name}</h2>
    <p>Price: ${shopItems.price}</p>
    <p></p>'
  }
}