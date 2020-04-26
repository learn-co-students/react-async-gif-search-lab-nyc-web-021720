import React, { Component } from 'react'

export default class GifListContainer extends Component {

    state = {
        gifs: []
      }
    
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=SUuoOh2XVlseGrMzgAz36kNP2qFHWbGG&rating=g')
        .then((response) => response.json())
        .then((dats) => {
          console.log(data)
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
