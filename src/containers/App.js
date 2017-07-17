import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { AppBar, Tabs, Tab } from 'material-ui'

import '../assets/styles/App.css'

injectTapEventPlugin()

class App extends Component {
	changeRoute(route) {
		this.props.router.push(route);
	}

	render() {
		const { props } = this
    	const { children } = props

    	const tabs = (
    		<Tabs onChange={this.onChange}>
				<Tab label="Dashboard" onClick={(e) => this.changeRoute('/')} className="app-bar-tab"/>
				<Tab label="Contacts" onClick={(e) => this.changeRoute('contacts')} className="app-bar-tab"/>
			</Tabs>
    	)

		return (
			<MuiThemeProvider>
				<div className="App">
					<AppBar
						title="reactCrm"
						titleStyle={{'textAlign':'left', 'flex':'none'}}
						iconElementRight={ tabs }
						iconStyleRight={{'marginLeft':'30px'}}
					>
					</AppBar>
					{ children }
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App