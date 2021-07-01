function Card(props){


    return(
        <>
        <h3>{props.url}</h3>

      <img src={"http://127.0.0.1:3000/uploads/" + props.url} alt=""/>

     <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus est debitis eum, modi id qui cum nam delectus fugit!</div>
         </>
    )

}


export default Card

