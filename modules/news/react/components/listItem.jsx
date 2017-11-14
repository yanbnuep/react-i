const React = require('react')
const ReactDOM = require('react-dom')

module.exports = React.createClass({
	render() {
		return (
				<li className="newsItemLi">

				</li>
			)
	}
})



class Cover extends Component {
	render () {
		return (
				<div className="coverContain">
					<img src={this.props.coverSource} className="coverImg" onClick={this.props.handleClick}/>
				</div>
			)
	}
}


class Detail extends Component {
	render() {
		return (
				<div className="newsDetail">
					<a className"newsTitle" onClick={this.props.handleClick}>{this.props.title}</a>
					<div className"newsDescription">{this.props.description}</div>
					<div className"newsDate">{this.props.date}</div>
				</div>
			)
	}
}