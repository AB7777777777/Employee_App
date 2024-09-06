import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
  return (
      <div>
          <form>
          <h1>Add Information</h1>
          <TextField label="Name" variant="outlined"></TextField><br /><br />
          <TextField label="Age" variant="outlined"></TextField><br /><br />
          <TextField label="Department" variant="outlined"></TextField><br /><br/>
          <TextField label="Salary" variant="outlined"></TextField><br /><br />
          <Button variant='contained' type='submit' >Done</Button>
      </form>
      </div>
      
  )
}

export default Add