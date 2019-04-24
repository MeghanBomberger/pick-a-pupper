// DEPENDENCIES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import './User.css'
import dogsIcon from '../images/dog.png'

// CONTEXT
import { withAction } from '../../context/ActionProvider.js'

class UserRatings extends Component {
    handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('ratings')
        this.props.startToggler()
    }
    
    render(props) {
        return (
            <section className="user-ratings-container">
                <div className="user-heading">
                    <h1>Pick a Pupper</h1>
                    <Link to="/home">
                        <img alt="votes for dogs" src={dogsIcon}/>
                    </Link>
                    <p className="logout" onClick={this.handleLogout}>Logout</p>
                </div>
                {JSON.parse(localStorage.getItem("ratings")).map((dog, i) => {
                    return  <div key={i} className="rated-dog-card" style={{backgroundImage: `url(${dog.img})`}}>
                                <p>You rated this {dog.breed} {dog.rating} out of 10!</p>
                            </div>
                })}
            </section>
        )
    }
}

export default withAction(UserRatings)