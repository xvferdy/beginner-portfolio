import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<h5>
				Made with 💗 by{" "}
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React
				</a>
				, {"  "}
				<a
					href="https://sass-lang.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					Sass
				</a>{" "}
				and{" "}
				<a
					href="https://github.com/mui-org/material-ui"
					target="_blank"
					rel="noopener noreferrer"
				>
					Material-UI
				</a>
			</h5>
		</footer>
	);
}

export default Footer;
