class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://cdn.shopify.com/s/files/1/0307/1167/7063/products/gra-pillow-memory-foam-c.jpg?v=1594079027',
      19.99,
      'A soft pillow!'
    ),
    new Product(
      'A Carpet',
      'https://cdn.shopify.com/s/files/1/1033/0751/products/rogue-squadron-grey-B-RC-SW015-57.jpg?v=1596219366',
      89.99,
      'A carpet which you might like - or not.'
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imagUrl}" alt="${prod.title}" >
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
