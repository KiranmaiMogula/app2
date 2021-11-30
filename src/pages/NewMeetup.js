import img from '../img1.jpeg'
 
function NewMeetupsPage(props){
    const frozen = props.frozen
    const listFrozen = frozen.map((froze) => <li key={froze.toString()}> {froze} </li>)
    return <div className="new"> 
        <img src={img} alt="LOGO" />
        <h1> FROZEN ITEMS</h1>
            <ul> {listFrozen} </ul>
     </div>;

}

export default NewMeetupsPage;