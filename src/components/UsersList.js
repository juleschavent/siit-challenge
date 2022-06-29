import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { StoreContext } from '../context/store'
import { useFetch } from '../utils/UseQuerry'

const makeClass = makeStyles(() => ({
  userContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
  },
}))

const UsersList = () => {
  const classes = makeClass()
  const { users, userLoading } = useContext(StoreContext)
  return (
    <div>
      <h2>users list</h2>
      <div className={classes.userContainer}>
        {userLoading ? 'loading' : users && users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt="" />
            <p>{user.name}</p>
            <p>{user.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList
