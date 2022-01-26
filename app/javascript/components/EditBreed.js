import React, { useEffect, useState } from 'react';

const EditBreed = ({auth_token, breed}) => {
    const [name, setName] = useState(breed.name);
    const [rare, setRare] = useState(breed.rare);
    const [desc, setDesc] = useState(breed.description);
    const [image, setImage] = useState(breed.image_url);
    const values = {
        name: name,
        rare: rare,
        description: desc,
        image_url: image
    }

    useEffect(() => {
        console.log("CURRENT", breed);
    }, [breed])

    const handleSubmit = (event) => {
        const url = `/breeds/${breed.id}`
        fetch(url, {
            method: "PUT",
            headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': auth_token,
            "Accept": "application/json"
            },
            body: JSON.stringify(values)
        }).then(response => {
            if (response.ok) {
            console.log("UPDATE SUCCESS")
            } else {
            throw new Error("Network update response was not ok");
            }
        }).catch((error) => console.log("ERROR", error));
    }

//   <% if breed.errors.any? %>
//     <div id="error_explanation">
//       <h2><%= pluralize(breed.errors.count, "error") %> prohibited this breed from being saved:</h2>

//       <ul>
//         <% breed.errors.each do |error| %>
//           <li><%= error.full_message %></li>
//         <% end %>
//       </ul>
//     </div>
//   <% end %>

    const handleChange = (e) => {
        const target = e.target;
        const value = target.checked;

        setRare(value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="field my-2">
                <label className="text-white font-bold">Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" />
            </div>
            <div className="field flex flex-row">
                <label className="text-white font-bold">Rare: </label>
                <input type="checkbox" checked={rare} onChange={handleChange} />
            </div>
            <div className="field mb-2">
                <label className="text-white font-bold">Description: </label>
                <input type="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" />
            </div>
            <div className="field mb-2">
                <label className="text-white font-bold">Image URL: </label>
                <input type="url" value={image} onChange={(e) => setImage(e.target.value)} className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" />
            </div>
            <input type="submit" className="btn btn-green"  />
        </form>
    )
}

export default EditBreed