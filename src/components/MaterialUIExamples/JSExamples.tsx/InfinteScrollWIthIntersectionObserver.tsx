import { useCallback, useEffect, useRef, useState } from "react";

export const InfinteScrollWIthIntersectionObserver = () => {
    const [data, setData] = useState([]);
    const [addMoreData, setAddMoreData] = useState(1);
    const [isloading, setloading] = useState(false)
    const lastElement = useRef<HTMLHeadingElement>(null)
    const observer = useRef<IntersectionObserver | null>() //to solve multiple re renders

    useEffect(()=>{
        setloading(true)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${addMoreData}`)
            .then((res)=>res.json())
            .then((data:[])=>setData((prev) => {
                return [...prev, ...data]
            }))
            .finally(()=>{
                setloading(false)
            })
    }, [addMoreData])

    function observing(entries:any) {
        console.log(entries)
            if(entries[0].isIntersecting && data.length !=0) {
                setAddMoreData((prev)=>prev+1)
            }
    }

    useEffect(()=>{
        if(observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver(observing, {threshold:1.0})
        if(lastElement.current) {
            observer.current.observe(lastElement.current)
        }

        // return () =>{
        //     if(lastElement.current) {
        //         observer.current?.unobserve(lastElement.current)
        //     }
        // }
    })

    return <> 
            {data.map((entry:any, index)=>{ 
                if(data.length == index +1) {
                    return <h3 ref={lastElement} style={{padding:"20px"}} key={index}>{index+1} {entry.email}</h3>
                } else {
                    return <p style={{padding:"20px"}} key={index}>{index+1} {entry.email}</p>
                }
            })}
            <div>{isloading && 'Loading...'}</div>
        </>
}






export const InfinteScrollIntersectionObserverWithUseCallBack = () => {
    const [data, setData] = useState([]);
    const [addMoreData, setAddMoreData] = useState(1);
    const [isloading, setloading] = useState(false)
    const observer = useRef<IntersectionObserver>();


    const lastElement = useCallback((node:any)=>{
        if(isloading) {
            return
        }

        if(observer.current)  observer.current.disconnect()

        observer.current = new IntersectionObserver((entry)=>{
            if(entry[0].isIntersecting) setAddMoreData((prev) => prev +1)
        }, {threshold:1.0})

        if(node) observer.current.observe(node)

    }, [])
    

    useEffect(()=>{
        setloading(true)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${addMoreData}`)
            .then((res)=>res.json())
            .then((data:[])=>setData((prev) => {
                return [...prev, ...data]
            }))
            .finally(()=>{
                setloading(false)
            })
    }, [addMoreData])

    return <> 
            {data.map((entry:any, index)=>{ 
                if(data.length == index +1) {
                    return <h3 ref={lastElement} style={{padding:"20px"}} key={index}>{index+1} {entry.email}</h3>
                } else {
                    return <p style={{padding:"20px"}} key={index}>{index+1} {entry.email}</p>
                }
            })}
            <div>{isloading && 'Loading...'}</div>
        </>
}