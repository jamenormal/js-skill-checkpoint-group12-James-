// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200
inventory.orange = { price: 20, quantity: 300}

let totalInventory = 0
for(let i in inventory){
  totalInventory += inventory[i].quantity
}
console.log(`Total inventory value: ${totalInventory} baht`)