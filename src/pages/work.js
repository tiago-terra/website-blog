import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Work(){

  const description = 'Here are some of my works, ranching from Tech projects to Music demos'

  return (

    <main>
      <div>
        <Navbar/>
        <div className="container">
          <div className="page-header">
            <div className='section-header'><span><iconify-icon  icon="tabler:tool"></iconify-icon></span><h1>Work</h1></div>
             <span className="font-body text-xl font-light text-primary dark:text-white">{description}</span>
          </div>


          <h3 className="py-4 font-body text-2xl font-semibold text-primary dark:text-white">Music</h3>
          <ul className="list-disc pl-10">
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
          </ul>

          <h3 className="py-4 font-body text-2xl font-semibold text-primary dark:text-white">Tech</h3>
          <ul className="list-disc pl-10">
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
            <li className="font-body text-lg font-light text-primary dark:text-white">
              <span className="font-medium">Computer:</span>I use a 2019 16"
              <a href="/" className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook Pro</a>(i9/32GB/512gb) for everything (work + personal). The physical escapekey and fixed keyboard is amazing.
            </li>
          </ul>
        </div>
      </div>
    <Footer/>
  </main>
  )
}


export default Work