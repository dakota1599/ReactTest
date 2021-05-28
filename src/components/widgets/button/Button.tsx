import './Button.css';
const Button = (props: IProps) =>{
    return (

        <button className="button" type={props.type} onClick={() => props.onEvent()}>
            {props.children}
        </button>
    );
}



interface IProps{
    onEvent: any;
    type: any;
    children: any;
}

export default Button;