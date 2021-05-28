
const SearchBox = (props: IProps) => {
    //The e represents the input as a whole.  It's value is then passed as an argument to the call back function
    return(
        <input className="form-control" type="search" placeholder={props.placeholder} onChange={(e) => props.onEvent(e.target.value)} />
    );
}


interface IProps{
    placeholder: string;
    onEvent: any;
}

export default SearchBox;