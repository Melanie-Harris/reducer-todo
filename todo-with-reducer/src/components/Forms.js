import React, { Component } from 'react'

export default class Forms extends Component {
    // 1) name your state
    state = {
        input: ''
    }
    render() {

     const handleChanges = (e) => {
        //  3) info you are trying to target from you input
        // change state to class via set State
        // target name and value
            this.setState({ [e.target.name]: e.target.value })
        }
    const submitItem= (e) => {
        // this stops the page from reloading, prevent default action. paramter e will be placed on the prevent default
        e.preventDefault();
         this.setState({input:''})
        //  pass done prop from FORM component, uses state from input (input has its own state)
        this.props.AddItem(e, this.state.input)
       
    }
        return (
            // 4) call onsubmit and {the name of function}
            <form onSubmit={submitItem}> 
            {/* 2) creat input */}
                <input type="text" name="input" placeholder="todos" value={this.state.input} onChange={handleChanges}/>     
            </form>
        )
    }
}

