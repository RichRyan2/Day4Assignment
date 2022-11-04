import { Container } from "@mui/system"
import React, {Component} from "react"

class About extends Component {
    render() {
        return (
            <>
                <Container>
                <div class="video-container">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/5HfF6p3AzQs" frameBorder="0" allowFullScreen />
                </div>
                </Container>
                <Container>
                    <h4>Naganohara Yoimiya</h4>
                    <p>
                        Yoimiya is the current owner of Naganohara Fireworks; with her colorful fireworks and outgoing personality, Yoimiya is loved by everyone on Narukami Island. She was coined as the "Queen of the Summer Festival," as they believe summer is not the same without her.
                    </p>
                </Container>
            </>
        )
    }  
}



export default About