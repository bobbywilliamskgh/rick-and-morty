import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"

const GET_CHARACTER = gql`
   query GetCharacter($id: ID!) {
        character(id: $id) {
            name
            status
            species
            image		
       }
    }
`;

const CharacterDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const {loading, error, data} = useQuery(GET_CHARACTER, {
        variables: { id: id },
      });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    //console.log("data:");
    //console.log(data);
    return (
        <div className="container mx-3">
            <p>Nama : {data.character.name}</p>
            <p>Status : {data.character.status}</p>
            <p>Species : {data.character.species}</p>
            <img src={data.character.image} class="card-img w-25 h-25" alt="..."/>
        </div>
    );
};

export default CharacterDetails;



