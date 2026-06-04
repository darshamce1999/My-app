import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import "./NativePagination.css"

export const NativePaginationComp = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        setLoading(true)
        fetch(`https://dummyjson.com/products?limit=9&skip=${page*9}`)
            .then(data=>data.json())
            .then(data=>{
                setTotalPage(data.total)
                setProducts(data.products)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [page])

    function handleChange(type:string) {
        if(type === 'prev' && page > 0) {
            setPage(page-1)
        } else if(type === 'next' && page < Math.floor(totalPage/9)) {
            setPage(page+1)
        }
    }

    return <>
    {/* <div className="Pagination">
            {page !== 0 && <span onClick={()=>handleChange('prev')}>⬅️</span>}
            {[...Array(Math.ceil(totalPage/9))].map((x:any,index:number) => 
                <span className={page === index ? "selectedPage": ""} onClick={()=>setPage(index)}>{index+1}</span>
            )}
            {page !== Math.floor(totalPage/9) && <span onClick={()=>handleChange('next')}>➡️</span>}
    </div> */}

    {!loading ? 
        <div className="gridTemplate">
            {products.map((data:any, index) => <div className="productItem" key={data.id}>
                <img src={data.thumbnail} alt={data.title}/>
                <p>{data.title}</p>
            </div>)}
         </div>
         : <Modal
                open={loading}
            >
                    <CircularProgress sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                    }} size={80}/>
            </Modal>
    }

    <div className="Pagination">
            {page !== 0 && <span onClick={()=>handleChange('prev')}>⬅️</span>}
            {[...Array(Math.ceil(totalPage/9))].map((x:any,index:number) => 
                <span key={index} className={page === index ? "selectedPage": ""} onClick={()=>setPage(index)}>{index+1}</span>
            )}
            {page !== Math.floor(totalPage/9) && <span onClick={()=>handleChange('next')}>➡️</span>}
    </div>
    </>
}