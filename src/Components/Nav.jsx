import React, { useState } from "react";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import history from '../assets/history.png';
import task from '../assets/task.png';


const Nav = ({menuToggle}) => {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const taskText = 'Tasks';
  const historyText = 'History';
  return (
    <div className="nav">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        sx={{ justifyContent: 'flex-start',gap:'20px',flexDirection:'row' }}
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          onClick={()=>menuToggle('Task')}
          value="one"
          label={
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={task} style={{ height: '18px', width: '18px' }} alt="unavailable" />
              <Typography variant="body1" style={{textTransform:'capitalize',fontWeight:'bold'}}>{taskText.toLocaleLowerCase()}</Typography>
            </Box>
          }
        />
        <Tab
          onClick={()=>menuToggle('History')}
          value="two"
          label={
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={history} style={{ height: '18px', width: '18px' }} alt="unavailable" />
              <Typography variant="body1" style={{textTransform:'capitalize',fontWeight:'bold'}}>{historyText.toLocaleLowerCase()}</Typography>
            </Box>
          }
        />
      </Tabs>
    </div>
  );
};

export default Nav;
