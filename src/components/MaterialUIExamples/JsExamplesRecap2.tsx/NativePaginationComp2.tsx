import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "./NativePaginationComp2.module.css"

function NativePaginationComp2() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://dummyjson.com/products?limit=9&skip=${page * 9}`)
        .then(data => data.json())
        .then(data => {
          console.log(data)
          setProducts(data.products)
          setTotalPage(data.total)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [page])

    const a = Math.ceil(totalPage / 9)
    
  return (
    <>
        {loading ? <div className={style.progressBar}><CircularProgress className={style.progressBar}/></div>:(
        <div style={{display: "grid", gridTemplateColumns: `repeat(3, 1fr)`, gap: "10px"}}>
          {products.map((prod:any) => <div style={{backgroundColor: "rgba(128, 128, 128, 0.07)"}}><img src={prod.thumbnail} alt={prod.title}/></div>)}
        </div>)}
        <div style={{textAlign: "center", cursor: "pointer"}}>
          {page !== 1 && <span onClick={() => setPage(page - 1)}>⬅️</span>}
          {new Array(Math.ceil(totalPage / 9)).fill(undefined).map((data:any, index:number) => <span style={{padding: "10px", backgroundColor: `${(page === index+1) ? "rgba(128, 128, 128, 0.55)": ""}`}} onClick={() => setPage(index + 1)}>{index + 1}</span>)}
          {page !== Math.ceil(totalPage / 9) && <span onClick={() => setPage(page + 1)}>➡️</span>}
        </div>
    </>
  )
}

export default NativePaginationComp2