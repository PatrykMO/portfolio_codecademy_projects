Challenge Project: Appointment Planner
=======
Project Goals
-------
In this project, you will use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments.

![Image](https://static-assets.codecademy.com/skillpaths/react-redux/appointments-components.png)

You will work with stateful and stateless functional React components using hooks. The requirements section will walk through implementing the app from the topmost component down. If you would like to implement it in a different order feel free to do what is comfortable for you.

Requirements 
-------
1. App -
  Keep track of the contacts and appointments data, each being an array of objects /
  Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts /
  Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments /
  Pass the array of contacts and the appropriate callback function as props to the ContactsPage component /
  Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component 

2. ContactsPage - 
  Receive two props: The current list of contacts, A callback function for adding a new contact /
  Keep track of three local state values: the current name, phone, and email entered into the form /
  Check for duplicates whenever the name in the form changes and indicate the name is a duplicate /
  Only add a new contact on form submission if it does not duplicate an existing contact’s name /
  A successful submission should clear the form /
  In the Add Contact section, render a ContactForm with the following passed via props: local state variables, local state variable setter functions, handleSubmit callback function
  
3. ContactForm - 
  Render a form with: The onSubmit attribute set, 3 controlled <input> elements, one for each piece of contact data, A submit button /
  Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference 
  
4. TileList - 
  Receive one prop: An array of objects to render as a list /
  Use the array passed via props to iteratively render Tile components, passing each object in the array as a prop to each rendered Tile component /
  The requirements for the TileList component are generalized and allow it to be shared by the ContactsPage and AppointmentsPage components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.
  
5. Tile - 
  Receive one prop: An object
  Iterate over the values in the object, passed in via props, and render element for each value /
  Give a className of "tile-title" to the first element /
  Give a className of "tile" to all other elements /
  Just like the TileList component, the Tile component is generalized to work with data from any object. This allows it to be used in both the ContactsPage and AppointmentsPage components.
    
6. AppointmentsPage - 
   Receive three props: The current list of appointments, The current list of contacts, A callback function for adding a new appointment /
   Keep track of four local state variables, the current title, contact, date, and time entered into the form /
   Add a new appointment on form submission /
   Clear the form on submission /
   In the Add Appointment section, render an AppointmentForm with the following passed via props: local state variables, local state variable setter functions, handleSubmit callback function /
   In the Appointments section, render a TileList with the appointment array passed via props
   
7. AppointmentForm - 
  Render a form with: The onSubmit attribute set to the callback function passed in via props ,3 controlled input components, to be used for the title, date and time appointment data, A ContactPicker component with the contacts list passed in via props, A submit button /
  Use getTodayString() to set the min attribute of the date input
  
8. ContactPicker -
  Receive 2 props: The array of contacts, A callback function to handle when the onChange event is triggered /
  Render a select element with the onChange attribute set to the callback passed in via props /
  Have a default first option element that indicates no contact is selected /
  Iteratively add option elements using the contact names from the array passed in via props
