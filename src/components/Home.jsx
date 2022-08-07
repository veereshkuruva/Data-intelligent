import React, { useEffect, useState } from 'react'
import axiox from 'axios'
import axios from 'axios'
import DataCard from './DataCard'
const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        axios.get("https://rickandmortyapi.com/api/character").then(resp => {
            // console.log(resp.data)
            setIsLoading(false)
            setData(resp.data.results)
        }).catch(err => {
            console.log(err)
        })

    })
    return (
        <center>
            <DataCard isLoading={isLoading} data={data} />
        </center>

    )
}

export default Home;