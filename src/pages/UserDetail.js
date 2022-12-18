import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'

const UserDetail = () => {
    //id getirme
    const {id}=useParams();
    const location=useLocation();
    const [user,setUser]=useState(null);

    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>res.json()
        ).then((data)=>setUser(data));
      },[id])

  return (
    <div>
      <h2>Detay</h2>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default UserDetail
