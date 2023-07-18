import React from 'jsx-dom'

const Products = () => {
  Alpine.data('products', () => ({
    products: [{
      category: 'Sporting Goods',
      products: [
        { id: 1, title: 'Football', price: 49.99, inStock: true },
        { id: 2, title: 'Baseball', price: 9.99, inStock: true },
        { id: 3, title: 'Basketball', price: 29.99, inStock: false }
      ]
    },
    {
      category: 'Electronics',
      products: [
        { id: 4, title: 'IPod Touch', price: 99.99, inStock: true },
        { id: 5, title: 'IPhone 5', price: 399.99, inStock: false },
        { id: 6, title: 'Nexus 7', price: 199.99, inStock: true }
      ]
    }],
    formatPrice(product) {
      return `$${product.price}`
    }
  }))

  const productsTemplateProps = {
    'x-bind:key': 'index'
  }

  const productTemplateProps = {
    'x-bind:key': 'product.id'
  }

  const productClass = {
    'x-bind:class': "{ 'text-dark': product.inStock, 'text-danger': !product.inStock }"
  }

  return (
    <div class='row mt-3' x-data='products'>
      <div class='col-md-12'>
        <template x-for='(item, index) in products' {...productsTemplateProps}>
          <div class='row'>
            <div class='col-md-12'>
              <template x-if='item.products.filter(v => v.title.toLowerCase().includes(criteria.trim().toLowerCase())).length > 0'>
                <h3 x-text='item.category' class='bg-secondary text-white p-1 rounded'></h3>
              </template>

              <template x-for='product in item.products' {...productTemplateProps}>
                <template x-if="product.title.toLowerCase().includes(criteria.trim().toLowerCase())">
                  <div class='row fs-5' {...productClass}>
                    <div class='col-md-6' x-text='product.title'></div>
                    <div class='col-md-6' x-text='formatPrice(product)'></div>
                  </div>
                </template>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  )
}

export default Products