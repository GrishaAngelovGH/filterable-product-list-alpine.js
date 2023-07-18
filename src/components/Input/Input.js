import React from 'jsx-dom'

const Input = () => (
  <div class='row mt-3'>
    <div className='col-md-12'>
      <input type='text' class='form-control' placeholder='Search' x-model='criteria' />
    </div>
  </div>
)

export default Input