import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
let setting={
  dots:true,
  infinite:true,
  speed:500,
  slidesToShow:1,
  slideToScroll:1,
  autoplay:true,
}

function Home() {
  return (
    <>    
      <Navbar/>
      <div className='container'>   
       <div className='inter'>
    <h1 style={{color:'black'}}>Welcome To GreenAgri</h1>
    <h3 style={{color:'#101820FF'}}>Precision agriculture combines modern technology with an established agricultural sector.
In order to match the type and quantity of inputs with the actual crop demand
for a given region of an agricultural field, it is an integrated management system of
crops. The concept of precision agriculture can now be implemented in a
real production environment thanks to modern technology.
</h3>
    </div>
      <Slider  {...setting}  className='slide'>
<a  className='bor'>
<img  src='9.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='4.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='5.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='3.png' className='img'/>
</a>
<a className='bor'>
<img  src='5.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='6.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='7.jpg' className='img'/>
</a>
<a className='bor'>
<img  src='8.png' className='img'/>
</a>
    </Slider>


      </div>
    </>

  )
}

export default Home