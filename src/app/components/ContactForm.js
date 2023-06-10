"use client"
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";


const mulish = Mulish({
    subsets:['latin'],
    display:'swap',
    weight:['300','400','500','600','700','800','900']
})

const ContactForm = () => {
    const initialState = {
        username: "",
        email: "",
        phone: "",
        message: ""
      };
      const [user, setUser] = useState(initialState);
    

    function handleChange(e){
        const name= e.target.name;
        const value= e.target.value;

        
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
    function handleSubmit(){

    }


  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
                Entre your name
               <input type="text" name="username" id="username"
                    placeholder="Enter your name"
                     className={mulish.className}
                     value={user.username}
                     onChange={handleChange}
                />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
                Entre your Email
               <input type="email" name="email" id="email"
                    placeholder="Enter your Email"
                     className={mulish.className}
                     value={user.email}
                     onChange={handleChange}
                     required
                />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="phone" className={styles.label}>
                Entre your phone no
               <input type="number" name="phone" id="phone"
                    placeholder="Enter your phone no "
                     className={mulish.className}
                     value={user.phone}
                     onChange={handleChange}
                     required
                />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="message" className={styles.label}>
                Entre your message here
               <textarea type="text" name="message" id="message"
                    placeholder="Enter your message "
                     className={mulish.className}
                     value={user.message}
                     onChange={handleChange}
                     rows={5}
                     required
                />
            </label>
        </div>
        <div>
            <button type="submit" className={mulish.className}>Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm