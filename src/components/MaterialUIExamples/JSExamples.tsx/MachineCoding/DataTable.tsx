import React, { useEffect, useState } from 'react'

const users = [
  {
    "id": 1,
    "name": "Emily Chen",
    "age": 28,
    "occupation": "Software Engineer"
  },
  {
    "id": 2,
    "name": "Ryan Thompson",
    "age": 32,
    "occupation": "Marketing Manager"
  },
  {
    "id": 3,
    "name": "Sophia Patel",
    "age": 25,
    "occupation": "Data Analyst"
  },
  {
    "id": 4,
    "name": "Michael Lee",
    "age": 41,
    "occupation": "CEO"
  },
  {
    "id": 5,
    "name": "Olivia Brown",
    "age": 29,
    "occupation": "Graphic Designer"
  },
  {
    "id": 6,
    "name": "Alexander Hall",
    "age": 38,
    "occupation": "Sales Representative"
  },
  {
    "id": 7,
    "name": "Isabella Davis",
    "age": 26,
    "occupation": "Teacher"
  },
  {
    "id": 8,
    "name": "Ethan White",
    "age": 35,
    "occupation": "Lawyer"
  },
  {
    "id": 9,
    "name": "Lily Tran",
    "age": 30,
    "occupation": "Nurse"
  },
  {
    "id": 10,
    "name": "Julian Sanchez",
    "age": 39,
    "occupation": "Engineer"
  },
  {
    "id": 11,
    "name": "Ava Martin",
    "age": 27,
    "occupation": "Journalist"
  },
  {
    "id": 12,
    "name": "Benjamin Walker",
    "age": 42,
    "occupation": "Doctor"
  },
  {
    "id": 13,
    "name": "Charlotte Brooks",
    "age": 31,
    "occupation": "HR Manager"
  },
  {
    "id": 14,
    "name": "Gabriel Harris",
    "age": 36,
    "occupation": "IT Consultant"
  },
  {
    "id": 15,
    "name": "Hannah Taylor",
    "age": 24,
    "occupation": "Student"
  },
  {
    "id": 16,
    "name": "Jackson Brown",
    "age": 40,
    "occupation": "Business Owner"
  },
  {
    "id": 17,
    "name": "Kayla Lewis",
    "age": 33,
    "occupation": "Event Planner"
  },
  {
    "id": 18,
    "name": "Logan Mitchell",
    "age": 37,
    "occupation": "Architect"
  },
  {
    "id": 19,
    "name": "Mia Garcia",
    "age": 29,
    "occupation": "Artist"
  },
  {
    "id": 20,
    "name": "Natalie Hall",
    "age": 34,
    "occupation": "Teacher"
  },
  {
    "id": 21,
    "name": "Oliver Patel",
    "age": 38,
    "occupation": "Software Developer"
  },
  {
    "id": 22,
    "name": "Penelope Martin",
    "age": 26,
    "occupation": "Writer"
  },
  {
    "id": 23,
    "name": "Quinn Lee",
    "age": 35,
    "occupation": "Entrepreneur"
  },
  {
    "id": 24,
    "name": "Rachel Kim",
    "age": 30,
    "occupation": "Dentist"
  },
  {
    "id": 25,
    "name": "Samuel Jackson",
    "age": 42,
    "occupation": "Lawyer"
  },
  {
    "id": 26,
    "name": "Tessa Hall",
    "age": 28,
    "occupation": "Graphic Designer"
  },
  {
    "id": 27,
    "name": "Uma Patel",
    "age": 39,
    "occupation": "Marketing Manager"
  },
  {
    "id": 28,
    "name": "Vincent Brooks",
    "age": 36,
    "occupation": "IT Consultant"
  },
  {
    "id": 29,
    "name": "Walter White",
    "age": 41,
    "occupation": "Engineer"
  },
  {
    "id": 30,
    "name": "Xavier Sanchez",
    "age": 33,
    "occupation": "Sales Representative"
  },
  {
    "id": 31,
    "name": "Yvonne Martin",
    "age": 29,
    "occupation": "Teacher"
  },
  {
    "id": 32,
    "name": "Zoe Lee",
    "age": 27,
    "occupation": "Data Analyst"
  },
  {
    "id": 33,
    "name": "Abigail Brown",
    "age": 34,
    "occupation": "Nurse"
  },
  {
    "id": 34,
    "name": "Caleb Harris",
    "age": 38,
    "occupation": "Business Owner"
  },
  {
    "id": 35,
    "name": "Diana Taylor",
    "age": 31,
    "occupation": "Event Planner"
  },
  {
    "id": 36,
    "name": "Eleanor Walker",
    "age": 40,
    "occupation": "CEO"
  }
]

function DataTable() {
    const [columns, setColumns] = useState<any[]>([])
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [rows, setRows] = useState<any[]>([])
    const [page, setPage] = useState<number>(0)

    const totalPages = Math.ceil(users.length / rowsPerPage)

    useEffect(() => {
        // const col = Object.keys(users[0]).map((val:string) => {
        //     let temp = val[0].toUpperCase() + val.slice(1)
        //     return {val: temp}
        // })

        setColumns(Object.keys(users[0]))
    }, [])

    useEffect(() => {
        setRows(users.slice(0, rowsPerPage))
        setPage(0)
    }, [rowsPerPage])

    useEffect(() => {
        setRows(users.slice(rowsPerPage*page, rowsPerPage*page + rowsPerPage))
    }, [page])
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {columns.map((data: any) => <th style={{textAlign: "start", paddingInline: "10px"}}>{data[0].toUpperCase() + data.slice(1)}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((data:any, index) => <tr key={index}>
                    {columns.map((col:string) => <td style={{paddingInline: "10px"}}>{data[col]}</td>)}
                </tr>)}
            </tbody>
        </table>
        <div>
            <select name="Show" id="" value={rowsPerPage} onChange={(e) => {
                console.log(e)
                setRowsPerPage(Number(e.target.value))
            }}>
                <option value={"5"}>Show 5</option>
                <option value={"10"}>Show 10</option>
                <option value={"20"}>Show 20</option>
            </select>
            <button disabled={page == 0} onClick={() => {
                setPage(page - 1)
            }}>Prev</button>
            <span>{`Page ${page + 1} of ${totalPages}` }</span>
            <button disabled={page == totalPages -1} onClick={() => {
                setPage(page + 1)
            }}>Next</button>
        </div>
    </div>
  )
}

export default DataTable