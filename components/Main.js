import React from 'react'
import MainHeader from './MainHeader'
import CreateChirp from './CreateChirp'

class Main extends React.Component {
    render() {
        return <div>
        <div className="container-fluid">
            <MainHeader />
        </div>
        <div className="container-fluid">
            <CreateChirp />
        </div>
    </div>
    }
}

export default Main
