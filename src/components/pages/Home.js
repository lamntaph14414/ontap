import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3500/users")
    setUsers(result.data)
  };
  
  const onHandlDelete = async id => {
    if (window.confirm('Do you want to remove?')) {
      fetch(`http://localhost:3500/users/${id}`, {
          method: "DELETE"
      }).then((res) => {
          alert('Removed successfully.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
  }
  
  return (
    <div className='container'>
     <Layout/>
      <div className='py-4'>
        <h1>Home Page</h1>
        <Link className='btn btn-danger w-10' to="/user/add">Add</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className='btn btn-primary m-2' to={`/user/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                  <Link className='btn btn-primary m-2' to={`user/edit/${user.id}`}>Edit</Link>
                  <Link className='btn btn-danger m-2' onClick={() => {onHandlDelete(user.id)}}>Delete</Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home