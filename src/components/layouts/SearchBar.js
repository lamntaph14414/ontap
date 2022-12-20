import axios from 'axios'
import React, { useState, useEffect } from 'react'


const SearchBar = () => {
    const [user, setUser] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        loadUser().then(json => {
          setUser(json)
          setSearchResults(json)
        })
      }, [])
      const loadUser = async () => {
        const result = await axios.get("http://localhost:3500/users")
        setUser(result.data)
      };
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults()

        const resultsArray = user.filter(user => user.title.includes(e.target.value) || user.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }
    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search"
                    onChange={handleSearchChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default SearchBar