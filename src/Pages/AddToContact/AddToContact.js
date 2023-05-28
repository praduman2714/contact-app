// Importing Styling

import Style from './AddToContact.module.css'
import { useValue } from '../../context';
import { useNavigate } from 'react-router-dom';

function AddToContact() {

    const {contactList, setContactList , nameRef, emailRef, numberRef, handleClear} = useValue();

   

    const navigate = useNavigate();

   

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;

        const checkNumber = contactList.find(contact => contact.number === parseInt(number) && number)

        if(checkNumber){
            return ;
        }
        
        const newContactList = [...contactList];
        newContactList.push({
            id: contactList[contactList.length - 1].id + 1,
            name ,
            email ,
            phone : number
        });
        setContactList(newContactList);
        navigate('/');
        // console.log(nameRef.current.value);
        handleClear();

    }


    return (
        <>
            <div className={Style.container}>
                <h1>Add To Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" ref={nameRef}  /> <br />
                    <input type="email" placeholder="Email" ref={emailRef}  /> <br />
                    <input type="tel" placeholder="Number" ref={numberRef}  /> <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddToContact;