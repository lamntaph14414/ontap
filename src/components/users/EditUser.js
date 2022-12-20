import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [user, setUser] = useState({
        name: "",
        username:"",
        email:"",
        phone:""
    });
    
    const {name, username, email, phone} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };
    
    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3500/users/${id}`, user);
        alert('Saved successfully.')
        navigate("/");
    }
    
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:3500/users/${id}`);
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input type="email" className='form-control form-control-lg'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Phone Number'
                            name='phone'
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-primary btn-block '>Edit User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser