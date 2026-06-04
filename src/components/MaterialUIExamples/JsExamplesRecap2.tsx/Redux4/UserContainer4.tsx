import React, { useEffect } from 'react'
import { fetchUserDetails } from './UserAction4'
import { connect } from 'react-redux'

function UserContainer4(props:any) {
    console.log(props)

    useEffect(() => {
        props.fetchUserssss()
    }, [])

  return (
    <div>UserContainer4</div>
  )
}

const mapStateToProps = (state:any) => {
    return {
        usersInfo: state.user
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchUserssss: () => dispatch(fetchUserDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer4)