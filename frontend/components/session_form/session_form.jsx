import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign Up</Link>;
		} else {
			return <Link to="/login">Log In</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container container">
				<div className="row">
					<form onSubmit={this.handleSubmit} className="login-form-box column column-50 column-offset-25">
						<br/>
						{this.renderErrors()}
						<div className="login-form">
							<h2>{this.props.formType == "signup" ? "Sign Up" : "Log In"}</h2>
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value={this.props.formType} /><span className="option">{this.navLink()}</span>
						</div>
					</form>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
