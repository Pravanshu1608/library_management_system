import React, { useState } from "react";
import * as Components from '../components/Components';
import NavbarHead from '../components/NavbarHead';
import FooterBottom from '../components/FooterBottom';
import { ContentContainer } from "../components/Styles";
import { database } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "firebase/database"; // Import Firebase Realtime Database
import { useNavigate } from "react-router-dom";


function UserLogin() {


    const [signIn, toggle] = useState(true);
    const history=useNavigate();
    const handleSignUp=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            history("../")
        })
    }
    const handleSignIn=(e)=>{
        e.preventDefault();
        const signInEmail = e.target.signInEmail.value;
        const signInPassword = e.target.signInPassword.value;
      
        signInWithEmailAndPassword(database, signInEmail, signInPassword)
          .then((userCredential) => {
            // User successfully signed in
            const user = userCredential.user;
            console.log("User signed in:", user);
      
            // Navigate to the desired page
            history("../");
          })
          .catch((error) => {
            // Handle sign-in error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
          });
        
    }

    return (
        <div>
           

            <NavbarHead />




            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background:
                    'linear-gradient(45deg, rgba(255, 255, 230, 0.9), rgba(173, 216, 230, 0.5), rgba(255, 255, 204, 0.9)), ' +
                    'linear-gradient(135deg, rgba(255, 255, 230, 0.9), rgba(173, 216, 230, 0.5), rgba(255, 255, 204, 0.9)), ' +
                    'linear-gradient(225deg, rgba(255, 255, 230, 0.9), rgba(173, 216, 230, 0.5), rgba(255, 255, 204, 0.9)), ' +
                    'linear-gradient(315deg, rgba(255, 255, 230, 0.9), rgba(173, 216, 230, 0.5), rgba(255, 255, 204, 0.9))'
            }}></div>

            <ContentContainer>
                <Components.Container>


                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={(e)=>handleSignUp(e)}> 
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input name="name" type='text' placeholder='Name' />
                            <Components.Input name="email" type='email' placeholder='Email' />
                            <Components.Input name="password" type='password' placeholder='Password' />
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>

                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={(e)=>handleSignIn(e)}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input name="signInEmail" type='email' placeholder='Email' />
                            <Components.Input name="signInPassword" type='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button>Sigin In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
 
                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start the journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
            </ContentContainer>
            
            <FooterBottom />
        </div>
    );
}

export default UserLogin;
