import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    // Returns a stateful value, and a function to update it.
    const [id, setId] = useState(1)
    const [page, setPage] = useState("")
    const [error, setError] = useState("")
    // Returns an imperative method for changing the location. Used by s, but may also be used by other elements to change the location.
    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        const isSuccessful = false;
        if (isSuccessful) {
            nav(`${page}/${id}`)
        } else {
            setError("These are not the droids 🤖 your looking for.")
        }

    }
    const changeId = (e) => {
        setId(e.target.value)
    }
    const changePage = (e) => {
        setPage(e.target.value)
    }


    return (
        <fieldset>
            <form onSubmit={submit}>
                {error && (
                    <div>
                        <p>{error}</p>
                        <img src="https://i.redd.it/6o6blcul5n841.jpg" alt="no_Droids" />
                    </div>
                )}
                <select name="page" id="page" value={page} onChange={changePage}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                Id:
                <input type="number" value={id} onChange={changeId} />
                <button type='submit'>🔦</button>
            </form>
        </fieldset>
    )
}

export default Form