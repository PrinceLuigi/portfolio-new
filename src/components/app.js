import React, {Component} from 'react';
import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';

export default class App extends Component {

	render () {

		return (
			<div>
				<Header />
				<About />
				<Skills />
				<Projects />
			</div>
		);

	}
}