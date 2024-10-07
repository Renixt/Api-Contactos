
async function loadContacts(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    const list = await res.json();
    return list;
}
async function Table(){
    
    const list = await loadContacts(); //se ejecuta cuando se abre la pagina
    
    return(
        <div>
        {list.data.map((item) =>

        <div className="bg-red-200 m-4"> {item.nombre} - {item.numero} </div>
        )}
        </div>
        
    )
}

export default Table