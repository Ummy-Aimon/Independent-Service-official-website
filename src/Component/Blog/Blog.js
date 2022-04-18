import React from 'react';

const Blog = () => {
    return (
        <div>
           <h3 className="p-3">Difference between authorization and authentication?</h3>
           <p className="p-3"><b>Authentication:</b> Authentication is about validating your credentials like username and password to verify your identify</p>
           <p className="p-3"><b>Authorization:</b> Authorization is the process to determine whether the authentication user has access to the particular resources.It checks your rights to grant you access to resources such as information,database,files etc</p>
           <h3 className="p-3">Why are you using firebase? What other options do you have to implement authentication?</h3>
           <p className="p-3">I am using firebase becasuse Its support authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and twitter. I have to implement other option  cards, retina scans, voice recognition, and fingerprints.Or Multi-factor authentication.
                 Certificate-based authentication.
                 Biometric authentication. 
                 Token-based authentication.</p>
                 <h3 className="p-3">What other services does firebase provide other than authentication</h3>
                 <p className="p-3">Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.providers like Google, Facebook and twitter and more </p>
        </div>
    );
}

export default Blog;