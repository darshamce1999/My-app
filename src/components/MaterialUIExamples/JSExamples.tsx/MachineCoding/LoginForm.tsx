import React, { useEffect, useState } from 'react'

function LoginForm() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password:'',
    })

    useEffect(() => {
        const regex = /^[a-zA-Z0-9\.]+\@[a-zA-Z]+\.[a-zA-z]{2,}$/
        if(!form.email) {
            setError(prev => {
                return {...prev, email:"Email is required"}
            })
        } else if(regex.test(form.email)) {
            setError(prev => {
                return {...prev, email:""}
            })
        } else {
            setError(prev => {
                return {...prev, email:"Email is not valid"}
            })
        }

        if(!form.password) {
            setError(prev => {
                return {...prev, password:"Password is required"}
            })
        } else if(form.password.length <= 6) {
            setError(prev => {
                return {...prev, password:"Please set the strong password"}
            })
        } else {
            setError(prev => {
                return {...prev, password:""}
            })
        }
    }, [form])

  return (
    <div>
        <input type='text' placeholder='Email' value={form.email} onChange={(e) => {
            setForm((prev) => {
                return {...prev, email: e.target.value}
            })
        }}/>
        <br />
        {error.email && <p>{error.email}</p>}
        <input type='password' placeholder='Password' value={form.password} onChange={(e) => {
            setForm((prev) => {
                return {...prev, password: e.target.value}
            })
        }}/>
        <br />
        {error.password && <p>{error.password}</p>}
    </div>
  )
}

export default LoginForm