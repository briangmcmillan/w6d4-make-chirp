import React from 'react'
import PersonalChirp from './PersonalChirp'
// import classAutoBind from 'react-helpers/dist/classAutoBind'

class CreateChirp extends React.Component {
    constructor(props) {
        super(props)
        // classAutoBind(this)
        this.updateFeed = this.updateFeed.bind(this)
        this.fetchTweets = this.fetchTweets.bind(this)
        this.typing = this.typing.bind(this)
        this.state ={
            newChirp: '',
            chirps: [],
        }
    }

    updateFeed() {
        var formData = new FormData()
        formData.append('body', this.state.newChirp)
        formData.append('api_token', sessionStorage.getItem('api_token'))
        // formData.append('tweets', this.state.chirps)

        // sessionStorage.setItem('user', JSON.stringify(response.user))
        fetch('https://still-springs-37963.herokuapp.com/tweets', {
            body: formData,
            method: 'POST',
        })
        .then(response => response.json())
        .then(this.fetchTweets)

        this.setState({
            newChirp: ''
        })
    }


    componentDidMount() {
        // need to JSON.parse() because JSON.stringify() on signup/in --> needs to return back into an object from the string we created.
        this.fetchTweets()
    }

    fetchTweets() {
        fetch('https://still-springs-37963.herokuapp.com/tweets?api_token=' + sessionStorage.getItem('api_token'))
        // adding the username of whoever signed up/logged in to the fetch URL.
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({chirps: response.tweets}))
    }

    typing(e) {
        this.setState({
            newChirp: e.target.value
        })
    }

    render() {
        const PersonalChirps = this.state.chirps.map((item, i) => {
            return <PersonalChirp key={i} data={item} />
        })
        return <div>
            <div className="panel feed_panel">
                <div className="input-group">
                    <input type="text" className="form-control" maxLength="165" placeholder="Chirp chirp..." value={this.state.newChirp} onChange={this.typing}/>
                    <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.updateFeed}>Chirp!</button>
                    </span>
                </div>
                
                {PersonalChirps}
            </div>
        </div>
    }
}

export default CreateChirp
