"use client";
import React, { useContext, useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const defaultValue: any = {};
const DataContext = React.createContext(defaultValue);

export const useContextElement = () => {
  return useContext(DataContext);
};

const Context = ({ children }: any) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const storedUserId = localStorage.getItem("id");
        const storedIsAdmin = localStorage.getItem("isAdmin");

        if (storedUserId) {
          setUserId(storedUserId);
        }

        if (storedIsAdmin) {
          setIsAdmin(storedIsAdmin === "true");
        }
      }
    } catch (error) {
      console.error("localStorage error:", error);
    }
  }, []);

  const data = {
    userId,
    isAdmin,
  };

  return (
    <Provider store={store}>
      <div>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
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
