import React, {Component} from "react";
import {Container, Grid} from "@mui/material"
import '../Css/Map.css'

class Contact extends Component {
    render() {
        return (
            <>
                <Container>
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div class="card" style={{height: '100%'}}>
                                <div class='card-image'>
                                    <iframe src="https://maps.google.com/maps?q=boracay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>    
                                </div>
                                <div class='card-content'>
                                    <span class='card-title'>Our Location</span>
                                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div class='card' style={{height: '100%'}}>
                                <div class="card-image">
                                    <img src="https://dynamic.brandcrowd.com/asset/logo/02161a98-a2a6-42d1-af15-3bcd5be7b508/logo-search-grid-1x?v=637684769996130000" />
                                </div>
                                <div class='card-content'>
                                    <span class='card-title'>Contact Number</span>
                                    <p>09999999999</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div class='card' style={{height: '100%'}}>
                                <div class="card-image">
                                    <img src="https://dynamic.brandcrowd.com/asset/logo/02161a98-a2a6-42d1-af15-3bcd5be7b508/logo-search-grid-1x?v=637684769996130000" />
                                </div>
                                <div class='card-content'>
                                    <span class='card-title'>Email Address</span>
                                    <p>dummy@test.com</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>  
                </Container>
            </>
        )
    }  
}

export default Contact