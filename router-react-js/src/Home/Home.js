import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const react = useNavigate()
    const goAbout = ()=>{
        react("About")
    }

    const goProfile = ()=>{
      react("profile/5")
  }

  const goProduct = ()=>{
    react({
      path: "Product",
      search:"?id=3&name=mani"
    })
}
  return (
    <div class="home-flex"><h1>Home</h1>
        <Link to = {"Profile/7"}><button>GO TO PROFILE</button></Link>
        <Link to = {"Product?id=3&name=mani"}><button>GO TO PRODUCT</button></Link>
        <button onClick={()=>goAbout()}>GO TO ABOUT</button>
        <button onClick={()=>goProfile()}>GO TO profile</button>
        <button onClick={()=>goProduct()}>GO TO Product</button>
    </div>
  )
}

export default Home