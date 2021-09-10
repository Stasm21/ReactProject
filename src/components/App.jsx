import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import CreateSuperHero from './CreateSuperHero/CreateSuperHero';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        };
    }


    alertUser = () => {
        alert ('devCodeCamp');
    }

    // createUserId = (newSuperHero) => {
    //     console.log('See it this works:', newSuperHero)
    //     this.
    // }

    render() {
        return (
            <div>
                console.log('hello')
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names}/>
                <AlertUser alertUser={this.alertUser}/>
                <SuperHeroTable superheroes={this.state.superheroes}/>
                <CreateSuperHero />
            </div>
        )
    }
}

export default App;
