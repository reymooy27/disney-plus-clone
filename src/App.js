import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([])
  
  useEffect(() => {
    const fetchMovies = async ()=>{
      await axios.get('https://yts.mx/api/v2/list_movies.json')
      .then(res=> {
        setMoviesData(res.data.data.movies)
        setLoading(false)
      })
      .catch(err=> {
        console.log(err)
        setLoading(true)
      })
    }

    fetchMovies()
  }, []);

  console.log(moviesData)

  return (
    <Router>
      {/* Navbar */}
      {!loading && <Navbar/>}
      <div className="landing--page">
        <Switch>
          <Route path='/detail/:id'>
            <Detail/>
          </Route>
          <Route path='/' render={()=> <Home loading={loading} data={moviesData}/>}/>
        </Switch>
      </div>
      {/* Footer */}
      {!loading && <Footer/>}
    </Router>
  );
}

export default App;
