
import './App.css';
import React, { useState } from 'react'
import axios from 'axios'


const App = () => {


  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9b47a8c3e50c8e4ca83f1e7261e3f29d`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((responce) =>(
        setData(responce.data)
        
      ))
      setLocation('')
    }
    
  }

  
  return (
    <div className='app'>
      
      <div className="search">
        <input type="text"
        value={location}
         onChange={event => setLocation(event.target.value)} 
         placeholder='Enter Location'
          onKeyPress={searchLocation} />
      </div>
      <div className="container">
        <div className="top">
          <div className="loaction">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&#8457;</h1> : null }
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            
          </div>

        </div>

        {data.name != undefined && 
           <div className="bottom">
           <div className="feels">
           {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&#8457;</p> : null }
             <p>feels like</p>
           </div>
           <div className="humidity">
           {data.main ? <p className='bold'>{data.main.humidity}%</p> : null }      
             <p>humidity</p>
           </div>
           <div className="wind">
           {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null }
             <p>wind speed</p>
           </div>
         </div>
        }
       

      </div>
    </div>
  )
}

export default App

