import React, { useEffect, useRef, useState } from "react";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Task from "./Task";
import Swal from 'sweetalert2'

const Hero = ({menuValue}) => {
  const [inputValue, setInputValue] = useState("");
  const[task,setTask] = useState([]);
  const[history,setHistory] = useState([]);
  const inputRef = useRef(null);
  const[border,setBorder] = useState({
    border:'2px solid # #c2c1c1'
  })
  const onFocusHandler = () =>{
    setBorder({border:'2px solid green'});
  }
  const oneBlurHandler = () =>{
    setBorder({border:'2px solid #c2c1c1'});
  }
  const addTask = () =>{
    if(inputValue != ""){
      setTask((prevData)=>{
        const id = task.length + 1;
        const taskObject = {id:id,name:inputValue,success:false};
        const newTask = [...prevData,taskObject];
        return newTask;
      })
      Swal.fire({
        title: 'Success',
        text: 'Task Successfully Added',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
      setInputValue('');
    }else{
      inputRef.current.focus();
      Swal.fire({
        title: 'Error!',
        text: 'Please Add Task In Input Field!',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
    // console.log(task)
  }
  const deleteTask = (id) =>{
    const afterDeleteTask = task.filter(e=>{
      if(id===e.id){
        const newHistory = {
          id : e.id,
          name : e.name,
          success : e.success
        }
        setHistory((prevElm)=>{
           return [...prevElm,newHistory]
        }
        );
        return false;
      }
      return true;
    })
    setTask(afterDeleteTask); 
    Swal.fire({
      title: 'Success!',
      text: 'Task Is Successfully Deleted!',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }
  const successTask = (ids,history) => {
    if(!history){
      setTask((prevData)=>{
        return prevData.map((elm)=>{
          const status = !(elm.success);
          const bgStatus = !(elm.bg);
          return elm.id===ids?{...elm,success:status}:elm
        })
      })
      Swal.fire({
        title: 'Hurrey!',
        text: 'Hurray! You have completed your task!',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
    }
  }
  return (
    <>
      <div className="hero">
        {menuValue ? <div className="input_field" style={border}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            name=""
            ref={inputRef}
            id=""
            placeholder="Enter your Task"
            onFocus={onFocusHandler}
            onBlur={oneBlurHandler}
          />
          <AddSharpIcon className="add_task" onClick={addTask} />
        </div> : 
        <div className="history_title" >
          <h3 style={{textAlign:'center',color:"purple",paddingBottom:'3px'}}>History</h3>
        </div>
        }
        {menuValue ? <ul className="li_container">  
          {task.length > 0 ? task.map((elm,index)=>{
            return(
              <Task key={index} successTask={successTask} success={elm.success} taskName={elm.name} history={false} id={elm.id} deleteTask={deleteTask}/>
            )
          }):
            <h3>No Task Found!</h3>
          }
          
        </ul>:
        <ul className="li_container">
          {history.length>0 ?history.map((elm,index)=>{
            return(
              <Task key={index} taskName={elm.name} history={true} success={elm.success} id={elm.id} deleteTask={deleteTask} successTask={successTask}/>
            )
          }):
            <h3>No Activity!</h3>
          }
        </ul>
        }
      </div>
    </>
  );
};

export default Hero;
