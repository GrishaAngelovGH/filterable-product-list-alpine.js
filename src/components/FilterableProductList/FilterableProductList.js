import React from 'jsx-dom'

import Header from 'components/Header'
import Input from 'components/Input'

const FilterableProductList = () => {

  return (
    <div class='row g-0 bg-white rounded p-3 shadow' x-data='{criteria: ""}'>
      <div className='col-md-12'>
        <Header />
        <Input />
      </div>
    </div>
  )
}

export default FilterableProductList