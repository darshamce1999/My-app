import { connect } from "react-redux"
import { fetchUser } from "./Users/UserRequestAction"
import { useEffect } from "react"

const UserComp = (props: any) => {

    useEffect(()=>{
        props.fetchUser()
    }, [])

    return <>
        {props.userData.isLoading && <p>Loading...</p>}
        {props.userData.err && <p>{props.userData.err}</p>}
        {props.userData.data && props.userData.data.map((item:any)=> {
            return <p>{item}</p>
        })}
    </>
}

const mapStateToProps = (state: { user: any }) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComp)