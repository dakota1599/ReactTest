import React from 'react';

export default class Layout extends React.Component<IProps,IState>{

    constructor(props:IProps){
        super(props);

        this.state = {
            current: props.current
        }
    }

    render(){
        return (
            <span>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                      Routing Demo
                    </a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li className={this.props.current === '' ? 'active' : ''}>
                      <a className="navbar-item" href="#" onClick={() => this.props.sendRoute('')}>Home</a>
                    </li>
                    <li className={this.props.current === 'about' ? 'active' : ''}>
                      <a href="#" onClick={() => this.props.sendRoute('about')}>About</a>
                    </li>
                    <li>
                      <a href="#">Page 2</a>
                    </li>
                    <li>
                      <a href="#">Page 3</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {this.props.children}
            </span>
          );
    }

}

interface IProps{
    current: string,
    sendRoute: any
}

interface IState{
    current: string
}

