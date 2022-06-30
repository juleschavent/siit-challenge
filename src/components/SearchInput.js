import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import Input from '@mui/material/Input'
import { StoreContext } from '../context/store'

const makeClass = makeStyles((theme) => ({
}))

const inputStyle = {
  // backgroundColor: '#F2F4F6',
  borderRadius: '4px',
  paddingLeft: '16px',
  '& ::placeholder': {
    fontSize: 16,
  },
  '&::before': {
    display: 'none',
  },
  '&::after': {
    display: 'none',
  },
}

const SearchInput = () => {
  const classes = makeClass()
  const {
    setIsSearch, users, setUsers, userData,
  } = useContext(StoreContext)

  const handleSearch = (e) => {
    if (e.target.value.length >= 2) {
      const tempUsers = []
      users.forEach((user) => {
        if (user.name.toLowerCase().indexOf(e.target.value) >= 0) {
          tempUsers.push(user)
        }
      })
      setUsers(tempUsers)
    } else {
      setUsers(userData)
    }
  }

  return (
    <div className={classes.container}>
      <Input
        autoFocus
        placeholder="Who are you looking for ?"
        sx={inputStyle}
        onChange={handleSearch}
        endAdornment={(
          <InputAdornment position="start" onClick={() => setIsSearch(false)} style={{ cursor: 'pointer' }}>
            <CloseIcon fontSize="8px" />
          </InputAdornment>
        )}
      />
    </div>
  )
}

export default SearchInput
