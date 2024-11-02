let menuGrid = document.getElementById('menuGrid');
function generateMenu(){
  let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
  
  menuGrid.innerHTML = "";
  
    foodItems.forEach(item=>{
    let itemDiv = document.createElement("div");
    itemDiv.classList.add('menu-item');
    itemDiv.innerHTML = `
      <h3>${item.name} BDT</h3>
      <h5>${item.price} BDT</h5>
    `
  menuGrid.appendChild(itemDiv)
  })
}
generateMenu();