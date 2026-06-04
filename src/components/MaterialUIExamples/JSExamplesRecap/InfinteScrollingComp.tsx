import { useCallback, useEffect, useRef, useState } from "react"

export const InfinteScrollingComp = () => {
    const [comments, setComments] = useState<any>([])
    const [loadPage, setLoadPage] = useState(1)
    const observer = useRef<IntersectionObserver>()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${loadPage}`)
            .then(data=>data.json())
            .then((data:any) =>{
                return setComments([...comments, ...data])
            })
    }, [loadPage])

    const lastElement = useCallback((node:any)=>{
        if(observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting) {
                setLoadPage(prev => prev+1)
            }
        }, {threshold:0.8})

        if(node) {
            observer.current.observe(node)
        }
    }, [])

    return <>
        {comments.map((data:any, index:number)=> {
            if(comments.length == index+1) {
                return <p ref={lastElement} style={{padding:"20px"}}>{data.name}</p>
            } else {
                return <p style={{padding:"20px"}}>{data.name}</p>
            }
        })}
    </>
}