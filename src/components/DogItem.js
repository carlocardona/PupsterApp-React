import React from 'react'

const DogItem = ({images}) => {
    return (
        <div>
            {images.slice(0, 10).map((image) => {
                
                return <div> 
                    <img src={image} alt="dog image" />
                </div>
            })}
        </div>
    )
}

export default DogItem
