import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

const CharCard = (charName, charImage, charId) => {
    return(
        <Link to={"/characters/" + charId}>
             <div className="card" style={{width: "18rem"}}>
        <img src={charImage} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{charName}</h5>
        </div>
        </div>
        </Link>
    );
}

const CharacterList = ({onSelect}) => {
    const {loading, error, data} = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;
    return (
        <div>
            <h1 className="text-center">Informasi Karakter Rick dan Morty </h1>
            <div className="container my-4">
            <div className="row row-gap-3 ">
                {
                    data.characters.results.map((char) => {
                        return <div className="col-md-6 col-lg-4">{ CharCard(char.name, char.image, char.id) }</div> 
                    })
                }
            </div>
        </div>
        </div>
        
    );
    
};

export default CharacterList;
