module.exports = class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    this.getItems().push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
    return this.getItems();
  }
  clear() {
    this.items = [];
    return this.items;
  }
  total() {
    const total = this.items
      .map(item => item.pricePerUnit * item.quantity)
      .reduce((acc, pricePerItem) => acc + pricePerItem, 0);
    return total;
  }
};
