import React from 'jsx-dom'

import Header from 'components/Header'
import Input from 'components/Input'
import Products from 'components/Products'

const FilterableProductList = () => {

  return (
    <div class='row g-0 bg-white rounded p-3 shadow' x-data='{criteria: ""}'>
      <div className='col-md-12'>
        <Header />
        <Input />
        <Products />
      </div>
    </div>
  )
}

export default FilterableProductList