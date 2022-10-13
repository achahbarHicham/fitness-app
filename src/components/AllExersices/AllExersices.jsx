import React, { useEffect, useState,useRef } from 'react';
import ReactPaginate from 'react-paginate';
import "./AllExersices.scss"
import ExCard from "../ExCard/ExCard"

const AllExersices = ({data}) => {

    const exRef = useRef()
    const mainData = data.length ? data : []

   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 9

 
   useEffect(() => {
     // Fetch items from another resources.
     const endOffset = itemOffset + itemsPerPage;
     setCurrentItems(mainData.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(mainData.length / itemsPerPage));
   }, [itemOffset, itemsPerPage,mainData]);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % mainData.length;
     setItemOffset(newOffset);

    exRef.current.scrollIntoView({
      behavior: 'smooth'
    });

   };



  return (
    <>
    <div className="exersices" id='exrsices' ref={exRef}>
    {
        currentItems && currentItems.map(data => <ExCard key={data.id} {...data} />)
    }
    </div>

     <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName='pagination-container'
          nextClassName='next'
          marginPagesDisplayed={1}
          previousClassName='prev'
          pageClassName='item'
        />
    </>
  )
}

export default AllExersices

