import React, { useEffect, useRef, useState } from 'react'

function InfiniteScrolling2() { 
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const ref = useRef<IntersectionObserver>()

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${page}`)
            .then(dat => dat.json())
            .then((res:[]) => {
                setData(prev => [...prev, ...res])
                setLoading(false)
            })
    }, [page])

   const callBackRef = (node:any) => {
    if(loading) {
        return
    }

    if(ref.current) ref.current.disconnect()

    ref.current = new IntersectionObserver((entry) => {
        if(entry[0].isIntersecting) {
            setPage(prev => prev+1)
        }
    }, {threshold: 0.3})

    if(node) ref.current.observe(node)
   }

//    useEffect(() => {
//     return () => {
//         // ref.current?.unobserve()
//     }
//    }, [])

  return (
    <div>
        {data.map((item:any, index) => {
            if(data.length == index+1) {
                return <p key={index} ref={callBackRef}>{item.email}</p>
            } else {
                return <p key={index}>{item.email}</p>
            }
        })}
        {loading && <p>Loading...</p>}
    </div>
  )
}

export default InfiniteScrolling2