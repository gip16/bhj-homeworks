const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

for (let product of products) {
  const productValue = product.querySelector('.product__quantity-value');
  const productMinus = product.querySelector('.product__quantity-control_dec');
  const productPlus = product.querySelector('.product__quantity-control_inc');
  const productAdd = product.querySelector('.product__add');

  productMinus.addEventListener('click', () => {
    if (+productValue.textContent === 1) {
      return;
    }
     productValue.textContent = +productValue.textContent - 1;
  });

  productPlus.addEventListener('click', () => {
    productValue.textContent = +productValue.textContent + 1;
  });

  productAdd.addEventListener('click', (e) => {
    const dataId = e.currentTarget.closest('.product').dataset.id;
    const imageSrc = e.currentTarget.closest('.product').children[1].src;

    if (cartProducts.querySelector(`div[data-id='${dataId}']`)) {
      const cartCount = cartProducts.querySelector('.cart__product-count');
      cartCount.textContent = Number(cartCount.textContent) + Number(productValue.textContent);
    } else {
      cartProducts.insertAdjacentHTML('afterbegin', `
        <div class="cart__product" data-id="${dataId}">
          <img class="cart__product-image" src="${imageSrc}">
          <div class="cart__product-count">${productValue.textContent}</div>
        </div>
      `)
    }
    productValue.textContent = 1;
  })
}