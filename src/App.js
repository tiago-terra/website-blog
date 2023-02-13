import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Post from './pages/post';
import Contact from './pages/contact';
import Work from './pages/work';

function App() {
    return (
       <Router>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/blog'element={<Blog/>}></Route>
                 <Route exact path='/post'element={<Post/>}></Route>
                 <Route exact path='/contact'element={<Contact/>}></Route>
                 <Route exact path='/work'element={<Work/>}></Route>
          </Routes>
       </Router>
       
    )
}

export default App