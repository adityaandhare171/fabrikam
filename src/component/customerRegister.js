import react, { Component } from "react";

class CustomerRegister extends Component{
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            phoneNumber:"",
            emailId:"",
            password:"",
            streetAddress:"",
            city:"",
            country:"",
            zipcode:0,
            registerError:""
        }
    }

    handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});

    }

    submitData=(e)=>{
        e.preventDefault();
        alert(this.state.firstName);
        const reqOptions={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    phoneNumber:this.state.phoneNumber,
                    emailId:this.state.emailId,
                    password:this.state.password,
                    streetAddress:this.state.streetAddress,
                    city:this.state.city,
                    country:this.state.country,
                    zipcode:this.state.zipcode,
                }
            )
        }
  

    fetch("http://localhost:8080/customer/register",reqOptions)
    .then(resp=>resp.text())
    .then(data=>{
        if(data.length!=0)
        {
            const json=JSON.parse(data);
            this.setState({registerError:"Regsiter success"});
                
               // this.props.history.push("/login");
     
            
        }
        else{
            this.setState({registerError:"Wrong UserName /Password"});
        }
    })
    }
    render() {
        return (
            <div>
                <div style={{width:"500px"}}>
                <h2>Customer Register</h2>
		<form className="main-form needs-validation">
			<div className="row">
				<div className="col">
			<div className="form-group"> 
				<label htmlfor="firstName">First Name</label>
				<input type="text" name="firstName" className="form-control" onChange={this.handleChange} required/>
			</div>
		</div>
			<div className="col">
			<div className="form-group"> 
				<label htmlfor="lastName">Last Name</label>
				<input type="text" name="lastName" className="form-control" onChange={this.handleChange} required/>
			</div>
		</div>
		</div>
			<div className="row">
				<div className="col">
			<div className="form-group"> 
				<label htmlfor="phoneNumber">Phone Number</label>
				<input type="text" name="phoneNumber" className="form-control" onChange={this.handleChange} required pattern="^\d{10}$\"/>
			</div>
		</div>

			<div className="col">
			<div className="form-group"> 
				<label htmlfor="emailId">Email Id</label>
				<input type="email" name="emailId" className="form-control" onChange={this.handleChange} required />
			</div>
		</div>
		</div>
			<div className="form-group"> 
				<label htmlfor="password">Password</label>
				<input type="password" name="password" className="form-control" onChange={this.handleChange} required max="6" min="4"/>
			</div>
			<div className="form-group"> 
				<label htmlfor="streetAddress">Street Address</label>
				<input type="text" name="streetAddress" className="form-control" onChange={this.handleChange} required/>
			</div>
			<div className="form-group"> 
				<label htmlfor="city">City</label>
				<input type="text" name="city" className="form-control" onChange={this.handleChange} required/>
			</div>
			<div className="form-group"> 
				<label htmlfor="country">Country</label>
				<input type="text" name="country" className="form-control" onChange={this.handleChange} required/> 
			</div>
			<div className="form-group"> 
				<label htmlfor="zipcode">Zipcode</label>
				<input type="number" name="zipcode" className="form-control" onChange={this.handleChange} required minLength="6"/>
			</div>
			<div>
		<button type="button" className="btn btn-primary" onClick={this.submitData}>Submit</button>
	</div>
	</form>
                </div>
            </div>
        )
    }


}

export default CustomerRegister;