import React from 'react'

const Book = ({ book}) => {
  return (
      <div key={book.id}>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <p>{book.genre}</p>
      </div>
  )
}

export default Book