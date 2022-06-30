import { makeStyles } from '@mui/styles'
import React, {
  useContext, useEffect, useRef, useState,
} from 'react'
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

  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e) => {
    setInputValue(e.target.value)
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

  const handleClose = () => {
    setInputValue('')
    setUsers(userData)
    setIsSearch(false)
  }

  return (
    <div className={classes.container}>
      <Input
        autoFocus
        placeholder="Who are you looking for ?"
        sx={inputStyle}
        onChange={handleSearch}
        value={inputValue}
        endAdornment={(
          <InputAdornment position="start" onClick={handleClose} style={{ cursor: 'pointer' }}>
            <CloseIcon fontSize="8px" />
          </InputAdornment>
        )}
      />
    </div>
  )
}

export default SearchInput
