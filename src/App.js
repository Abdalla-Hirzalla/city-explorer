import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      lon: '',
      lat: '',
      errorMsg: 'bad response',
      displayErr: false
    }

  }



  getLocationData = async (event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    console.log(cityName);
    let URL = `https://eu1.locationiq.com/v1/search.php?key=pk.ee0d2cd26f602ebf960d34a59e1151dc&q=${cityName}&format=json`;




    try {

      let locationResult = await axios.get(URL)
      this.setState({
        displayName: locationResult.data[0].display_name,
        lon: locationResult.data[0].lon,
        lat: locationResult.data[0].lat,
        showMap: true
      }

      )
    }
    catch {
      this.setState({
        displayMap: false,
        displayErr: true
      }
      )
    }
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>

        <form onSubmit={this.getLocationData}>
          <input type='text' placeholder='Enter City' name='city' />
          <button type='submit'>Explore!</button>
        </form>
        <div class="card" style={{ width: '22rem', border:'1px solid black ' , color:'green' }}>
          <div class="card-header">
           <h2> {this.state.displayName}</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style={{border:'1px solid black ', color : 'tomato'}}><h6>{this.state.lon}</h6></li>
            <li class="list-group-item" style={{border:'1px solid black ', color : 'tomato'}}><h6>{this.state.lat}</h6></li>
          </ul>
        </div>
      </>

    )

  }
}

export default App;