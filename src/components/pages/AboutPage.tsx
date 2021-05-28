import SearchBox from './../widgets/searchbox/SearchBox';
import React from 'react';

export default class AboutPage extends React.Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.state = {
            text: ''
        }
    }

    render(){
        //The arrow function takes an e parameter that is then passed to the set state.
        return(
            <div>
                <h1>This is the About page.</h1>
                <SearchBox placeholder="Type Anything" onEvent={(e:any) => this.setState({text: e})} />
                <p>{this.state.text}</p>
            </div>
        );
    }

}


interface IProps{

}

interface IState{
    text: string;
}