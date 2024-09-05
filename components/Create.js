import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {

    //https://66b5d27eb5ae2d11eb64d1b9.mockapi.io/crud

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    //to nevigate use useNevigate

    const nevigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://66b5d27eb5ae2d11eb64d1b9.mockapi.io/crud", {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(response => {
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
                        Create
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Name</label>
                            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age</label>
                            <input type='number' onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email</label>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='submit' className='btn btn-primary' />
                        </div>
                    </form>
                    <hr />
                    <h6 style={{ backgroundColor: 'lightgrey', color: 'grey' }}>
                        Name: {name} <br />
                        Age:{age} <br />
                        Email:{email}
                    </h6>
                </div>
            </div>
        </>

    )
}

export default Create


//data store in it e.target.value