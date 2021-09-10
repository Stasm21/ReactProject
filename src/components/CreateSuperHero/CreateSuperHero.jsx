import React, { Component } from 'react';


class CreateSuperHero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superheroId: 0,
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSuperHero(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Superhero Name</label>
                <input name="name" onChange={this.handleChange} value={this.state.name} />
                <label>Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label>Secondary Ability</label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                <button type="submit">Create Superhero</button>
            </form>
        );
    }
}

export default CreateSuperHero;
