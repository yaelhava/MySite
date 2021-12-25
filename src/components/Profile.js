import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import firebase from '@firebase/app-compat'
import { doc, getDoc } from "firebase/firestore";
// import db from "../firebase"


export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();
    // // **********************new*****************
    // const[currUser, setCurrUser] = useState();

    // const provider = new firebase.auth.EmailAuthProvider();

    // useEffect(() => {
    //     app.auth().onAuthStateChanged((user) => {
    //         setCurrUser(currUser)
    //     })
    // }, [])

    const [details, setDetails] = useState();
    
    async function getUserDetails() {
        const docRef = doc(firebase, "users", "SF");
        const docSnap = await getDoc(docRef);

        


        if (docSnap.exists()) {
            // setDetails(docSnap.data());
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            // setDetails("No such document!");
          }



    }
    // const {history} = useNavigate();

    // async function handleLogout(){
    //     setError('');

    //     try{
    //         await logout();
    //         history({ pathname: '/login' });
            
    //     } catch {
    //         setError('Failed to log out');
    //     }

    // }
    
    
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert varient="danger">{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}
                {details}
                
                </Card.Body>
            </Card>
           


        </>
    )
}
