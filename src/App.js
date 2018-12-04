import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Addjob from './components/Addjob'
import Joblist from './components/Joblist'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobTitle: '',
      jobCompensation: '',
      jobDescription: '',
      jobListings: []
    }
  }
  componentDidMount() {
    this.reloadListings()
  }

  titleInput = (event) => {
    this.setState({
      jobTitle: event.target.value
    })
  }
  compensationInput = (event) => {
    this.setState({
      jobCompensation: event.target.value
    })
  }
  descriptionInput = (event) => {
    this.setState({
      jobDescription: event.target.value
    })
  }

  submitJob = async (event) => {
    if (this.state.jobTitle.length === 0 || this.state.jobCompensation.length === 0 || this.state.jobDescription.length === 0) {
      alert("Please Fill Out All Fields")
    } else {
      var newListing = {
        id: this.state.jobListings.length + 1,
        title: this.state.jobTitle,
        description: this.state.jobDescription,
        pay: this.state.jobCompensation,
        interested: []
      }
      await fetch('http://localhost:3006/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing)
      })
        .then(response => response.json())
        .then(() => this.reloadListings())
        .then((response) => {
          this.setState({
            jobTitle: '',
            jobCompensation: '',
            jobDescription: '',
          })
        })

    }
  }
  resetInputValues = () => {
    var elements = [];
    elements = document.getElementsByClassName('inputFields');
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = '';
    }
  }
  reloadListings = async () => {
    let result = await fetch("http://localhost:3006/listings")
    let data = await result.json()
    this.setState({
      jobListings: data.listings
    })
    return data
  }
  render() {
    return (
      <>
        <Header />
        <div className='mainCont container'>
          <div className='bodyCont row'>
            <Joblist jobListings={this.state.jobListings} />
            <Addjob {...this.state} jobDescription={this.state.jobCompensation} jobCompensation={this.state.jobCompensation} jobTitle={this.state.jobTitle} submitJob={this.submitJob} descriptionInput={this.descriptionInput} compensationInput={this.compensationInput} titleInput={this.titleInput} />
          </div>
        </div>
        <Footer />
      </>

    );
  }
}

export default App;
