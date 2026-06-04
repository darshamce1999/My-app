import { useEffect, useState } from "react"

export const InfinteScrollComp = () => {
    const [data, setData] = useState([]);
    const [loadMoreData, setLoadMoreData] = useState(0);
    const [isloading, setloading] = useState(false)

    useEffect(()=>{
        let offset = loadMoreData * 9
        setloading(true)
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=9`)
            .then((res)=>res.json())
            .then((data:[])=>setData((prev) => {
                return [...prev, ...data]
            }))
            .finally(()=>{
                setloading(false)
            })
    }, [loadMoreData])

    function lisitnerFunction() {
        if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
            setLoadMoreData((prev)=>prev+1)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', lisitnerFunction)

        // console.log("innerHeight " + window.innerHeight)
        // console.log("scrollHeight " + document.documentElement.scrollHeight)
        // console.log("scrollTop " + document.documentElement.scrollTop)
        return () => {
            window.removeEventListener('scroll', lisitnerFunction)
        }
    }, [])

    return <> 
            {data.map((entry:any, index)=><p>{index+1} {entry.title}</p>)}
            {isloading && 'Loading...'}
        </>
}