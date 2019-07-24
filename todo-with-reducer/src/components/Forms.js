import React, { Component } from 'react'

export default class Forms extends Component {
    state = {
        input: ''
    }
    render() {

     const handleChanges = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
    const submitItem= (e) => {
        e.preventDefault();
         this.setState({input:''})
        this.props.AddItem(e, this.state.input)
       
    }
        return (
            <form onSubmit={submitItem}> 
                <input type="text" name="input" placeholder="name" value={this.state.input} onChange={handleChanges}/>     
            </form>
        )
    }
}

