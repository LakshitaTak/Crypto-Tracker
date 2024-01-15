import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css"

export default function PaginationComp({page, setPage, noOfPages}) {

   const handleChange = (event, selectedPage) => {
    setPage(selectedPage)
   }

   console.log("page", page)

  return (
    <div>
        <Pagination count={noOfPages} onChange={handleChange} page={page} color='secondary' className='pagination'/>
    </div>
    );
}