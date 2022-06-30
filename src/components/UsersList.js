/* eslint-disable no-nested-ternary */
import { makeStyles } from '@mui/styles'
import React, { useContext, useRef, useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import clsx from 'clsx'
import { StoreContext } from '../context/store'
import User from './User'
import SearchInput from './SearchInput'

const makeClass = makeStyles((theme) => ({
  section: {
    padding: '100px 0',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 24,
    '& h2': {
      marginRight: 16,
    },
  },
  userContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
  },
  searchIcon: {
    cursor: 'pointer',
    display: 'block',
    visibility: 'visible',
  },
  searchInput: {
    visibility: 'visible',
    transform: 'translateX(0)',
    opacity: 1,
    transition: 'all .5s ease',
  },
  hide: {
    visibility: 'hidden',
    opacity: 0,
    transform: 'translateX(500px)',
  },
  noMatch: {
    textDecoration: 'underline',
    color: theme.palette.text.error,
  },
}))

const UsersList = () => {
  const classes = makeClass()
  const {
    users, userLoading, isSearch, setIsSearch,
  } = useContext(StoreContext)

  const inputRef = useRef()

  const handleSearch = () => {
    setIsSearch(true)
    setTimeout(() => {
      inputRef.current.children[0].children[0].children[0].focus()
    }, 500)
  }

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" id="users">
        <div className={classes.searchContainer}>
          <Typography variant="h5" component="h2" color="textPrimary">Users</Typography>
          {!isSearch && (
          <div className={clsx(classes.searchIcon)}>
            <SearchIcon color="primary" onClick={handleSearch} />
          </div>
          )}
          <div className={clsx(classes.searchInput, !isSearch && classes.hide)} ref={inputRef}>
            <SearchInput />
          </div>
        </div>
        <div className={classes.userContainer}>
          {userLoading ? 'loading' : (
            users && users.length >= 1 ? (
              users.map((user) => (
                <User user={user} key={user.id} />
              ))
            ) : (
              <Typography className={classes.noMatch}>No user matches your search</Typography>
            )
          )}
        </div>
      </Container>
    </section>
  )
}

export default UsersList
