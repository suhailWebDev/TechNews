import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const{page,nbPages,getPrevPage,getNextPage}=useGlobalContext();
  return (
    <div className='container d-flex flex-row align-items-center justify-content-center gap-5 mt-4'>
      <button className='btn text-light' id='btn-pagination' onClick={()=>getPrevPage()}>PREV</button>
      <p>{page + 1} of {nbPages}</p>
      <button className='btn text-light' id='btn-pagination' onClick={()=>getNextPage()}>NEXT</button>
    </div>
  )
}

export default Pagination
