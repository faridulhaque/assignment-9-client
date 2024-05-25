"use client";
import React, { useContext } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const defaultValue: any = {};
const dataContext = React.createContext(defaultValue);

export const useContextElement = () => {
  return useContext(dataContext);
};

const Context = ({ children }: any) => {
  let userId;
  try {
    userId =
      typeof window !== "undefined"
        ? // ? JSON.parse(localStorage.getItem("user") || "")
          localStorage.getItem("id") || ""
        : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }

  const data = {
    userId,
  };

  return (
    <Provider store={store}>
      <div>
        <dataContext.Provider value={data}>{children}</dataContext.Provider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Provider>
  );
};

export default Context;
