'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Clientes(){
 const clientes = [
  {
    id:1,
    nombre:'Nacho',

    rut:'espalda-biceps',
    pago:false,
    dias:5
  },{
    id:2,
    nombre:'Nico',

    rut:'pecho-tricep',
    pago:true,
    dias:5
  },{
    id:3,
    nombre:'Cande',

    rut:'piernas-hombros',
    pago:false,
    dias:3
  }
]
const [filt,setFilt] = useState('')
const [filtrados,setFiltrados] = useState([])
const [lunes,setLunes] = useState(false)
const [martes,setMartes] = useState(false)
const [miercoles,setMiercoles] = useState(false)
const [jueves,setJueves] = useState(false)
const [viernes,setViernes] = useState(false)
useEffect(()=>{
  if(filt.length>0){
    let filtrados = clientes.filter((e)=>{
      return e.nombre==filt
    })
    setFiltrados(filtrados)
  }
  else{
    let filtrados= clientes
    setFiltrados(filtrados)
  }
},[filt])


 return(
  <div className="w-full flex flex-col justify-center items-center gap-2">
   <input className="p-2 w-1/2 rounded bg-gray-900 text-white" onChange={(e)=>{setFilt(e.target.value)}} value={filt} placeholder="nombre"></input>
{
  filtrados.map((cliente)=>{
    return(
      <div key={cliente.id} className="w-full h-52 p-8 bg-gray-900 border-2 border-blue-900 rounded-xl gap-2 flex flex-col">
        <div className="flex w-full justify-around">
          <h1 className="text-white">{cliente.nombre +' '+'#'+ cliente.id}</h1>
          <button onClick={()=>{
            clientes[cliente.id]=!cliente.pago
          }} className={cliente.pago?'p-2 bg-green-700 rounded-xl':'p-2 bg-red-700 rounded-xl'}>{cliente.pago?'Pagado':'No pagado'}</button>
        </div>
        <p className="text-white">Rutina: {cliente.rut}</p>
        <p className="text-white">Dias: {cliente.dias}</p>
        <div className="flex w-full gap-2">
          <button onClick={()=>{cliente.id==2?setLunes(!lunes):''}} className={`text-white p-1 rounded-full border border-slate-100 ${cliente.id==2&lunes?'bg-green-500':''}`}>L</button>
          <button onClick={()=>{cliente.id==2?setMartes(!martes):''}} className={`text-white p-1 rounded-full border border-slate-100 ${cliente.id==2&martes?'bg-green-500':''}`}>M</button>
          <button onClick={()=>{cliente.id==2?setMiercoles(!miercoles):''}} className={`text-white p-1 rounded-full border border-slate-100 ${cliente.id==2&miercoles?'bg-green-500':''}`}>M</button>
          <button onClick={()=>{cliente.id==2?setJueves(!jueves):''}} className={`text-white p-1 rounded-full border border-slate-100 ${cliente.id==2&jueves?'bg-green-500':''}`}>J</button>
          <button onClick={()=>{cliente.id==2?setViernes(!viernes):''}} className={`text-white p-1 rounded-full border border-slate-100 ${cliente.id==2&viernes?'bg-green-500':''}`}>V</button>
        </div>
      </div>
    )
  })
}
  </div>
 )
}