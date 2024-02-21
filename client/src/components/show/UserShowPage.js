import React, { useState, useEffect } from "react";

const UserShow = ({ user }) => {
    const [currentUserData, setUserData] = useState({})

    const createdAt = new Date(user.createdAt)
    const formattedDate = createdAt.toLocaleDateString()
    const userId = user.id

    const getUserData = async () => {
        try {
            const fetchedUserData = await fetch(`/api/v1/user/${userId}`)
            const parsedUserData = await fetchedUserData.json()
            setUserData(parsedUserData.user)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getUserData()
    }, [])


    return (
        <div>
            <h1>My Profile</h1>
            <ul>
                <li>Email: {user.email}</li>
                <li>User since: {formattedDate}</li>
            </ul>
        </div>
    )
}

export default UserShow