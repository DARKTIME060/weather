import { useContext, useState } from 'react'
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Context } from '../context/Context';

function Navbar() {
    const {search,setSearch,getData} = useContext(Context)
    const [theme,setTheme] = useState(true)

    useEffect(()=>{
        document.documentElement.dataset.theme = theme ? "dark" : "light"
    },[theme])


    return (
        <nav className='navbar'>
            <div className="container">
                <div className="toggle-switch">
                    <label className="switch-label">
                        <input type="checkbox" className="checkbox"/>
                            <span className="slider" onClick={()=>setTheme(!theme)}></span>
                    </label>
                </div>
                <div className="navbar__search">
                    <FaSearch className='navbar__search-icon'/>
                    <input  placeholder='Search for your preffered city . . .' value={search} onChange={(e)=>setSearch(e.target.value)}/> 
                </div>
                <button onClick={getData}>
                    <FaSearch className='button__icon'/>
                   <span>Current Location</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar