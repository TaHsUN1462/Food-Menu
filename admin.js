let menuGrid = document.getElementById('menuGrid');
let foodForm = document.getElementById("foodForm");
let foodNameInput = document.getElementById("foodNameInput")
let foodPriceInput = document.getElementById("foodPriceInput")
foodForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  
  let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
  
  const name = foodNameInput.value.trim();
  const price = foodPriceInput.value.trim();
  
  
  if (name && price) {
  
  
  
  foodItems.push({ name, price });
  
  
  localStorage.setItem('foodItems', JSON.stringify(foodItems))
  
  foodNameInput.value = "";
  foodPriceInput.value = "";
  alert("Item Added Succesfully")
  generateMenu()
  }
});


function generateMenu(){
  let foods = JSON.parse(localStorage.getItem('foodItems')) || [];
  
  menuGrid.innerHTML = "";
  
  foods.forEach((item, index)=>{
    let itemDiv = document.createElement("div");
    itemDiv.classList.add('menu-item');
    itemDiv.innerHTML = `        <h3>${item.name} BDT</h3>
      <h5>${item.price} BDT</h3>
      <button onclick="removeFood(${index})">Remove</button>

    `
  menuGrid.appendChild(itemDiv)
  })
}
generateMenu();


function removeFood(index){
  let foods = JSON.parse(localStorage.getItem('foodItems')) || [];
  foods.splice(index, 1);
  
  localStorage.setItem('foodItems', JSON.stringify(foods))
  generateMenu();
}