// Importing Styling
import { useRef } from 'react';
import Style from './AddToContact.module.css'

function AddToContact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();

    const handleClear = ()=>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
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