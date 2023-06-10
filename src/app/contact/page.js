import React from 'react'
import styles from "./contact.module.css"
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
const page = async() => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <>
    <div className={styles.container}>
    <h2>CONTACT US</h2>
    <ContactCard />
      <section className={styles.contact_section}>
        <h2>Wed love to hear <span>from you</span></h2>

        <ContactForm/>
      </section>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1735.5665857048284!2d71.64572655594361!3d29.541615852953157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDMyJzI3LjgiTiA3McKwMzgnNDguMiJF!5e0!3m2!1sen!2s!4v1686136091474!5m2!1sen!2s" width={100} height={450} style={{border:0}} allowfullscreen="" l
oading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}

export default page