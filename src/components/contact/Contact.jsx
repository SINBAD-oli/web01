import React from 'react'
import "./contact.css"
import emailjs from "emailjs-com"



export default function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_myweb01', e.target, 'user_mXydpYMgmhKqb6zS378VZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    
    return (
        
        <div className="container">
        <header>Hello!</header>
            <form onSubmit={sendEmail} id="form" >
		
		    <input id="name" type="text" placeholder="NAME" name="name"/>
		    <input id="email" type="text" placeholder="E-MAIL" name="email"/>
            <input id="subject" type="text" placeholder="SUBJECT" name="subject"/>
		    <textarea id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
            <input id="submit" type="submit" value="GO!"/>
  
            </form>
        </div>
           
        
    );
    }


