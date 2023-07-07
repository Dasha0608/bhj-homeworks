const productQuantityControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');


productQuantityControl.forEach((control) => {
    control.addEventListener('click', () => {
        let product = control.closest('.product');
        let productQuantityValue = product.querySelector('.product__quantity-value');
        let value = productQuantityValue.textContent;

        if (control.classList.contains('product__quantity-control_inc')) {
            value++;
        } 
        else if (control.classList.contains('product__quantity-control_dec')) {
            value --;
            if (value < 1) {
                value = 1;
            }
        }
        productQuantityValue.textContent = value;
    })           
})

productAdd.forEach((button) => {
    button.addEventListener('click', () => {
        let product = button.closest('.product');
        let productQuantityValue = product.querySelector('.product__quantity-value');
        let productId = product.dataset.id;
        let img = product.querySelector('.product__image');
        let productImg = img.getAttribute('src');
        let value = Number(productQuantityValue.textContent);

        let cartProduct = null;
        let products = document.querySelectorAll('.cart__product')
        products.forEach((prod) => {
            if (prod.dataset.id == productId) {
                cartProduct = prod;
            }
        })
        
        if (cartProduct) {
            let cartProductCount = cartProduct.querySelector('.cart__product-count');
            let cartProductValue = Number(cartProductCount.textContent);
            cartProductCount.textContent = cartProductValue + value;
        } else {
            let cartProducts = document.querySelector('.cart__products');
            let newCartProduct = document.createElement('div');
            newCartProduct.className = 'cart__product';
            newCartProduct.dataset.id = productId;

            let newCartProductImg = document.createElement('img');
            newCartProductImg.classList.add('cart__product-image');
            newCartProductImg.src = productImg;
            newCartProduct.appendChild(newCartProductImg);

            let newCartProductCount = document.createElement('div');
            newCartProductCount.className = 'cart__product-count';
            newCartProductCount.textContent = value;
            newCartProduct.appendChild(newCartProductCount);

            cartProducts.appendChild(newCartProduct);

        }
    });
})
    