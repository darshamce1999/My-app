import React, { useEffect, useState } from 'react'
import style from "./JobBoard.module.css"
import { Button } from '@mui/material'

function JobBoard() {
    const [jobIds, setJobIds] = useState([])
    const [loading, setLoading] = useState(false)

    const [jobs, setJobs] = useState<any[]>([])
    const [jobCount, setJobCount] = useState(0)
    const [jobLoading, setJobLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then(data => data.json())
            .then(data => setJobIds(data))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if(jobIds.length > 0) {
            setJobLoading(true)
            const res = jobIds.slice(jobCount, jobCount+5).map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
            Promise.all(res)
                .then(jobsRes => {
                    const res = jobsRes.map(job => job.json())
                    Promise.all(res)
                        .then((data:any) => {
                            const temp:any[] = data.map((slice:any) => {
                                return {...slice, time: new Date(slice.time).toLocaleString()}
                            })
                            setJobs([...jobs, ...temp])

                            setJobLoading(false)
                        })
                })
        }
    }, [jobIds, jobCount])

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         if (jobIds.length === 0) return;

    //         try {
    //             const selectedIds = jobIds.slice(jobCount, jobCount + 5);

    //             const responses = await Promise.all(
    //             selectedIds.map(id =>
    //                 fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //             ));

    //             const data:any = await Promise.all(responses.map(res => res.json()));
    //             setJobs(data);
    //         } catch (error) {
    //             console.error("Failed to fetch jobs:", error);
    //         }
    //     };

    //     fetchJobs();
    // }, [jobIds, jobCount]);

  return (
    <div className={style.root}>
        <h3 style={{color: "orange"}}>News Jobs Board</h3>
        {loading && <div>Loading...</div>}
        <div>
            {jobs.map((job:any) => <>
                <div className={style.jobWrapper}>
                    <p key={job.id}>
                        <a style={{color:"black"}} href={job.url} target='_blank'>j{job.title}</a>
                    </p>
                    <div>
                        By {job.by} {job.time}
                    </div>
                </div>
            </>)}
        </div>
        {(jobs.length < jobIds.length) && <Button disabled={jobLoading} color='warning' variant='contained' onClick={() => setJobCount(prev => prev + 5)}>{jobLoading ? "Loading...": "Load More Jobs"}</Button>}
    </div>
  )
}

export default JobBoard