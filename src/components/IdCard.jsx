function IdCard(props){
    return (
        <div>
            <img src={props.picture}/>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height} cm</p>
            <p>Birth: {props.birth.toLocalDateString()}</p>
        </div>
    );
}
export default IdCard