(function() {

	"use strict";

	var PageTitle = React.createClass({

		render: function() {
			return (
				<header>
					<h1>{this.props.label}</h1>
				</header>
			);
		},

	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(<PageTitle label="Welcome to React.js!"></PageTitle>, mainElement);
	
})();