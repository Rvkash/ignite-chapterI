import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem.jsx"
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const repository = {
  name: 'unform',
  description: 'Forms in react',
  link: 'https://github.com/Rvkash'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
         return <RepositoryItem key={repository.name} repository={repository} />
        })}
      
      </ul>
    </section>
  )
}