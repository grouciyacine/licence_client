import React, { useState } from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
import {Home,  Book,   Search, Add} from '@material-ui/icons'
import {Avatar,IconButton} from '@material-ui/core'
function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const[drop,setDrop]=useState(false)
    const[excel,setExcel]=useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDrop = () => {
        setDrop(!drop);
    };
return (
    <div className='cont'>
        <div className='nav'>
            <img src='Weather.png' className='logo' alt=''/>
            <form className='se'>
                <Search className='search'/>
                <input type='text' placeholder='search....'/>
            </form>
            <div className='links'>
                <div className='one'>
                    <Home className='icone'/>
                    <Link className='a' to='/' style={{textDecoration:'none',color:'black'}}>home</Link>
                </div >   
                <div className='one'>
                    <Add/>
                    <Link className='a' onClick={toggleDropdown} style={{textDecoration:'none',color:'black'}}>New Data </Link>
                    {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/new">NPK</Link>
              </li>
              <li>
                <Link to="/ard">NPK Arduino</Link>
              </li>
              <li>
                <Link to="/ndvi">NDVI</Link>
              </li>
              <li>
                <Link to="/csv" >CSV</Link>
              </li>
              <li>
                <Link to="/image">IMAGE</Link>
              </li>
            </ul>
          )}
                </div> 
                <div className='one'>
                    <Book/>
                    <Link className='a' onClick={toggleDrop} style={{textDecoration:'none',color:'black'}}>Data Visualizer</Link>
                    {drop && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to='/dd'>CSV</Link>
              </li>
              <li>
                <Link to="/images">IMAGE</Link>
              </li>
              <li>
                <Link to="/curve">CURVE</Link>
              </li>
              <li>
                <Link to="/npk">CSV-NPK</Link>
              </li>              
            </ul>
          )}
                </div>    
            </div> 
            <div>
                <IconButton >
                <Avatar src=''/>
                </IconButton>
            </div>
        </div>
</div>
)
}

export default Navbar