import React from 'react'
import { useEffect, useState } from "react";
//import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { addDoc, collection } from "firebase/firestore";
import fireDB from '../bhojanconfig';
//import { toast } from "react-toastify";

function Cartpage() {  const {cartItems} =useSelector(state=>state.cartReducer)
const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = Number(temp) + Number(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  const placeOrder = async () => {
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
    };

    console.log(addressInfo);

    const orderInfo = {
      cartItems,
      addressInfo,
      email: JSON.parse(localStorage.getItem("currentUser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentUser")).user.uid,
    };

    try {
      setLoading(true);
      const result = await addDoc(collection(fireDB, "orders"), orderInfo);
      setLoading(false);
     // toast.success("Order placed successfully");
      handleClose()
    } catch (error) {
      setLoading(false);
     // toast.error("Order failed");
    }
  };


  return (
    <Layout loading={loading}>
    <table className="table mt-3">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.imageURL} height="80" width="80" />
              </td>

              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <FaTrash onClick={() => deleteFromCart(item)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

    <div className="d-flex justify-content-end">
        <h1 className="total-amount">Total Amount = {totalAmount} $/-</h1>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button onClick={handleShow}>PLACE ORDER</button>
      </div>
    </Layout>
  )
}

export default Cartpage