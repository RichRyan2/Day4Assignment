import React, {Component} from "react";
import FormProper from './FormProper'
import FormDisplay from "./FormDisplay";
import { Container } from 'react-bootstrap'

class Signup extends Component {
    state = 
    {
        personData: []
    }
    addData = (user) => 
    {
        let personData = [...this.state.personData, user]
        console.log(personData)
        this.setState(
            {
                personData
            })
    }
    render() {
        return (
            <> 
                <FormProper addData={this.addData}/>
                <Container>
                    <FormDisplay personData={this.state.personData}/>
                </Container>
            </>
        )
    }  
}

export default Signup