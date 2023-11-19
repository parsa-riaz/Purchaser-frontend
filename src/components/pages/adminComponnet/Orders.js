import React, { useEffect, useState } from "react";
import {
  getAllOrdersAdmin,
  getSingleOrder,
  updateStatus,
} from "../../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Orders() {
  const { token, user } = useSelector((state) => state.auth);
  const { loading, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownItems = ["Pending", "Processing", "Shipped", "Delivered"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(getAllOrdersAdmin({ token, user }));
  }, [dispatch]);
  const handleStatus = ({ status, id }) => {
    dispatch(updateStatus({ token, status, user, id }));
    dispatch(getAllOrdersAdmin({ token, user }));
  };
  return (
    <div className="flex justify-end text-center text-lg w-full min-h-screen h-full">
      <div className="bg-red-800 w-[80%] h-100 text-white">
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-red-800  h-100 ">
            <div class="text-gray-900">
              <div class="p-4 flex">
                <h1 class="text-3xl">Orders</h1>
              </div>
              <div class="px-3 py-4 flex justify-center">
                <table class="w-full text-md bg-white shadow-md rounded mb-4">
                  <thead>
                    <tr className="text-lg h-[4rem]">
                      <th>#ID</th>
                      <th>User ID</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="px-4">
                    {!orders ? (
                      <tr className="text-center text-xl w-full">
                        <div>User not found</div>
                      </tr>
                    ) : (
                      orders.map((order) => (
                        <tr
                          key={order._id}
                          className="border-b border text-lg gray-500 p-4 h-[4rem] text-center"
                        >
                          <td>{order._id}</td>
                          <td>{user._id}</td>
                          <td>{order.total}</td>
                          <td>{order.status}</td>
                          <td>
                            <div className="relative ">
                              <button
                                onClick={toggleDropdown}
                                className="justify-between w-auto  font-bold py-2 px-4 rounded inline-flex items-center"
                              >
                                <span> {order.status}</span>
                                <span>
                                  {" "}
                                  {isOpen ? (
                                    <FontAwesomeIcon
                                      icon={faAngleUp}
                                      className="px-4"
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faAngleDown}
                                      className="px-4"
                                    />
                                  )}
                                </span>
                              </button>

                              <ul
                                className={`absolute w-full  ${
                                  isOpen ? "block" : "hidden"
                                } bg-white text-gray-800 pt-1`}
                              >
                                {dropdownItems.map((item, index) => (
                                  <li
                                    key={index}
                                    className="bg-navy text-white/90 border py-2 px-4 cursor-pointer"
                                    onClick={(e) => {
                                      setIsOpen(false);
                                      handleStatus({
                                        status: item,
                                        id: order._id,
                                      });
                                    }}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </td>
                          <td className="flex justify-center items-center gap-2">
                            <button
                              onClick={() => {
                                let id = order._id;
                                navigate(`/order/${id}`);
                              }}
                              className="bg-navy text-white py-1 px-2 hover:bg-red-700"
                            >
                              View Order
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
