import { useState, useEffect } from "react";
import { useAuth } from "../../../Context/auth";
import { Outlet } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import axios from "axios";


export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8000/api/admin/admin-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> :<Spinner color='red.500' />;
}
