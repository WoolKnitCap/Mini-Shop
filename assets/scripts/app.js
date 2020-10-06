class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imagUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart);
    return prodEl;
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
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
