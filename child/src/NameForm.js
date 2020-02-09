import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Input from './sharedUI/Input/Input';
import Button from './sharedUI/Button/Button';
import axios from 'axios';

const URL = 'http://localhost:8080/nutrition';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    age: '',
                    name: '',
                    weight:'',
                    height:'',
                    sex:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();

      const request = {"age": this.state.age,
                        "weight": this.state.weight,
                        "height":this.state.height}
      axios.post(URL,request).then((result)=>{
          if (result.status === 200){
            console.log(result)
          }
            
      }).catch(error => console.log(error))
    //   fetch('/nutrition/', {
    //     method: 'POST',
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //           age: this.state.age,
    //           weight: this.state.weight,
    //           height:this.state.height
    //         })
    //     }).then(function(response){
    //             console.log('response is');
    //             console.log(response);
    //     })
    }
  
    render() {
      return (
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Name:
        //     <input type="text" value={this.state.value} onChange={this.handleChange} />
        //   </label>
        //   <input type="submit" value="Submit" />
        // </form>

      <div className="login">
        <form className="login__form">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
         

              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Nutrition Profile Form
                </span>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="name" placeholder="Name"
                        onChange={this._handleChange}/>


                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                  <input className="input100" type="text" name="weight" placeholder="Weight"
                    onChange={this._handleChange}/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" >
                  <input className="input100" type="text" name="age" placeholder="Age"
                        onChange={this._handleChange}/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" >
                  <input className="input100" type="text" name="height" placeholder="Height"
                        onChange={this._handleChange}/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" >
                  <input className="input100" type="text" name="sex" placeholder="Sex"
                        onChange={this._handleChange}/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>


             

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" onClick={this._handleSubmit}>
                    Submit

                  </button>
                </div>
                  </form>
                  </div>
                  </div>
                  </div>
                </form>
              </div>
      );
    }
  }

  export default NameForm;
