import React from "react";
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}
  
	componentDidMount() {
		fetch(
      "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/pr/1920/1939/ITA")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json
				});
			})
	}
	render() {
		const { items } = this.state;
		return (
		<div className = "App">
			<h1> Italy monthly average precipitation (rainfall and assumed water equivalent), in millimeters </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					monthVals: { item.monthVals },
          {/* .map((Val, idx) => <p key = idx>{Val}</p> }}, */},
          from_year: { item.fromYear }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
