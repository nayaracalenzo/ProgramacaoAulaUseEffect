import React, { useState, useEffect } from "react";


function RepositoriosGithub () {

const [repos, setRepos] = useState([])
    useEffect(() => {
    const fetchRepos = async (user) => {
      const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=10`)
      const data = await repos.json()
      setRepos(data)
    }

    fetchRepos('nayaracalenzo')
  }, [])

return (
    <>
    <div className="App">
      <h1>Repos github</h1>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <p>{repo.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
    </>
)   
}

export default RepositoriosGithub
