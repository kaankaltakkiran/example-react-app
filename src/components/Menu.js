import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate=useNavigate();
  return (
    <div >
        <ul className='menu'>
         {/*  Geri Gelir sayfa */}
        <li onClick={()=>navigate(-1)}>Geri </li>
            <li>
            <Link to="/">AnaSayfa</Link>
            </li>
            <li>
            <Link to="/users">Kullanıcılar</Link>
            </li>
            <li>
            <Link to="/contact">İletişim</Link>
            </li>
           
        </ul>
      
    </div>
  )
}

export default Menu
