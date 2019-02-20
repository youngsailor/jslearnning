import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
/**
 * NavigationBar
 */
export class NavigationBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                  <div className="container">
                    <Link className="navbar-brand" to="/">ReduxLogin</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
              </nav>
        </div>
    );
  }
}

// NavigationBar.propTypes = {
//   prop: PropTypes.number.isRequired
// }

export default NavigationBar;
