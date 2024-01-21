import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/Components/Login";
import { useAuth } from "@/context/context";
import UserDashboard from "@/Components/UserDashboard";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {currentUser} = useAuth()

  return (
    <>
      {!currentUser ? <Login /> : <UserDashboard/>}
    </>    
  );
}
