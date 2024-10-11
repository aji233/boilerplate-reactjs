import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefaultUi = ({ children }) => {
  return (
    <>
     <ToastContainer />
    {children}
    </>
    
  )
}

export default DefaultUi