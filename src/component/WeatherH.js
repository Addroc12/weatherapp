import React,{useState,useEffect} from 'react'
import WeatherC from './WeatherC'

const WeatherH = () => {
const [weather , setWeather] = useState('')
const [search, setSearch] = useState('')
const [url, setUrl] = useState('https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=9d8feb2cc605385aeae2a01b23f64e92')

useEffect(() => {
   data() 
},[url])

const data = async () =>  await fetch(url)
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch(err => console.log(err))

    const handleChange = (e) => {
        setSearch(e.target.value)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d8feb2cc605385aeae2a01b23f64e92`)
    }


    return(
        <div style={{textAlign:"center"}}>
                
                <h1 style={{color:"white",marginBottom:"35px",fontSize:"60px",marginTop:"10px"}}>Weather ApI</h1>
                <form onSubmit={handleSubmit} style={{marginBottom:"50px"}}>
                    <h5 style={{color:"white",marginBottom:"25px",fontSize:"25px"}}>Search for Cities,Countries & States</h5>
                    <input type="text" value={search} onChange={handleChange} style={{marginBottom:"20px",fontSize:"25px"}} /> <br></br>
                    <button style={{color:"white",backgroundColor:"rgb(255, 168, 255)",marginBottom:"10px",padding:"8px",fontSize:"28px",borderRadius:"20px",boxShadow:"0px 0px 10px #888888"}} >Search</button>
                </form>
                
         
                {weather.weather ? <div style={{display:"flex", justifyContent:"center"}}>
                    
                    
                    <WeatherC country={weather.sys.country} weather={weather.weather} CityName={weather.name} temp ={weather.main.temp} humidity={weather.main.humidity}  />
                
                
                </div> : <div><h1 style={{color:"white",marginBottom:"30px"}}>Not A Valid Search Please Refresh The Page </h1>
                <img src ={'https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/sad.png'} style={{width:"250px",height:'220px'}} />
                </div>}
        </div>
    )
}



export default WeatherH