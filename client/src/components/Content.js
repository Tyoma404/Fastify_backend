import Card from "./Card"

function Content (props){


let data = props.imgUrls.map((val)=><li><Card url={val}/></li> )


    return(
        <>

        
<div className="main_container">
  <ul className="cont">
   {data}
  </ul>
  
</div>

<div className="footer">
  
</div>
        </>

    )
}

export default Content