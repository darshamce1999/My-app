import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserInfo } from './Users/UsersAction'

function UsersContainer2(props:any) {
    useEffect(() => {
        props.fetchUserInfo()
    }, [])

  return (
    <>
        {props.usersInfo.loading ? 
            <h1>Loading...</h1>: 
            props.usersInfo.error? 
                <h1>Error</h1>: 
                props.usersInfo.data.map((d:any) => <p key={d.id}>{d.name}</p>)}
    </>
  )
}


  const mapStateToProps = (state: any) => {
        return {
            usersInfo: state.users
        }
    }

    const mapDispatchToProps = (dispatch: any) => {
        return {
            fetchUserInfo: () => dispatch(fetchUserInfo())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer2)