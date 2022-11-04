import React, { Component } from "react"
import { Button, Container, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

class FormProper extends Component {
    state = 
    {
        id: null,
        name: '',
        dateOfBirth: '',
        email: '',
        contactNumber: '',
        aboutSelf: '',
        error: 
        {
            nameError: '',
            dateOfBirthError: '',
            emailError: '',
            contactNumberError: '',
            aboutSelfError: '', 
        },
        formValid: false
    }
    handleChange = (e) => 
    {
        if (e.target.id === 'name') {
            this.validateName(e.target.value)
        }
        if (e.target.id === 'dateOfBirth') {
            this.validateDateOfBirth(e.target.value)
        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value)
        }
        if (e.target.id === 'contactNumber') {
            this.validateContactNumber(e.target.value)
        }
        if (e.target.id === 'aboutSelf') {
            this.validateAboutSelf(e.target.value)
        }
    }
    validateName = (name) => {
        let nameError = this.state.error.nameError
        let formValid = this.state.formValid
        var pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

        if(name.trim() === '') {
            nameError = 'Name is required'
            formValid = false
        }
        else if(!pattern.test(name)) {
            nameError = 'Name should only contain letters.'
            formValid = false
        }
        else {
            formValid = true;
            nameError = ''
        }
        this.setState({
            name,
            formValid,
            error: {...this.state.error, nameError}
        })
        return formValid
    }
    validateDateOfBirth = (dateOfBirth) => {
        let dateNow = Date.now()
        let dateofBirthMs = new Date(dateOfBirth)
        let dateOfBirthError = this.state.error.dateOfBirthError
        let formValid = this.state.formValid

        if(dateOfBirth.trim() === '') {
            dateOfBirthError = 'Date is required.'
            formValid = false
        }
        else if(dateOfBirth.trim().length > 10) {
            dateOfBirthError = 'Invalid Date.'
            formValid = false
        }
        else if(dateofBirthMs > dateNow) {
            dateOfBirthError = 'Date should not exceed current date.'
            formValid = false
        }
        else {
            dateOfBirthError = ''
            formValid = true
        }
        this.setState({
            dateOfBirth,
            formValid,
            error: {...this.state.error, dateOfBirthError}
        })
        return formValid
    }
    validateContactNumber = (contactNumber) => {
        let contactNumberError = this.state.error.contactError
        let formValid = this.state.formValid
        var pattern = /^(9)\d{9}$/u

        if(contactNumber.trim() === '') {
            contactNumberError = 'Contact number is required.'
            formValid = false
        }
        else if(!pattern.test(contactNumber)) {
            contactNumberError = 'Contact number should only be 10 digits, and only contains numbers.';
            formValid = false
        }
        else {
            formValid  = true
            contactNumberError = ''
        }
        this.setState({
            error: {...this.state.error, contactNumberError},
            contactNumber, formValid
        })
        return formValid
    }
    validateEmail = (email) => {
        let formValid = this.state.formValid
        let emailError = this.state.formValid
        var pattern  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email.trim() === '') {
            emailError = 'Email is required.'
            formValid = false
        }
        else if(!pattern.test(email)) {
            formValid = false;
            emailError = 'Your email address is invalid.'
        }
        else {
            formValid = true
            emailError = ''
        }
        this.setState({
            email,
            formValid, 
            error: {...this.state.error, emailError}
        })
        return formValid
    }
    validateAboutSelf = (aboutSelf) => {
        let formValid = this.state.formValid
        let aboutSelfError = this.state.aboutSelfError

        if (aboutSelf.trim() === '') {
            formValid = false
            aboutSelfError = 'About self cannot be empty.'
        }
        else{
            formValid = true
            aboutSelfError = ''
        }
        this.setState({
            aboutSelf,
            formValid,
            error: {...this.state.error, aboutSelfError}
        })
        return formValid
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.validateName(this.state.name) && this.validateDateOfBirth(this.state.dateOfBirth) && this.validateContactNumber(this.state.contactNumber) && this.validateEmail(this.state.email) && this.validateAboutSelf(this.state.aboutSelf)) {
            this.props.addData(this.state)
            this.setState({
                id: 0,
                name: '',
                dateOfBirth: '',
                email:'',
                contactNumber: '',
                aboutSelf: ''
            })
        }
    }
    render() {
        return(
            <Container style={{ padding: "5px"}}>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Signup to be awesome!</h2>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" id="name" onChange={this.handleChange} placeholder='Please enter your name...'></Form.Control>
                        <Form.Text style={{ color: 'red' }}>{this.state.error.nameError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" name="dateOfBirth" id="dateOfBirth" onChange={this.handleChange} placeholder='Please enter your birthday...'></Form.Control>
                        <Form.Text style={{ color: 'red' }}>{this.state.error.dateOfBirthError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" id="email" onChange={this.handleChange} placeholder='Please enter your email...'></Form.Control>
                        <Form.Text style={{ color: 'red' }}>{this.state.error.emailError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contactNumber" id="contactNumber" onChange={this.handleChange} placeholder='Please enter your contact number...'></Form.Control>
                        <Form.Text style={{ color: 'red' }}>{this.state.error.contactNumberError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>About Yourself</Form.Label>
                        <Form.Control type="text" name="aboutSelf" id="aboutSelf" onChange={this.handleChange} placeholder='Tell me about yourself...'></Form.Control>
                        <Form.Text style={{ color: 'red' }}>{this.state.error.aboutSelfError}</Form.Text>
                    </Form.Group>
                    <Button style={{ marginTop: "5px"}} variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default FormProper