import axios from 'axios'
import React, { useState } from 'react'
import DogItem from '../DogItem'

function Search() {
    const [inputText, setInputText] = useState('')
    const [images, setImages] = useState([])

    const fetchImage = e => {
        e.preventDefault()

        axios.get(`https://dog.ceo/api/breed/${inputText}/images`)
        .then(({data} )=> {
            console.log(data)
            setImages(data.message)
        })
    }

    return (
        <div>
            <h4>Search By Breed</h4>

            <form onSubmit={fetchImage}>
                <label>Breed name:</label>
                <input type="text" onChange={(e) => setInputText(e.target.value)} placeholder="Type in a dog breed to begin" />
                <button>Search</button>
            </form>
            <DogItem images={images} />

            {/* {images.slice(0, 10).map((image) => {
                
                return <div> 
                    <img src={image} alt="dog image" />
                </div>
            })} */}
        </div>
    )
}

export default Search
