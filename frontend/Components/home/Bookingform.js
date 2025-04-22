import React, { useState } from "react";

function Bookingform() {
 const [formData, setformdata] = useState({   
    username:'',
    email:'',
    password:'',
 });
 const handleChange = (e) => {
    const {name, value} = e.target;
    setformdata((prevData)=>({
        ...prevData,
        [name]:value,
    }));
 };
 const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData);
 };
  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4 justify-center">
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm mx-2 p-1"
        placeholder="Name"
      />

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm mx-2 p-1"
        placeholder="Email"
      />

      <input
        type="text"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm mx-2 p-1"
        placeholder="Phone Number"
      />

      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm mx-2 p-1"
        placeholder="Age"
      />

      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm mx-2 p-1"
        placeholder="Address"
      />
      <br></br>
      <button type="submit" className="bg-green-700 py-2 px-3 rounded-full text-white mt-2 hover:bg-green-900">Book</button>
    </form>
  );
}
export default Bookingform;
