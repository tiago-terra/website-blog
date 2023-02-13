import React, { useState} from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Post(){
  const [post, setPost] = useState({
    'title': 'Using Git Submodules for Private Content',
    'category': 'tech',
    'date': 'July 19, 2023',
    'read': '4 min read'
  })



  return (

    <main>
      <Navbar />
      <div className="container mx-auto">
          <div className="border-b border-grey-lighter pb-8 sm:pb-12">
            <h2 className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl ">{post.title}</h2>
            <div className="flex items-center gap-3 py-2">
              <p className="pr-2 font-body font-light text-primary dark:text-white">{post.date}</p>
              <p className="pl-2 font-body font-light text-primary dark:text-white">{post.read}</p>
            <span className="inline-block rounded-full bg-green-light px-3 py-1 font-body text-sm text-green">{post.category}</span>
          </div>
            <img className='py-2' src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTEv9gdycEKSYtq4KTlbZt-Ekp-Aq9u9xzjQu9qiSFw31eSDBKRM_0wGPWAemXCcMyi'/>

        </div>
        <div className="prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at varius vel pharetra vel. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Massa placerat duis ultricies lacus sed turpis tincidunt. Cursus sit amet dictum sit amet justo donec enim. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Id semper risus in hendrerit gravida rutrum quisque. Posuere ac ut consequat semper viverra nam libero justo laoreet. Turpis cursus in hac habitasse platea.</p>
          <p>Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Pellentesque massa placerat duis ultricies lacus sed. Interdum velit laoreet id donec ultrices tincidunt arcu non. Id diam maecenas ultricies mi eget mauris. Urna id volutpat lacus laoreet non. Amet est placerat in egestas erat imperdiet sed euismod. Dui sapien eget mi proin sed libero enim sed faucibus. Facilisis mauris sit amet massa vitae. Vitae congue mauris rhoncus aenean vel elit. Ut etiam sit amet nisl. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.</p>
          <p>Non odio euismod lacinia at quis risus. Elit duis tristique sollicitudin nibh sit amet commodo. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Ipsum consequat nisl vel pretium lectus. Pretium vulputate sapien nec sagittis aliquam. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Nullam non nisi est sit.</p>
          <blockquote>
            <p>Note: Some of the earlier articles may be amateur and have information that I wouldn’t necessarily put into an article on the subject if I wrote it today.</p>
          </blockquote>
          <h3 id="lorem-ipsum-dolor-sit-amet">Lorem ipsum dolor sit amet</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Congue nisi vitae suscipit tellus.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Proin libero nunc consequat interdum. Sed arcu non odio euismod lacinia at quis.</p>

          <div className="twitter-card">
              <h4 className="twitter-card-title"> "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned."</h4>
              <span className="twitter-card-source">— Episode 6, Return of the Jedi</span>
              <button className="twitter-card-btn">Share this on Twitter</button>
          </div>

          <p>It’s great that I learned all that, because for my first real job in the industry, I was going to use practically none of it. No Git, no Node, no Sass, no Grunt nor Gulp, no command line, no Bootstrap. Just cold, hard WordPress. Nonetheless, this was going to present a and things to learn.&lt;/p&gt;</p>
          <h3 id="sed-do-eiusmod-tempor-incididunt">Sed do eiusmod tempor incididunt</h3>

          <div className="flex items-center py-10">
            <span className="pr-5 font-body font-medium text-primary dark:text-white">Share</span>
            <a href="/"><i className="bx bxl-facebook text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
            <a href="/"> <i className="bx bxl-twitter pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
            <a href="/"><i className="bx bxl-linkedin pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
            <a href="/"><i className="bx bxl-reddit pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
          </div>
      </div>
  </div>
  <Footer/>

  </main>


    
  )

}



export default Post