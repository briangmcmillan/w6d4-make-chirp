import React from 'react'
import MainHeader from './MainHeader'
import CreateChirp from './CreateChirp'
import OtherUsers from './OtherUsers'
import Following from './Following'


class Main extends React.Component {
    render() {
        return <div>
        <div className="container-fluid">
            <MainHeader />
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8">
                    <CreateChirp />
                </div>
                <div className="col-sm-4">
                    <OtherUsers />
                    <Following />
                </div>
            </div>
        </div>
    </div>
    }
}

export default Main
