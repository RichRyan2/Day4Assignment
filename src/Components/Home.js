import React, {Component} from "react"
import HomeCards from "./HomeCards"
import { Grid, Container } from "@mui/material"

class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <h3>List of Movies</h3>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        <HomeCards />
                    </Grid>
                </Container>  
            </>
        )
    }  
}

export default Home