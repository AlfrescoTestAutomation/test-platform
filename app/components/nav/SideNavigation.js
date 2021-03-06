import React from 'react'
import {Link, browserHistory} from 'react-router'

class SideNavigation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            project:"alfresco",
            version:"1.0"
        }
    }
    componentDidMount() {
        this.updateState()
    }

    updateState() {
        browserHistory.listen((ev)=> {
            let paths = ev.hash.split("/")
            let version = paths[3]?paths[3].split("?")[0]:""
            this.setState({
                "project" : paths[2],
                "version" : version
            })
        })
    }

    render () {
        let url = "project/" + this.state.project + "/" + this.state.version
        let dash = url + "/dashboard"
        let trend = url + "/defect/trend"
        let defect = url + "/defect/discovery"
        return (
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                  <li>
                      <Link activeClassName="active" to={dash}>Dashboard <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to={defect}>Defect Discovery <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <Link activeClassName="active" to={trend}>Defect Trend <span className="sr-only">(current)</span></Link>
                  </li>
              </ul>
            </div>)
        }
    }
    export default SideNavigation
