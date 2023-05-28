import { createContext, useContext, useState , useEffect } from "react";


const contactApi = createContext();

export function useValue(){
    const value = useContext(contactApi);
    return value;
}

function CustomeContext({children}){
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


    return (
        <>
            <contactApi.Provider value={{contactList, setContactList, isLoading, setIsLoading, deleteContact}}>
                {children}
            </contactApi.Provider>
        </>
    )

}

export default CustomeContext;