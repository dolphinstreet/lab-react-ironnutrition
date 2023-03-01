import React from "react";
import { useState } from 'react'
import { Divider, Input } from 'antd';



// Iteration 5
function Search(props) {

    const [query, setQuery]=useState("")
   
    const handleSearch =(event)=>{
        props.handleSearch(event.target.value)
        setQuery(event.target.value)
    }
    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={query} placeholder="Search an item" type="text" onChange={handleSearch} />
      </>
    );
  }
  
  export default Search;