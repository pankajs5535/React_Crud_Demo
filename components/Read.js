import axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

function Read() {

    const [apiDate, setapiData] = useState([]);

    function getData() {
        axios.get("https://66b5d27eb5ae2d11eb64d1b9.mockapi.io/crud")
            .then((response) => {
                setapiData(response.data);
                // console.log(response.data)
            })
    }

    function setDataToStorage(id,name,age,email) { 
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
    }

    function handleDelete(id) {
        axios.delete(`https://66b5d27eb5ae2d11eb64d1b9.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    {/* <div className='mb-2 mt-50'> */}
                    <div className='mb-2' style={{ marginTop: '50px' }}>
                        <Link to={'/create'}>
                            <button type="button" class="btn btn-secondary">Create New Data</button>
                        </Link>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiDate.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <button onClick={() => { setDataToStorage(item.id, item.e_name, item.e_age, item.e_email) }} className="btn btn-warning btn-sm me-2">Edit</button>
                                                </Link>
                                            </td>
                                            {/* <td><button className="btn btn-danger btn-sm" onClick={()=>handleDelete(item.id)}>Delete</button></td> */}
                                            <td>
                                                <button onClick={() => { if (window.confirm('are you sure to Delete Data ??')) { handleDelete(item.id) } }} className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>


                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Read
