const initialState= {
  isLoading: true,
  bookList: []
}

const BooksReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_BOOK_LIST":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        bookList: action.payload.bookList
      }

    default: return state
  }
}

export default BooksReducer