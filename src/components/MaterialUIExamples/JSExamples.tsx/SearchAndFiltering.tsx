import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

function SearchAndFiltering() {
    const [countries, setCountries] = useState([])
    const [result, setResult] = useState([])
    const [sort, setSort] = useState(true)

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(data => data.json())
            .then(data => {
                setCountries(data.data)
                setResult(data.data)
            })
    }, [])


    function searchFn(value:string) {
        setResult(countries.filter((data:any) => {
            return data.country.toLowerCase().includes(value.toLowerCase())
        }))
    }

    function sortFn(sort:boolean) {
        setSort(sort)
        let res = []
        if(sort) {
            res = result.sort((a:any, b:any) => {
                return a.country.toLowerCase() == b.country.toLowerCase() ? 0 : a.country.toLowerCase() > b.country.toLowerCase() ? 1: -1
            })
            // res = result.sort((a:any, b:any) => a.country.localeCompare(b.country)); //alternate approach from chatgpt, above one is mine logic
        } else {
            res = result.sort((a:any, b:any) => {
                return b.country.toLowerCase() == a.country.toLowerCase() ? 0 : b.country.toLowerCase() == a.country.toLowerCase() ? 1: -1 
            })
            // res = result.sort((a:any, b:any) => b.country.localeCompare(a.country)); //alternate approach from chatgpt, above one is mine logic
        }
        setResult(res)
    }

  return (
    <>
        <Input type='text' onChange={(event) => searchFn(event.target.value)}/>
        <Button onClick={() => sortFn(!sort)}>Sort {sort? " up": " down"}</Button>
        {result.map((data:any) => <p key={data.country}>{data.country}</p>)}
    </>
  )
}

export default SearchAndFiltering