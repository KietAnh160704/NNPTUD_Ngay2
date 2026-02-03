// --- CÂU 1: Khai báo constructor function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

let products = [
    new Product(1, "Iphone 15 Pro", 32000000, 10, "Phone", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Phone", true),
    new Product(3, "Macbook Air M2", 28000000, 0, "Laptop", false), 
    new Product(4, "Dell XPS 13", 45000000, 2, "Laptop", true),
    new Product(5, "Logitech Mouse", 500000, 100, "Accessories", true),
    new Product(6, "Keyboard Keychron", 2000000, 15, "Accessories", true),
    new Product(7, "Airpods Pro", 5500000, 0, "Accessories", true) 
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);


const nameAndPrice = products.map(product => {
    return { name: product.name, price: product.price };
});
console.log("\n--- Câu 3 ---");
console.log(nameAndPrice);


const inStockProducts = products.filter(product => product.quantity > 0);
console.log("\n--- Câu 4 ---");
console.log(inStockProducts);


const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log("\n--- Câu 5 ---");
console.log(hasExpensiveProduct); 

const accessories = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("\n--- Câu 6 ---");
console.log(allAccessoriesAvailable); 

const totalStockValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("\n--- Câu 7 ---");

console.log(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalStockValue));


console.log("\n--- Câu 8 ---");
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

console.log("\n--- Câu 9 ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}


const activeProducts = products.filter(p => p.isAvailable === true && p.quantity > 0);

console.log("\n--- Câu 10  ---");
console.log(activeProducts);