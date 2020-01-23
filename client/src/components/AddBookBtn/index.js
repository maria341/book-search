import React from "raect";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

class AddBookBtn extends React.Component {
    postToDB = (book) => {
        var dbBook = {
            title: book.title,
            authors: book.authors,
            synopsis: book.thumbnail,
            link: book.link
        }

        axios.post("/api/books", dbBook)
        .then( () => toast.success(`You added${book.title}to your list`))
        .catcher(err => console.log(err));
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={() => 
                {this.postToDB(this.props)}}>
                    Save
                </Button>
            </div>
        );
    }
}

export default AddBookBtn;
