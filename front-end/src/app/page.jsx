import Image from "next/image";
import Appname from "./components/appname";
import Table from "./components/table";
import Addcontact from "./components/addcontact";


export default function Home() {
  return (//esto usa tailwind para poner el css aqui mismo
    <>
      <Appname />   
      <Addcontact/>
      <Table/>   
      
        
    </>
  )
}