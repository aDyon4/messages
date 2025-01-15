
import { ButtonGroup } from '@mui/material'
import { Chip } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout({user, logout}) {
  const { pathname } = useLocation();

  return (
    <>
      <div className='menu'>
        <ButtonGroup variant="contained" id="buttonBg" aria-label="Basic button group">
          <Link to="/"><Button variant={pathname == "/" ? "outlined" : "contained"}>Messages</Button></Link>
          <Link to="/users"><Button variant={pathname == "/users" ? "outlined" : "contained"}>Users</Button></Link>
          <Link to="/about"><Button variant={pathname == "/about" ? "outlined" : "contained"}>About</Button></Link>
        </ButtonGroup>
        {user ?
          <div className='email'>
            <Chip label={user.email} variant='contained'/>
            <Button variant='contained' onClick={logout}>Logout</Button>
          </div>
          : <Link to="/login"><Button variant={pathname == "/login" ? "outlined" : "contained"}>Login</Button></Link>
        }
      </div>
      <div className='page'>
          <Outlet />
      </div>
    </>
  )
}
