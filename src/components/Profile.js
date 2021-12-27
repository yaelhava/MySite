import React, { useState } from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import 'firebase/firestore';
import { useLocation } from 'react-router-dom';



export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // const location = useLocation();


    // const app = document.getElementById(currentUser.uid);
    // console.log(location.state);
    


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert varient="danger">{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}
                </Card.Body>
            </Card>
           


        </>
    )
}
