function AllMeetupsPage(props){
    const names = props.names
    const listItems = names.map((namer) => <li key={namer.toString()}> {namer} </li> );
    return (
    <div className="new">  
        <h1> FRUITS </h1>
            <ul> 
            {listItems}
            </ul>
     </div>
    );

}

export default AllMeetupsPage;

