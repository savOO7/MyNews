import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

export class Navbar extends Component {
  
  state={
    navOpen : false,
  }
  toggleNav =()=>{
    this.setState({navOpen: !(this.navOpen)});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyNews</Link>
            <button onClick={this.toggleNav} className={this.navOpen ? "navbar-toggler" : "navbar-toggler collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={this.navOpen? "collapse navbar-collapse show": "collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" onClick={this.toggleNav} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/business">Business
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/entertainment">Entertainment
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/general">General
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/health">Health
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/science">Science
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/sports">Sports
                </Link></li>
                <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNav} to="/technology">Technology
                </Link></li>

            </ul>
            
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
