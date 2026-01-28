import { useParams, Link } from "react-router-dom";


const UserPage = () => {
    const userData=[
    {id:1,name:'anil'},
    {id:2,name:'sunil'},
    {id:3,name:'satish'}
]
//   const { id } = useParams(id); // URL se id capture karega

  // Agar id nahi hai to default value show karo
//   const displayId = id || "Default Value";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h2>User ID: {displayId}</h2> */}
      {userData.map((a,b)=>{
        return <h2 key={b}><Link to={'/users/'+a.id}>{a.name}</Link></h2>
      })}
    </div>
  );
};

export default UserPage;