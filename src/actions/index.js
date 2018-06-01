export function selectBook(book) {
    //selectBook is an action creator and needs to return an action: an object with a type value
    return {
        type:'BOOK_SELECTED',
        payload: book
    }
};