import React from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
import {Home, Info, Book, ContactMail,  Search, Add} from '@material-ui/icons'
import {Avatar,IconButton} from '@material-ui/core'
function Navbar() {

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
                    <Book/>
                    <Link className='a' to='/blogs' style={{textDecoration:'none',color:'black'}}>Blogs</Link>
                </div>    
                <div className='one'>
                    <Add/>
                    <Link className='a' to='/new' style={{textDecoration:'none',color:'black'}}>New Blog</Link>
                </div>   
                <div className='one'>
                    <ContactMail/>
                    <Link className='a' style={{textDecoration:'none',color:'black'}}>contact</Link>
                </div>
                <div className='one'>
                    <Info/>
                    <Link className='a' style={{textDecoration:'none',color:'black'}}>about us</Link>
                </div >
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