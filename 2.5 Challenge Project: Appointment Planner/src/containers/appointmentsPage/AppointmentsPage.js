import React from "react";

export const AppointmentsPage = ({appointments, contacts, addAppointments}) => {
  const [tile, setTile] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments(tile, contact, date, time);
    setTile("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppoinmentForm contacts={contacts} tile={tile} setTile={setTile} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} onChange={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <Tile tiles={appointments}/>
      </section>
    </div>
  );
};
