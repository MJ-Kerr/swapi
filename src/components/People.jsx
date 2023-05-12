import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from "axios"

const People = (props) => {
    // Returns a stateful value, and a function to update it.
    const [data, setData] = useState(null)
    // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    const { id } = useParams()
    // If present, effect will only activate if the values in the list change.
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                // Attaches a callback for only the rejection of the Promise.
                // @param onrejected — The callback to execute when the Promise is rejected.
                // @returns — A Promise for the completion of the callback.
                console.log(error)
            })
    }, [id])

    // console.log(People)
    return (
        <fieldset>
            {data ? (
                <fieldset>
                    <legend>Person Card</legend>
                    <div style={{ background: "gray" }}>
                        <h2>{data.name}</h2>
                        <p>Height:{data.height}</p>
                        <p>Mass:{data.mass}</p>
                        <p>Hair Color:{data.hair_color}</p>
                        <p>Skin Color:{data.skin_color}</p>
                    </div>
                </fieldset>
            ) : (
                <div style={{ backgroundColor: "red" }}>
                    <p>Loading page is</p>
                    <p>---Master Yoda---</p>
                </div>
            )
            }
        </fieldset >
    )
}

export default People