function AllMeetupsPage(props){
    const fruits = props.fruits
    const veggies = props.veggies
    
    const listItems = fruits.map((fruit) => <li key={fruit.toString()}> {fruit} </li> );
    const listItems1 = veggies.map((veg) => <li key={veg.toString()}> {veg} </li> );
    
    return (
    <div className="new">  
    <div className="row"> 
        <div className="column"> 
                <img src = 'https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables-1024x683.jpg' alt="Logo" 
                width="600" height="600"/> 
        </div>
        <div className="column"> 
                <img src = 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6' alt="Logo" 
                width="600" height="600"/> 
        </div>
    </div>  
        <div className="move"> 
        <h1> FRUITS </h1>
             
            <ul> 
            {listItems}
            </ul>
        <h2> VEGETABLES </h2>
            <ul>
            {listItems1}
            </ul>
        </div>   
     </div>
    );

}

export default AllMeetupsPage;

