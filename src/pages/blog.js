import React, { useState} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Paginator from '../components/paginator'


function Blog(){

  const [pageDescription, setDescription] = useState('Articles, tutorials, snippets, rants, and everything else')
  const [cards, setCards] = useState([
    {'title': 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies', 'category': 'tech', 'date': 'July 19, 2020', 'read': '5 min read'},
    {'title': 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies', 'category': 'tech', 'date': 'July 19, 2020', 'read': '5 min read'},
    {'title': 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies', 'category': 'tech', 'date': 'July 19, 2020', 'read': '5 min read'},
    {'title': 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies', 'category': 'tech', 'date': 'July 19, 2020', 'read': '5 min read'},
    {'title': 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies', 'category': 'tech', 'date': 'July 19, 2020', 'read': '5 min read'}
  ])


return (
    <main>
      <div>
        <Navbar/>
        <div className="container mx-auto">
          <div className='section-header'><span><iconify-icon  icon="mdi:blog-outline"></iconify-icon></span><h1>Blog</h1></div>
          <p className="pt-4 font-body text-xl font-light text-primary dark:text-white">{pageDescription}</p>
          
          <div className="pt-8 lg:pt-12">
              {cards.map((i) => (
              <div className="post">
                <a href='/post'><img src='https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE' /></a>
                <a href='/blog' className="post-category">{i.category}</a>
                <a href="/post" className="post-title">{i.title}</a>
                <div className="post-subcontent">
                  <p>{i.date}</p>
                  <span>|</span>
                  <p>{i.read}</p>
                </div>
            </div>
            ))}
          </div>
          <Paginator/>
        </div>
      </div>
      <Footer/>
    </main>
)

}



export default Blog