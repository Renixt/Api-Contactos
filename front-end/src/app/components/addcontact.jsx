"use client";
import React, { useState } from "react";
const cors = require('cors');
//app.use(cors());

function Addcontact() {
    // States
    const [fullname, setfullname] = useState('');
    const [number, setnumber] = useState('');

    // Function to get values from the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fullname, number);

        // Using fetch to post data
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`, {
            method: "POST",
            body: JSON.stringify({ nombre: fullname, numero: number }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Optionally handle the response here
        if (res.ok) {
            console.log("Contact added successfully");
            // Clear the form or handle success
            setfullname('');
            setnumber('');
        } else {
            console.error("Error adding contact");
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="fullname">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="border-yellow-600 border-2"
                    value={fullname}
                    onChange={e => setfullname(e.target.value)}
                />
                <br />
                <label htmlFor="number">Numero de telefono:</label>
                <input
                    type="text"
                    name="number"
                    className="border-yellow-600 border-2"
                    value={number}
                    onChange={e => setnumber(e.target.value)}
                />
                <br />
                <button className="bg-cyan-200 border-2">Submit</button>
            </form>
        </div>
    );
}

export default Addcontact;
