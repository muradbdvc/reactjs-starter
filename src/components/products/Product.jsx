/* eslint-disable react/prop-type */
import React from 'react';
import TodoHome from '../Todoapp/TodoHome';
import Countries from '../Countries/Countries';

function Product(props) {
    return (
        <>
            <div className='max-w-screen-sm center mx-auto'>
                <TodoHome />
            </div>
                <Countries />
        </>
    )
}

export default Product;