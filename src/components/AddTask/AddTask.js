import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SaveIcon from '@mui/icons-material/Save';
import SavedTask from '../SavedTask/SavedTask';
import './AddTask.css'

const AddTask = () => {
  const [inputTask,setInput]=useState('');
  const [tasksList,setTaskList]=useState([]);

  console.log(inputTask);

  const creatTask=(e)=>{
    e.preventDefault();
    if(!inputTask){
      console.log('No Task to be added.')
    }
    // else if(){

    // }
    else{
      const input={id:new Date().getTime().toString(), name: inputTask};
      setTaskList([...tasksList,input]);
      setInput('');
    }
  }

  return (
    <>
    <div className="heading">
        <h1 style={{color:"#141414"}}>To Do React App</h1>
    </div>
    <h2 style={{color:"#141414"}}>Create Task</h2>
    <Box sx={{width: '100%'}}>
          <Grid container spacing={0}>
            <Grid xs={11}>
                <input className="addTaskInput" type="text" value={inputTask} onChange={(e)=>setInput(e.target.value)}/>
            </Grid>
            <Grid xs={1}>
              <div className="createTaskbtn">
                <Button sx={{
                  height:'42px',
                  margin:'0px 12px',
                  background:"#565656",
                  width:'80%'
                }}
                variant="contained" startIcon={<SaveIcon sx={{marginRight:'2px'}} />} onClick={creatTask}>
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
    </Box>
    <SavedTask tasksList={tasksList}/>
    </>
  );
};

export default AddTask;