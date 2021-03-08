import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Discover() {
    const [image, setImage] = useState('')
    const [like, setLike] = useState(0)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        async function api () {
            setLoading(true)
            try {
                const {data} = await axios.get('https://dog.ceo/api/breeds/image/random')
                console.log(data)
                setImage(data.message)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        // axios.get('https://dog.ceo/api/breeds/image/random')
        // .then(data => {
        //     setLoading(true)
        //     console.log(data)
        //     if(data.data.status === "success"){
        //         console.log(data)
        //         setLoading(false)
        //         setImage(data.data.message)
        //     }
        // })
        api()
        console.log(loading)

        // fetch("https://dog.ceo/api/breeds/image/random")
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setImage(data.message)
        // })
    }, [])
    return (
        <div>
            <h2>Make New Friends</h2>
            <h6>Thumbs up on any pups you'd like to meet</h6>

            <div>
                {loading ? <h1>loading</h1> : <img src={image} alt="dog image" />}
                
                <button onClick={() => setLike(like + 1)}>thumbs up</button>
                <button onClick={() => setLike(like - 1)}>thumb down</button>
                <p> Made friends with {like} pups so far! </p>
            </div>
        </div>
    )
}

export default Discover
