import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Dashboard = (props) => {
  console.log(props)
const [customerData,setCustomerData]=useState(props.data);
 
console.log("d",customerData.resultObj)


  return (
    <>
      <h1>Customer List</h1>
      <div>
        <ul>
          {customerData.resultObj.map((item, i) => {
            return <li key={i}>
              <Link href={"/customer/"+item._id}> {item.firstName}</Link>
              </li>;
          })}
        </ul>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:1998/api/customer");
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
export default Dashboard