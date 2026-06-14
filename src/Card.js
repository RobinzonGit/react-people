import './Card.css';
import gender from './icons/female.png';

function Card(props) {
    return (
        <div className="card">
            <img src={props.persone.photo} alt="Photo" />
            <div className="name">{props.persone.name}</div>
            <div className="age">{props.persone.age}</div>   
        </div>
    );
}
export default Card;