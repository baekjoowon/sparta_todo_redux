
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Detail(){

    
    let {id} = useParams();
    let list = useSelector((state)=>state.list);
    return(
    <div>
        <div>
            <div>{id}</div>
            <Link to = '/'> 이전으로</Link>
        </div>
        <div>
            <h1>{list[id].title}</h1>
            <h4>{list[id].text}</h4>
        </div>
    </div>
    )
}

export default Detail;