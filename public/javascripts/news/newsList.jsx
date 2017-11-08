import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
}

class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(return(
    		<div className = "newsItem">

    		</div>
    	))
}


class NewsCover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render (return (
    		<div className="coverContain">
    			<img className="coverImage" src={this.props.src}>
    		</div>
    	))	
}

class NewsContent extends React.Component {
	    constructor(props) {
        super(props)
        this.state = {}
    }


    render (return(
    		<div className="newContent">
    			<div className="newsTitle">{this.props.title}</div>
    			<div className="newsDescription">{this.props.description}</div>
    			<div className="newsdate">{this.props.date}</div>
    		</div>
    	))
}
