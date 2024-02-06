'use client'
import Clientes from "@/components/Clientes";
import Negocio from "@/components/Negocio";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [tipo,setTipo] = useState(true)

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-700 gap-12 p-12">
      <div className="flex  w-full justify-around h-20 items-center">
        <button className=" p-2 rounded-xl text-white  border-2 bg-gray-900" onClick={()=>{setTipo(!tipo)}}>Clientes</button>
        <button className=" p-2 rounded-xl text-white  border-2 bg-gray-900" onClick={()=>{setTipo(!tipo)}}>Negocio</button>
      </div>
      {
        tipo==true?<Clientes/>:<Negocio/>
      }
    </main>
  );
}

