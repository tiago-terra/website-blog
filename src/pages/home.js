import React, { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import arrowRight from '../assets/img/long-arrow-right.png'
import shortRight from '../assets/img/chevron-right.png'
import authorIcon from '../assets/img/author.png'

 
function Home() {
  const [siteName, setName] = useState('Tiago Terra')
  const [projects, setProjects] = useState([
    {'name': 'TiagoCMS', 'description': 'Rapidly build modern websites without ever leaving your HTML'},
    {'name': 'Alpine.js', 'description': 'Rapidly build modern websites without ever leaving your HTML'},
    {'name': 'NextJs', 'description': 'Rapidly build modern websites without ever leaving your HTML'},
    {'name': 'TailwindCSS', 'description': 'Rapidly build modern websites without ever leaving your HTML'}
  ])

  const [posts, setPosts] = useState([
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
        <div className="home-header">

            <img src={authorIcon}  alt="author"/>
            <div>
              <h1 className="">Hi, I’m {siteName}.</h1>
              <p className="">A software engineer and open-source advocate enjoying the sunny life.</p>
              <a href="/contact" >Say Hello!</a>
            </div>
          </div>
          <div className="home-section">
              <div className="flex items-center pb-6 gap-1 text-4xl text-secondary">
                  <iconify-icon icon="material-symbols:book-outline-rounded"></iconify-icon>
                  <h3 className="font-body text-2xl font-semibold text-primary dark:text-white">My Story</h3>
              </div>
              <div className=' mx-auto'>
                  <p className="font-body font-light text-primary dark:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing at in tellus
                      integer feugiat.
                      <br />
                      <br /> Maecenas accumsan lacus vel facilisis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Non tellus orci ac auctor augue mauris augue neque gravida. Auctor augue mauris augue neque gravida in fermentum
                      et sollicitudin. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Amet mauris commodo quis imperdiet massa. Integer vitae justo eget magna fermentum iaculis eu non.
                  </p>
              </div>
          </div>

          <div className="flex w-full  py-4 justify-between max-w-md mx-auto text-secondary">
              <div className='flex gap-1 text-4xl'>
                <iconify-icon icon="mdi:blog"></iconify-icon>

                <h3 className="self-center font-body text-2xl font-semibold text-primary dark:text-white">Blog Posts</h3>
              </div>
              <a href="/blog" className="flex items-center font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">All posts
                <img src={arrowRight} className="ml-3" alt="arrow right"/>
              </a>
          </div>
            <div className="home-section">
              {posts.map((i) => (
                <div className="post">
                  <a href='#' className="post-category">category</a>
                  <a href="/post" className="post-title">Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies</a>
                  <div className="flex pt-4">
                    <p className="pr-2 font-body font-light text-primary dark:text-white">July 19, 2020</p>
                    <span className="font-body text-grey dark:text-white">//</span>
                    <p className="pl-2 font-body font-light text-primary dark:text-white">4 min read</p>
                  </div>
              </div>))}
          </div>

          <div className="flex items-center py-4 max-w-md mx-auto text-secondary">
          <div className='flex gap-1 text-4xl'>

          <iconify-icon icon="carbon:portfolio"></iconify-icon>

            <h3 className="self-center font-body text-2xl font-semibold text-primary dark:text-white">Projects</h3>
            </div>
          </div>

          <div className='flex flex-col max-w-md mx-auto'>
            {projects.map((i) => (
              <a href="/" className="mb-6 flex items-center justify-between border border-grey-lighter py-4 ">
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">{i.name}</h4>
                  <p className="font-body font-light text-primary dark:text-white">{i.description}</p>
                </span>
                <span className="w-1/10"><img src={shortRight} className="mx-auto" alt="chevron right" /></span>
              </a>
            ))}
          </div>
  </div>

  <Footer/>



  </main>
  )
  

}


export default Home