import React, { useState } from 'react'

function Navbar(){
  const [links, setLinks] = useState(['blog', 'work', 'contact']);
  const [siteName, setName] = useState('Tiago Terra')

  return (
    <nav>
        <a id="nav-logo" href="/"><p>{siteName}</p></a>
        <ul>{links.map((i) => (
            <li className='group'>
              <figure className="group-hover:h-2 group-hover:bg-secondary"></figure>
              <a href={`/${i}`} className=" group-hover:text-green dark:group-hover:text-secondary">{i}</a>
            </li>
    ))}</ul>
    </nav>
  )
}


export default Navbar