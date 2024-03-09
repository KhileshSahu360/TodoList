import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';

const Task = ({successTask,bg,history,success,taskName,deleteTask,id}) => {

  return (
      <li style={history?success?{backgroundColor:'rgba(83, 255, 106, 0.432'}:{backgroundColor:'rgba(255, 0, 0, 0.253)'}:success?{backgroundColor:'rgba(83, 255, 106, 0.432'}:{backgroundColor:'white'}}>
      <div className="name_right">
        <AddTaskIcon className="success" onClick={()=>successTask(id,history)}/>
        <label htmlFor="">{taskName}  </label>
      </div>
       <div className="delete_icon">
        {!history?<i className="fa-solid fa-trash-can" onClick={()=>deleteTask(id)}></i>:success ? <span style={{fontSize:'.8rem'}}>Completed</span>:<span style={{fontSize:'.8rem'}}>Not-Completed</span>}
      </div>
    </li>
  )
}

export default Task
