import { useParams } from "react-router-dom";

const Dashboard =() =>{
    const {id} = useParams()
    return (
      <div>{`Article ${id}`}</div>
    )
  }
  
  export default Dashboard