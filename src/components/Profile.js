import React, { useState } from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import 'firebase/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 



export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();

    
    var name, email, birth, address;

    async function getDet(){

        const db = getFirestore();
        const docRef = collection(db, "users");
        const docSnap = await getDocs(docRef);


        for (let i = 0; i < 5; i++) {
            
            if(currentUser.uid === docSnap.docs[i].id){
                
                name = docSnap.docs[i]._document.data.value.mapValue.fields.name.stringValue;
                birth = docSnap.docs[i]._document.data.value.mapValue.fields.birth.stringValue;
                address = docSnap.docs[i]._document.data.value.mapValue.fields.address.stringValue;
                email = docSnap.docs[i]._document.data.value.mapValue.fields.email.stringValue;
                console.log(name+ birth + address);

            }
            
        }
    
    }


    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert varient="danger">{error}</Alert>}

            <button onClick={getDet}>Click to see details</button>
            <br />
            {/* <strong>Email: </strong> {currentUser.email} */}
            
            <strong>Name:{name} </strong> 
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
