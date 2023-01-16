import React, {Component} from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: '',
                address: '',
                city: '',
                country: '',
                formCheck: false,
            },
            isForm: true,
        }
    };


    handlerChangeInput = (e) => {
        const {name, value} = e.target
        if (name === 'formCheck') {
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [name]: !this.state.data.formCheck
                }
            }))
        }

        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isForm: false})
    };
    handleBackForm = () => {
        this.setState({isForm: true})
    }

    render() {
        const {isForm, data} = this.state
        const creatTable = Object.entries(data).map(item => (
            <tr key={item.toString()}>
                <td>{item[0]}</td>
                <td>{item[1].toString()}</td>
            </tr>
        ))

        return (
            <>
                <form name="myForm" onSubmit={this.handleSubmit}
                      className={isForm ? 'd-block' : 'd-none'}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                               onChange={this.handlerChangeInput}
                               value={data.email}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password"
                               placeholder="Password"
                               onChange={this.handlerChangeInput}
                               value={data.password}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea className="form-control" name="address" id="address"
                                  placeholder="1234 Main St"
                                  onChange={this.handlerChangeInput}
                                  value={data.address}>
                    </textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input type="text" className="form-control" name="city" id="city"
                               onChange={this.handlerChangeInput}
                               value={data.city}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select id="country" name="country" className="form-control"
                                value={data.country}
                                onChange={this.handlerChangeInput}>
                            <option value=''>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input name="formCheck" type="checkbox" checked={data.formCheck}
                                       onChange={this.handlerChangeInput}/> Accept Rules
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
                        {creatTable}
                        </tbody>
                    </table>
                </div>
            </>
        )

    }

}

export default MyForm;
