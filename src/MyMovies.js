import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export const MyMovies = ({ text, updatingInInput, deleteMovie}) => {
    return(
        <div>
        <p><img src="https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"alt="new" />{text}</p>
            <AiFillEdit className="icon-edit" onClick={ updatingInInput }></AiFillEdit>
            <AiFillDelete className="icon-delete" onClick={ deleteMovie }></AiFillDelete>
        </div>
    )
}