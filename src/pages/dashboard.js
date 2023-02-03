import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  
  const [customerData, setCustomerData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:1998/api/customer").then((response) => {
        if(response && response.data && response.data.resultObj)
      setCustomerData(response.data.resultObj);
    });
  }, []);

  const displayCustomers = customerData.map(item=>{
    <li key={item._id}>
        {item.firstName}
      </li>
  })
  {console.log("displayCustomers1111", displayCustomers)}
  return (
    <>
    <h1>Customer List</h1>
      <div>
        <ul>
            
      </ul>
      </div>
    </>
  );
};
export default Dashboard