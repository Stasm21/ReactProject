import React from 'react';


const SuperHeroTable = (props) => {
    return (

        <table>
            {props.superheroes.map(superhero => (

                <tr>
                    <th>Superhero: {superhero.name}</th>
                    <td>Primary Ability: {superhero.primaryAbility}</td>
                    <td>Secondary Ability: {superhero.secondaryAbility}</td>
                </tr>
            ))}
        </table>
    );
}

export default SuperHeroTable;
