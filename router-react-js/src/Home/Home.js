import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const react = useNavigate()
    const goAbout = ()=>{
        react("About")
    }
  return (
    <div class="home-flex"><h1>Home</h1>
        <Link to = {"Profile"}><button>GO TO PROFILE</button></Link>
        <button onClick={()=>goAbout()}>GO TO ABOUT</button>
    </div>
  )
}

export default Home