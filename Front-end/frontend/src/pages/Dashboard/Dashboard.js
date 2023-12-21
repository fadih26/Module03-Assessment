import { useParams } from "react-router-dom";

const Dashboard =() =>{
    const {id} = useParams()
    return (
      <div>Dashboard</div>
    )
  }
  
  export default Dashboard