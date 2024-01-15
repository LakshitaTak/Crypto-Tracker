import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import "./style.css"

// itemsPerPage
// NoOfPages
// slice the data
// create page state
// create HandlePagination function.


export default function PaginationComp({page, setPage, noOfPages}) {

   const handleChange = (event, selectedPage) => {
    console.log("setpage", setPage)
    setPage(selectedPage)
   }

   console.log("page", page)
  return (
    <div>
        <Pagination count={noOfPages} onChange={handleChange} page={page} color='secondary' className='pagination'/>
    </div>
    );
}