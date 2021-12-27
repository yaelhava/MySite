import React, { useState } from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import 'firebase/firestore';


export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();

    // const app = document.getElementById(currentUser.uid);

    
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
