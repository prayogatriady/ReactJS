import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookings: []

    };

  }

componentDidMount(){
  var config = {
    method: 'GET',
    url:'https://esbbcext01.beacukai.go.id:8082/DetilBooking/',
    headers: {'Content-Type': 'application/json'},
  }
  axios.request(config)
  .then(response => {
    this.setState({
      bookings: response.data

    })
    console.log('response: ',response)
  })
  .catch(error => {
    console.log('error: ',error)
  })
}


render(){
  return (
    
      <div className="container" style = {{ marginTop: "50px"}}>
      <div className="row">
        <div className="col">
        <div className="card">
        <div className="card-header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Trucking</li>
              <li className="breadcrumb-item active text-primary" aria-current="page">Book Truck</li>
            </ol>
          </nav>
        </div>

        <div className="card-body">
        

        <form>
        <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>B/L Number</label>
            <input type="text" className="form-control" placeholder="B/L Number"/>
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label>From</label>
            <input type="text" className="form-control" placeholder="From"/>
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label>To</label>
            <input type="text" className="form-control" placeholder="To"/>
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label>Depo</label>
            <input type="text" className="form-control" placeholder="Depo"/>
          </div>
        </div>
        </div>

        <div className="row">
          <div className="col">
          <div className="form-group">
            <label>Plan Date</label>
            <input type="text" className="form-control" placeholder="mm/dd/yy"/>
          </div>
        </div>

          <div className="col">
          <div className="form-group">
            <label>Booking Date</label>
            <input type="text" className="form-control" placeholder="mm/dd/yy"/>
          </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>BL Data</label>
              <input type="text" className="form-control" placeholder="mm/dd/yy"/>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>SP2 Valid Date</label>
              <input type="text" className="form-control" placeholder="mm/dd/yy"/>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>SPC Valid Data</label>
              <input type="text" className="form-control" placeholder="mm/dd/yy"/>
            </div>
          </div>
          
        </div>

        <div className="row">
          
          <div className="col">
          <div className="form-group">
            <label>Countainer Number</label>
            <input type="text" className="form-control" placeholder="Countainer Number"/>
          </div>
          </div>

          <div className="col">
          <div className="form-group">
            <label>Countainer Size</label>
            <input type="text" className="form-control" placeholder="Countainer Size"/>
          </div>
          </div>

          <div className="col">
          <div className="form-group">
            <label>Countainer Type</label>
            <input type="text" className="form-control" placeholder="Countainer Type"/>
          </div>
          </div>
        </div>

       
        <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>


        </form>
        </div>
        </div>
        </div>
      </div>

      {/*card kiri*/}

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <img src="https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/06/GoogleMapsNYCHero.jpg" className="img-fluid" alt="Image not found"/>
            </div>
           </div>
        </div>


        {/*card kanan*/}
        
        
        <div className="col-md-6">
        {
        this.state.bookings.map((booking) =>
        <div className="card">
        <div className="card-body">

          {/*isi card kanan*/}
          <div key={booking.id} className="card" >
          <div className="card-body">
          <div className="row">
            {/*isi card kanan row 1*/}
            <div className="col-md-4">
             <p>Platform Name</p>
             <p className="card-title"> {booking.idDetilBooking} Booking </p>
            </div>
            {/*isi card kanan row 2*/}
            <div className="col-md-5">   
              <p>3 Trucks</p>
              <p className="card-title"> Rp {booking.hargaPenawaran},- </p>
            </div>
            {/*isi card kanan row 3*/}
            <div className="col-md-3">
            <button type="button" className="btn btn-secondary btn-sm btn-block">Info</button>
            <button type="button" className="btn btn-primary btn-sm btn-block">Book</button>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        )
        }
        </div>
        </div>
      </div>
      
  )};
}

export default App;