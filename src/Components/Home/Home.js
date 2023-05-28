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

    // This is delete function whill will delete the contactList with given id
    const deleteContact = (id) => {
        const index = contactList.findIndex((contact) => contact.id === id);
        if (index !== -1) {
          let newContactList = [...contactList];
          newContactList.splice(index, 1);
          setContactList(newContactList);
        }
    };
      

    useEffect(()=>{
        fetchContactList();
    }, []);

    if(isLoading){
        return <Loader />
    }
    return (
        <>
            <div className={Style.addContact}>
                
                <Link to = 'add-contact'>
                    <button>Add To Contact</button>
                </Link>
            </div>
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
                                <td>{index+1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to= 'edit-contact'>
                                        <button className={Style.editButton}>Edit</button>
                                    </Link>
                                    
                                    <button onClick={()=>deleteContact(contact.id)} className={Style.deleteButton}>
                                        Delete
                                    </button>
                                    
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