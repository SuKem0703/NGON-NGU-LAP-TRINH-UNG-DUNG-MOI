// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (6 sản phẩm, 2 danh mục)
const products = [
    new Product("P01", "iPhone 15 Pro", 28000000, 10, "Smartphone", true),
    new Product("P02", "MacBook Air M2", 32000000, 5, "Laptop", true),
    new Product("P03", "AirPods Pro 2", 5500000, 0, "Accessories", true),
    new Product("P04", "Ốp lưng Magsafe", 1200000, 20, "Accessories", true),
    new Product("P05", "Samsung S24 Ultra", 31000000, 8, "Smartphone", true),
    new Product("P06", "Chuột Magic Mouse", 2000000, 15, "Accessories", false)
];

// Câu 3: Tạo mảng mới chỉ chứa name và price
const productSummaries = products.map(p => ({ name: p.name, price: p.price }));

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);

// Câu 6: Kiểm tra tất cả sản phẩm thuộc "Accessories" có đang được bán (isAvailable = true) không
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

// Câu 7: Tính tổng giá trị kho hàng (Price * Quantity)
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);

// Câu 8: Dùng for...of duyệt mảng và in ra: Tên - Danh mục - Trạng thái
console.log("--- Danh sách sản phẩm (for...of) ---");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra thuộc tính và giá trị của sản phẩm đầu tiên
console.log("\n--- Chi tiết sản phẩm đầu tiên (for...in) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const sellingInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

// --- In kết quả kiểm tra ---
console.log("\n--- Kết quả kiểm tra ---");
console.log("Sản phẩm giá > 30tr:", hasExpensiveProduct);
console.log("Tất cả Accessories đang bán:", allAccessoriesAvailable);
console.log("Tổng giá trị kho:", totalInventoryValue.toLocaleString(), "VNĐ");
console.log("Sản phẩm đang bán & còn hàng:", sellingInStockNames);