import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

function Pagination({currentPage, onChangePage}) {
  return (
    <ReactPaginate
    className={s.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
  )
}

export default Pagination