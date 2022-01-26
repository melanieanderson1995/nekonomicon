import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
 
const Breeds = ({auth_token}) => {
    const [breeds, setBreeds] = useState([]);

    console.log("AUTH", auth_token);

    useEffect(() => {
        const url = "/breeds.json";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => setBreeds(response))
            .catch((error) => console.log(error));
        }, []);

    const handleDelete = (item) => {
      console.log("BREEDID", item);
      const url = `/breeds/${item}`;
      console.log("URL", url);
      fetch(url, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': auth_token
        }})
          .then(response => {
              console.log("RESPONSE", response);
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .catch((error) => console.log(error));
    }

    return ( 
        <div className="card-wrapper-container">
            <div className="card-title-container">
                <span className="card-title">
                Breeds
                </span>
            </div>
            <div className="card-main-container flex flex-col">
                <table className="grid-table mx-10 my-3 table-fixed">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Rare</th>
                    <th>Image url</th>
                    <th className="text-center w-64">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {breeds.map((breed) => (
                        <tr className="p-2">
                            <td>{breed.name}</td>
                            <td className="truncate w-96 flex">{breed.description}</td>
                            <td>{breed.rare}</td>
                            <td>{breed.image_url}</td>
                            <td className="justify-center flex">
                              <a href={`/breeds/${breed.id}`} className="btn btn-purple">Show</a>
                              <a href={`/breeds/${breed.id}/edit`} className="btn btn-yellow">Edit</a>
                              <button className="btn btn-red" onClick={() => handleDelete(breed.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <div className="justify-end flex">
                    <a href={"/breeds/new"} className="btn btn-purple m-2 w-40">+ New Breed</a>
                </div>
            </div>
        </div>
    )
}
 
export default Breeds