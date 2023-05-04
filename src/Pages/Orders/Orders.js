import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-5xl">You have {orders.length} orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                <button className="btn btn-ghost">X</button>
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
           }
           {/* <OrderRow></OrderRow> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
