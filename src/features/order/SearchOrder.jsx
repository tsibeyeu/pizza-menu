import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query,setQuery]=useState("");
    const navigate= useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!query) return ;
        navigate(`order/${query}`);
        setQuery("");
    }
  return (
    <form onSubmit={handleSubmit}>
      <input className="rounded-full px-4 py-3 bg-yellow-100 text-sm w-28 sm:w-64 placeholder:text-stone-400 sm:focus:w-72  transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50" placeholder="Search Order #" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} /></form>
  )
}

export default SearchOrder