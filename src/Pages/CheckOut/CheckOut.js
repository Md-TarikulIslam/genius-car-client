import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      phone,
      email,
      message,
    };
    if (phone.length < 10) {
      alert("Phone number should be more than 10 numbers");
    }
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert('Order placed successfully')
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleCheckOut}>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-3xl">Price: ${price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input w-full input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input w-full input-bordered"
          />
          <input
            name="phone"
            type="number"
            placeholder="Your Phone"
            className="input w-full input-bordered"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input w-full input-bordered"
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          name="message"
          id=""
        ></textarea>
        <input
          className="btn bg-orange-600 border-0"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
