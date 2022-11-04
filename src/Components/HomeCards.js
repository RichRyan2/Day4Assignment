//api source: https://fake-movie-database-api.herokuapp.com/api?s=star%20wars "Search"
//properties: imdbID, Title, Year, Poster(img link)

import React, {Component} from 'react'
import axios from "axios"
import { Grid, } from "@mui/material"

class HomeCards extends Component 
{
    state = 
    {
        Search: []
    }

    componentDidMount = () => 
    {
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars').then((res) => 
        {
            const { Search } = res.data
            this.setState(
            {
                Search
            })
        }).catch((err) => console.log(err))
    }

    render() 
    {
        const SearchList = this.state.Search.map((movie => {
                return(
                    <Grid item xs={3} key={movie.imdbID}>
                        <div class="card" style={{height: '100%'}}>
                            <div class="card-image waves-effect waves-block waves-light">
                            <img src={movie.Poster} />
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">{movie.Title} ({movie.Year})</span>
                            </div>
                        </div>
                    </Grid>
                )
            }));
        return(
            <>
                {SearchList}
            </>
        )
    }
}

export default HomeCards