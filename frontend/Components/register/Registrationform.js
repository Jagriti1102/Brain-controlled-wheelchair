'ise client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Registrationform() {
 const [formData, setformdata] = useState({   
    username:''
 });
 const router = useRouter();
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
    localStorage.setItem("username", formData.username);
    router.push("/Home");
 };
  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-5">
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="bg-gray-100 border-1 border-black rounded-sm p-1"
        placeholder="Username"
      />
      <br></br>
      <br></br>
      <button type="submit" className="bg-green-700 py-2 px-3 rounded-full text-white mt-2 hover:bg-green-900">Create</button>
    </form>
  );
}
export default Registrationform;
