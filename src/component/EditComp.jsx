import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

const EditComp = ({ id }) => {
    let navigate = useNavigate()
    let [data, setdata] = useState({
        title: '',
        author: '',
        publication: '',
        number: '',
        name: '',
        birthdate: '',
        biography: ''
    })

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        await axios.get(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`)
            .then(res => setdata(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        formik.setValues(data)
    }, [data])

    const validaionschema = Yup.object().shape({
        title: Yup.string().required('Please Enter Title'),
        author: Yup.string().required('Please Enter Author'),
        publication: Yup.string().required('please Enter Publication date'),
        number: Yup.string().required('Please Enter ISBN Number'),
        name: Yup.string().required('please Enter Author Name'),
        birthdate: Yup.string().required('please Enter Birthdate'),
        biography: Yup.string().required('please Enter Biography')
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            publication: '',
            number: '',
            name: '',
            birthdate: '',
            biography: ''
        },
        validationSchema: validaionschema,
        onSubmit: async (values) => {
            await axios.put(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`, values)
            window.alert('Update Success')
            navigate('/')
        }

    })
    let handlecancel = async () => {
        navigate('/')
    }

    return (
        <div>
            <div className='container mt-4' >
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <form className='row box border p-4' onSubmit={formik.handleSubmit}>
                            <h2>Fill Books Details</h2>
                            <div className='p-3'>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" name='title' value={formik.values.title} placeholder='Enter Title' onChange={formik.handleChange} />                     </div>
                                    <div className='text-danger'>{formik.errors.title}</div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Author</label>
                                        <input type="text" className="form-control" name='author' value={formik.values.author} id="inputEmail4" onChange={formik.handleChange} placeholder='Enter Author' />
                                        <div className='text-danger'>{formik.errors.author}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">ISBN Number</label>
                                        <input type="text" className="form-control" name='number' value={formik.values.number} id="inputAddress" onChange={formik.handleChange} placeholder="Enter ISBN Number" />
                                        <div className='text-danger'>{formik.errors.number}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Publication Date:</label>
                                        <input type="Date" className="form-control" name='publication' value={formik.values.publication} onChange={formik.handleChange} />
                                        <div className='text-danger'>{formik.errors.publication}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Author Name</label>
                                        <input type="text" className="form-control" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder='Enter Author Name' />
                                        <div className='text-danger'>{formik.errors.name}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Birth Date</label>
                                        <input type="date" className="form-control" name='birthdate' value={formik.values.birthdate} onChange={formik.handleChange} placeholder='Enter Birth Date' />
                                        <div className='text-danger'>{formik.errors.birthdate}</div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-12">
                                            <label className="form-label">Biography</label>
                                            <input type="text" className="form-control" name='biography' value={formik.values.biography} onChange={formik.handleChange} placeholder='Enter Short Biography' />
                                            <div className='text-danger'>{formik.errors.biography}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-3 pt-3">
                                        <button type="submit" className="btn color">Update</button>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <button type="button" onClick={handlecancel} className="btn color">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditComp;