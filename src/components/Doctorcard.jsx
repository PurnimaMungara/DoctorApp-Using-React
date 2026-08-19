

function Doctorcard({name,specialization,gender}) {
  return (
    <div className='card'>
        <img src="https://i.pinimg.com/736x/b2/da/6b/b2da6b2ee9741aac614891aa9e581fee.jpg" />
      
        <h1>{name}</h1>
        <p>{specialization}</p>

        <p>{gender}</p>
        <button>view details</button>
    </div>
   
  )
}

export default Doctorcard