import axios from 'axios';
import React, { isValidElement, useEffect, useState } from 'react';

const Currentbook = () => {
    let [data, setdata] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])
    let fetchdata = async () => {
        await axios.get('https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees')
            .then(res => setdata(res.data))
            .catch(err => console.log(err))
    }
    let val = data.filter((item, index) => index == data.length - 1)
    return (
        <div style={{ height: '100vh' }}>
            <h1>My Current Book</h1>
            {val.map((item, index) => {
                return (
                    <>
                        <div key={index} style={{ height: '89vh' }}>
                            <div className="card mb-3 mt-3 p-4" style={{ maxWidth: '80vw' }} >
                                <h3 className="card-header title">Title : "{item.title}"</h3>
                                <div className="row g-0 p-3">
                                    <div className="col-md-6">
                                        <h4 className="card-text head">Books Details</h4>
                                        <h6 className="card-text">Author : {item.author}</h6>
                                        <h6 className='card-text'>ISBN Number : {item.number}</h6>
                                        <h6 className='card-text'>Publication Date : {item.publication}</h6>
                                    </div>
                                    <div className="col-md-6 " >
                                        <h4 className="card-text head">Author Details</h4>
                                        <h5 className="card-title">Author Name :{item.name}</h5>
                                        <h6 className="card-text">Birth Date: {item.birthdate}</h6>
                                        <h6 className="card-text">Biography :{item.biography}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    );
};

export default Currentbook;