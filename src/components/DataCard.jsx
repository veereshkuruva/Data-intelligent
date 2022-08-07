import React from 'react'
import Card from './Card'

const DataCard = ({ isLoading, data }) => {
    return(
     isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {data.map(ele=>(
         <Card key={ele.id} ele={ele}/>
        ))}
    
    </section>)
    )

}

export default DataCard