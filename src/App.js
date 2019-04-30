import React from 'react'
import './App.css'

import Clock from './components/Clock'
import Links from './components/Links'
import Date from './components/Date'
import Card  from './components/Card'

import Search from './components/Search'

function App() {
	return <div className="App">
		<Card>
				👨🏻‍💻
			<Clock/>
			<Date />
			
			<Search title="hello" />
			<Links />
		</Card>
	</div>
}


export default App




