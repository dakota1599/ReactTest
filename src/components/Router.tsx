import React from 'react';
import Layout from './Layout';

//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default class Router extends React.Component<IProps,IState>{

    constructor(props:IProps){
        super(props);
        this.state = {
            current: ''
        }
    }

    getRoute = (route: string) =>{
        this.setState({current: route});
    }

    render(){
        if(this.state.current === 'about'){
            return(
                <Layout sendRoute={this.getRoute} current={this.state.current}>
                    <AboutPage />
                </Layout>
            );
        }
        return(
            <Layout sendRoute={this.getRoute} current={this.state.current}>
                <HomePage />
            </Layout>
        );
    }

}

interface IProps{

}

interface IState{
    current: string;
}