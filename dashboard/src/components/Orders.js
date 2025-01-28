import React from "react";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <button className="btn">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Orders;