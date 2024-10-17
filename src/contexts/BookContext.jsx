import React, { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()
const BookContextProvider = (props) => {

    // const [books, setBooks] = useState([
    //     {title: "The Alchemist", author: "Paulo Coelho", id: 1},
    //     {title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", id: 2},
    // ])

    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: books.length + 1}])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    }, [books])

  return (
    <BookContext.Provider value={{books, dispatch}}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
