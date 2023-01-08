import React, {Component} from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm: true,
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
        }
    };

    handleChangeCheck = () => {
        this.setState({acceptRules: !this.state.acceptRules})
    };
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    }
    handleChangeAddress = (e) => {
        this.setState({address: e.target.value});
    }
    handleChangeCity = (e) => {
        this.setState({city: e.target.value});
    }
    handleChangeCountry = (e) => {
        this.setState({country: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isForm: false})
    };
    handleBackForm = () => {
        this.setState({isForm: true})
    }

    render() {
        const {isForm, email, password, address, city, country, acceptRules} = this.state

        return (
            <>
                <form name="myForm" onSubmit={this.handleSubmit}
                      className={isForm ? 'd-block' : 'd-none'}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                               onChange={this.handleChangeEmail}
                               value={email}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password"
                               placeholder="Password"
                               onChange={this.handleChangePassword}
                               value={password}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea className="form-control" name="address" id="address"
                                  placeholder="1234 Main St"
                                  onChange={this.handleChangeAddress}
                                  value={address}>
                    </textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input type="text" className="form-control" name="city" id="city"
                               onChange={this.handleChangeCity}
                               value={city}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select id="country" name="country" className="form-control"
                                value={country} onChange={this.handleChangeCountry}>
                            <option value=''>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input name="formCheck" type="checkbox" checked={acceptRules}
                                       onChange={this.handleChangeCheck}/> Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary px-5">Sign in</button>
                </form>
                <div className={isForm ? 'd-none' : 'd-block'}>
                    <button type="button" className="btn btn-primary px-5"
                            onClick={this.handleBackForm}>Back
                    </button>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>acceptRules</td>
                            <td>{acceptRules ? 'accepted' : 'not'}</td>
                        </tr>
                        <tr>
                            <td>address</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>{password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )

    }

}

export default MyForm;