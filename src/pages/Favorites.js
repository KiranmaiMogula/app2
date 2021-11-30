function FavoritesPage(props){
    const styles = props.styles
    const listStyles = styles.map((style) => <li key={style.toString()}> {style} </li>)

    const womenstyles = props.womenstyles
    const womenStyles = womenstyles.map((wstyle) => <li key={wstyle.toString()}> {wstyle} </li>)

    const kidsstyles = props.kidsstyles
    const kidsStyles = kidsstyles.map((kidstyle) => <li key={kidstyle.toString()}> {kidstyle} </li>)

    return <div className="new"> 
            <div className="row">
                <div className="column"> 
                    <img src = 'https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2014/03/general-quarters.jpg?w=690&h=500&crop=1' alt="Logo" 
                width="500" height="500"/>  
                </div>

                <div className="column"> 
                    <img src = 'https://media.istockphoto.com/photos/high-class-female-clothing-picture-id155596905' alt="Logo" 
                width="500" height="500"/>  
                </div>

                <div className="column"> 
                    <img src = 'https://securecdn.pymnts.com/wp-content/uploads/2020/02/kidpik-childrens-clothes-subscriptions-1000x600.jpg' alt="Logo" 
                width="500" height="500"/>  
                </div>
            </div>
                    
        <h1> MEN </h1>
            <ul> {listStyles} </ul>
        <h2> WOMEN </h2>
            <ul> {womenStyles} </ul>
        <h3> KIDS </h3>
        <ul> {kidsStyles} </ul>
     </div>;

}

export default FavoritesPage;