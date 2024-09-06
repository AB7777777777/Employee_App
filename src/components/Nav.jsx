import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' align="left" sx={{flexGrow:3}}>MyApp</Typography>
                    <Link to='Add'>
                        <Button variant='contained'>Add</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant='contained'>View</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav