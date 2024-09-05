import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState(0);
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState(0);

    const nevigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://66b5d27eb5ae2d11eb64d1b9.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email,
        }).then(() => {
            nevigate('/')
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4  mt-4' >
                    <div className='mb-2' style={{ marginTop: '50px' }}>
                        <Link to={'/'}>
                            <button type="button" class="btn btn-secondary">Read New Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center' >
                        Update
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter Name</label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age</label>
                            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='update' className='btn btn-primary' />
                        </div>
                    </form>
                    <hr />

                </div>
            </div>
        </>
    )
}

export default Edit
