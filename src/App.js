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
  // async componentDidMount() {
  //   let result = await fetch("/Users/daneparke/playground/galvanize-dinosaurs/dinosaurs1/listings.json")
  //   let data = await result.json()
  //   this.setState({
  //     jobListings: data
  //   })
  // }

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

  submitJob = (event) => {
    if (this.state.jobTitle.length === 0 || this.state.jobCompensation.length === 0 || this.state.jobDescription.length === 0) {
      alert("Please Enter Username")
    } else {
      var newJob = {
        id: this.state.jobListings.length + 1,
        title: this.state.jobTitle,
        description: this.state.jobDescription,
        pay: this.state.jobCompensation,
        interested: []
      }
      this.setState({
        jobListings: [...this.state.jobListings, newJob],
        jobTitle: '',
        jobCompensation: '',
        jobDescription: '',
      })
      var elements = [];
      elements = document.getElementsByClassName('inputFields');
      for (var i = 0; i < elements.length; i++) {
        elements[i].value = '';
      }

    }
  }

  render() {
    return (
      <>
        <Header />
        <div className='mainCont container'>
          <div className='bodyCont row'>
            <Joblist jobListings={this.state.jobListings} />
            <Addjob jobDescription={this.state.jobCompensation} jobCompensation={this.state.jobCompensation} jobTitle={this.state.jobTitle} submitJob={this.submitJob} descriptionInput={this.descriptionInput} compensationInput={this.compensationInput} titleInput={this.titleInput} />
          </div>
        </div>
        <Footer />
      </>

    );
  }
}

export default App;
