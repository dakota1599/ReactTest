
import Button from './../widgets/button/Button';

const HomePage = () =>{
    return(
        <div className="container">
            <h1>This is the Home page.</h1>
            <Button type="button" onEvent={() => {alert("Button Click")}}>Click me!</Button>
        </div>
    );
}

export default HomePage;