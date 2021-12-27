import React, { useState, useEffect  } from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import 'firebase/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    
    useEffect(() => {     // render the data when the page is loaded
        getDetails();
      }, );

    async function getDetails(){

        const db = getFirestore();
        const docRef = collection(db, "users");
        const docSnap = await getDocs(docRef);


        for (let i = 0; i < docSnap.docs.length; i++) {
            
            if(currentUser.uid === docSnap.docs[i].id){
                setName(docSnap.docs[i]._document.data.value.mapValue.fields.name.stringValue);
                setBirth(docSnap.docs[i]._document.data.value.mapValue.fields.birth.stringValue);
                setEmail(docSnap.docs[i]._document.data.value.mapValue.fields.email.stringValue);
                setAddress(docSnap.docs[i]._document.data.value.mapValue.fields.address.stringValue);
            }
        }
    }

    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert varient="danger">{error}</Alert>}
           
            <strong>Name: </strong> {name}
            <br />
            <strong>Email: </strong> {email}
            <br />
            <strong>Birth Date: </strong> {birth}
            <br />
            <strong>Address:</strong> {address}
            
            </Card.Body>
        </Card>
        </>
    )
}
