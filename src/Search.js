import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const{query,searchPost}=useGlobalContext();
  return (
    <>
    <div className='container d-flex flex-column align-items-center mt-2'>
      <form className='search'>
        <input className="form-control" type="text" placeholder="Search Here" value={query} onChange={(e)=>searchPost(e.target.value)}/>
        </form>
      </div>
    </>
  )
}

export default Search
