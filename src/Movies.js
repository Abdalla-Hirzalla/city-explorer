import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'
import Movie from './render/movie';


class Movies extends React.Component {

    render() {
        return (
            <>

                {
                    this.props.showCard &&
                    this.props.movies.map(element => {
                        return (
                            <>
                              <Movie moviesInfo = {element} />
                            </>

                        )
                    })
                }


            </>
        )
    }


}

export default Movies;