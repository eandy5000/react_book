export default function selectBook(book){
    console.log("selected book ", book.title);

    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}