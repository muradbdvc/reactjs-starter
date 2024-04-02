import React from 'react';

const users = [
    {
        fullName: "Shamim Ahmed",
        age: 35,
        phones : [
            { office: "09381457913"},
            { home: '834583'}
         ]
    },
    {
        fullName: "Shamim Ahmed",
        age: 35,
        phones : [
            { office: "09381457913"},
            { home: '834583'}
         ]
    },
    {
        fullName: "Shamim Ahmed",
        age: 35,
        phones : [
           { office: "09381457913"},
           { home: '834583'}
        ]
    },
    {
        fullName: "Shamim Ahmed",
        age: 35,
        phones : [
            { office: "09381457913"},
            { home: '834583'}
         ]
    }
];

function Maping() {
    return (
        <div >
            {users.map((user,index) => 
            <article key={index} className='m-6 p-5 bg-orange-100 W-16'> 

              <h1>Full Name : {user.fullName}</h1>  
              <h1>Age : {user.age}</h1> 

              {user.phones.map((phone, index) =>

                <div key={index}>
                    <p>Contact Office : {phone.office}</p>
                    <p>Contact Home : {phone.home}</p>                    
                </div>

              )} 

            </article>)}
        </div>
    );
}

export default Maping;