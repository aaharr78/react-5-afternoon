import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateEmail } from '../../ducks/reducer'

class WizardTen extends Component {
    render() {
        const { updateFirstName, updateLastName, updateEmail } = this.props
        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" onChange={(e) => updateLastName(e.target.value)} />
                    <input type="text" placeholder="email" onChange={(e) => updateEmail(e.target.value)} />

                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    const { FirstName, LastName, Email } = state;

    return {
        FirstName,
        LastName,
        Email
    };
}

export default connect(mapStateToProps, { updateFirstName, updateLastName, updateEmail })(WizardTen);