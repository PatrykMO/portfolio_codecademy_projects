import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (contacts, addContact) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const nameDuplicated = () => {
      const duplicated = contacts.find(contact => contact.name === name);
      if (duplicated !== undefined) {
        return true;
      } else {
        return false;
      }
    };

    if (nameDuplicated()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }), [name, contacts, duplicate];

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? "You have already add this name to your contacts" : "Contact added"}
        </h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} emai={email} setEmail={setEmail} handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={contacts}/>
      </section>
    </div>
  );
};
