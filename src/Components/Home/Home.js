import { useEffect, useState } from "react";

// Importing Style
import Style from './Home.module.css';
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function Home() {
    const [contactList, setContactList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchContactList = async() =>{
        setIsLoading(true);
        let data = await fetch('https://jsonplaceholder.typicode.com/users/');
        let contact = await data.json();
        // console.log(contact);
        setContactList(contact);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchContactList();
    }, []);

    if(isLoading){
        return <Loader />
    }
    return (
        <>
            <div className={Style.contactTable}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to= 'edit-contact'>
                                        <button className={Style.editButton}>Edit</button>
                                    </Link>
                                    <Link to='add-contact' >
                                        <button className={Style.deleteButton}>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    ) 
}

export default Home;