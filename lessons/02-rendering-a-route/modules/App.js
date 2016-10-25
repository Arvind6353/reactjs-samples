import React from 'react'
import {Link,IndexLink} from 'react-router'
export default React.createClass({
  render() {

        return (
          <div>
            <h1>React Router Tutorial</h1>
            <ul role="nav">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>  
              <li><Link to="/repos">Repos</Link></li>
              <li><Link to="/page2">Page2</Link></li>
              
            </ul>

            {this.props.children}

          </div>
        )  
}
})

