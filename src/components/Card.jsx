import React from 'react';

const todoTitle = "Test Title";
const todoDesc = "This is test desc.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();
const currentDate = dateName + '/'+ monthName + '/'+ currentYear;
// currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

function Card(props) {
    const{todoTitle,todoDesc} = props;
    return (
        <div className='card bg-yellow-200 text-center text-black w-2/12 rounded-lg p-2 m-5'>
            <h1 className='font-bold'>{todoTitle}</h1>
            <h1 className='font-medium'>{todoDesc}</h1>
            <h1 className='font-semibold'>{currentDate}</h1>

            <div className="heart">
                test
            </div>
        </div>
    );
}

export default Card;