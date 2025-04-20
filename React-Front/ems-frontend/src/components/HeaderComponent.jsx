import React from 'react'
// import { href } from 'react-router-dom'


const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
            <a class="navbar-brand" href="/employees">Home</a>
            <a 
          href="https://www.wikipedia.org" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'blue' }}
        >
          Go to Wikipedia
        </a>
            <a class="navbar-brand" href="/pagination">Pagination</a>
           

            
            
           
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent