import React from 'react';
import './adder.css';


function add(a, b){
    return a + b;
}


class Adder extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            a: 0,
            b: 0,
            result: 0
        }
    }

    changeState(change){
        let newState = Object.assign({}, this.state, change);
        this.setState(newState);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        let change = {
        }
        change[name] = value
        this.changeState(change);
    }

    handleSubmit(event){
        let a = parseInt(this.state.a),
            b = parseInt(this.state.b);
        let value = add(a, b);
        this.changeState({result: value})
    }

    render(){
        return (
            <div>
                <form>
                    <label>A</label>
                    <input label="A" name="a" type="number" value={this.state.a} onChange={(e) => this.handleChange(e)} />
                    <label>B</label>
                    <input label="B" name="b" type="number" value={this.state.b} onChange={(e) => this.handleChange(e)}/>
                    <input name="submit" type="button" value="submit" onClick={(e) => this.handleSubmit(e)} />
                </form>
                <div>{this.state.result}</div>
            </div>
        );
    }
}

export { Adder };
