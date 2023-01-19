import React, {useState, useEffect} from "react";



const Home = () => {

	function createUser(){ //creo el usuario se usa una vez
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/Axminator`,
		{method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify([])
	})
	.then((response)=>response.json())
	.then((response)=>console.log(response))
	}
	
	useEffect(() =>{  // Primero creo el usuario y luego lo uso para traer la lista
		// createUser()
		getLista()
	}, [])


	function transporteDatos(){   //Guardo la lista en el usuario
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/Axminator`,
		{method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(listaTareas)
	  })
		.then((response)=>response.json())
		.then((response)=>console.log(response))
	}
	
useEffect(() => {    //Modifico la lista
    transporteDatos()
},listaTareas)


function getLista(){                    //Traigo la lista modificada del usuario
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/Axminator`,
	{method: 'GET'
  })
	.then((response)=>response.json())
	.then((response)=>setlistaTareas(response))
}
	
	
	
	
	
	
	
	
	const[tarea,setTarea]=useState("")
	const[listaTareas,setlistaTareas]=useState([])

	

	const handleSubmit	= (e) => {
	
	
	
	
		e.preventDefault()
		setTarea("")

		setlistaTareas([...listaTareas, { "label": tarea, "done": false }]);

		
	}
	console.log(listaTareas);


	const Borrar = (posicion)=>{
setlistaTareas(listaTareas.filter((item,index) => index !== posicion));

	}



	
	return (
		
		<>

		<h1 className="d-flex justify-content-center" >To Do List</h1>
		<form className="container" onSubmit={handleSubmit}>
  <div className="mb-3">
    
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" label="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTarea(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
{/* item sería cualquier dato, puede ser index también */}
<ul>
	
	{listaTareas.map((item,index) => (<li key={index}> {item.label}<button type="button" className="btn btn-outline-light" onClick={(()=>Borrar(index))} >X</button></li>))}
	
</ul>



</form>

<div>
	
</div>
</>
	);
};

export default Home;
