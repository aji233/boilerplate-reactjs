import axios from 'axios';
import React ,{useState}from 'react'
import { BsSkipStartFill } from "react-icons/bs";
import { toast} from 'react-toastify';

const Listindex = () => {



  return (
    <>
    <div>Listindex</div>
    <BsSkipStartFill />
    <button className='p-3 bg-orange-400 m-4 rounded-md' onClick={()=>(toast.warn('Price is required!', { position: "top-right", autoClose: 3000 }))}>toas</button>
    </>

  )
}

export default Listindex