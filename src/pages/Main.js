import Modal from './../components/Modal.js';
import { useDispatch, useSelector } from "react-redux"
import { addList, deleteList, isDone } from "../store.js"
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail.js';

function Main(){

    let list = useSelector((state)=>state.list);
    let dispatch = useDispatch();
    let [title,setTitle] = useState();
    let [text,setText] = useState();
    let [work,setWork] = useState(false);
    let [id,setId] = useState(0);

    return(
        <div className="App">
  <div className='body'>
  <nav className="nav_bar">
    <div>
    <h4>My Todo List</h4>
    </div>
    <div className="react">
    <h4>React</h4>
    </div>
  </nav>
  <form className='add' onSubmit={(e)=>e.preventDefault()}>
    <div className='input-group'>
    <label className='label'> 제목</label>
    <input type="text" value={title} name="title" className="add-input" onChange={(e)=>setTitle(e.target.value)} />
    <label className='label'> text</label>
      <input type="text" value={text} name="text" className="add-input" onChange={(e)=>setText(e.target.value)} />
    </div>
    <button className='add-button' onClick={()=>{
      if(!title){
        alert('제목입력하세요')
      }
      else{
        if(!text){
          alert('내용입력하세요')
        }
        else{
          setId(parseInt(id+1));
          dispatch(addList({id,title,text,work}));
          setText('');
          setTitle('');
          
          
          

          
          

        }
        
      }
      
      } }>
        추가하기</button>
  </form>
    

  <div className='show'>
    <div className='list-container'>

     

    <h2>Working..🔥</h2>
    
    {
    
    list.map(function(a,i){
      return list[i].work==false
    ?<Modal list={list} i={i} >
    </Modal>
    :null;
    })

    }
    </div>

  <div className='list-container'>
  <h2> Done..! 🎉</h2>
  
    
      
    {
    
    list.map(function(a,i){
      return list[i].work==true
    ?<Modal list={list} i={i}>
    </Modal>
    :null;
    })

    }
    
    </div>
      
      
    
    
  

</div>
</div>
</div>
);
    
}

export default Main;