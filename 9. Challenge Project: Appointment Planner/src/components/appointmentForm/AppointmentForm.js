import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Title"
        />
      </label>
      <br />

      <label>
        <input 
          type="data"
          name="data"
          value={date}
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Appointment Data"
        />
      </label>

      <label>
        <input 
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          placeholder="Appointment Time"
        />
      </label>

      <ContactPicker 
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With"
      />

      <input type="submit" value="Add Appoinment"/>
    </form>
  );
};
