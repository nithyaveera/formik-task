import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/dashboard.css'

const Deshbord = ({ setid }) => {
    let [data, setdata] = useState([])
    let [dummy, setdummy] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        fetchdata()
    }, [dummy])
    let fetchdata = async () => {
        await axios.get('https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees')
            .then(res => setdata(res.data))
            .catch(err => console.log(err))
    }
    let handleEdit = (id) => {
        setid(id)
        navigate(`/edit/:${id}`)
    }
    let handleRemove = async (id) => {
        if (confirm('If you want to delete click Ok!')) {
            await axios.delete(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`)
                .then(res => setdummy(res.data))
                .catch((err) => console.log(err))
        }
    }
    return (
        <div >
            <div className='row dash'>
                <div className='col-12 p-3'>
                    <h3>DashBoard</h3>
                </div>
            </div>
            {data.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <div className="card mb-3  p-4" style={{ maxWidth: '80vw' }} >
                                <h3 className="card-title title">Title : "{item.title}"</h3>
                                <div className="row g-0 p-3">
                                    <div className="col-md-6 ">
                                        <h4 className="card-text head"><span>Books Details</span></h4>
                                        <h5 className="card-text">Author : {item.author}</h5>
                                        <h6 className='card-text'>ISBN Number : {item.number}</h6>
                                        <h6 className='card-text'>Publication Date : {item.publication}</h6>
                                    </div>
                                    <div className="col-md-6 " >
                                        <h4 className="card-text head"><span>Author Details</span></h4>
                                        <h5 className="card-title">Author Name :{item.name}</h5>
                                        <h6 className="card-text">Birth Date: {item.birthdate}</h6>
                                        <h6 className="card-text">Biography :{item.biography}</h6>

                                        <div className='row'>
                                            <div className='col mt-4'>
                                                <button
                                                    style={{ marginRight: '5%' }}
                                                    onClick={() => { handleEdit(item.id) }}
                                                    className="btn btn-outline-success shadow "
                                                    type="button">
                                                    Edit
                                                </button>
                                                <button className='btn btn-outline-danger shadow' onClick={() => { handleRemove(item.id) }}>Romove</button>

                                            </div>
                                        </div>
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

export default Deshbord;