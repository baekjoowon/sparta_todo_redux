import { useDispatch, useSelector } from "react-redux"
import { deleteList, isDone } from "./../store.js"
import { Link } from 'react-router-dom'


function Modal(props){

    let list = useSelector((state)=>state.list);
    let dispatch = useDispatch();

    return(
      
      
          <div className='list-wrapper' key={list[props.i].id}>
         <div className='list'>
          <div>
          <Link to={`/detail/${list[props.i].id}`}>상세페이지</Link>
          
          <h2 className='todo-title'>{list[props.i].title}</h2>
          <div>{list[props.i].text}</div>
          </div>
          <div className='button-set'>
           
          <button className='todo-delete-button button' onClick={()=>{dispatch(deleteList(list[props.i].id));}}>
                삭제하기</button>
          
            {
              
              list[props.i].work == true
              ?<button className='todo-complete-button button' onClick={()=>dispatch(isDone(list[props.i].id))}>취소</button>
              :<button className='todo-complete-button button' onClick={()=>dispatch(isDone(list[props.i].id))}>완료</button>
              
            }
            
            
            </div>
         
      </div>
      </div>
       
       
       )
       
    
}

export default Modal;