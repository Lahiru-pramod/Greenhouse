import React from 'react'
import './items.css';

function items() {
    return (
        <div className='container'>

            <div className="row" id="row1">

                <h3>- Plant Items -</h3>

                </div>

                <div className="row" id="row2">


       <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/whiterose.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">White rose</p>
        </div>
      </div>
      <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/redrose.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Red rose</p>
        </div>
      </div>
      <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/yellow.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Yellow rose</p>
        </div>
      </div>
      <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/bluerose.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Blue rose</p>
        </div>
      </div>
      <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/temple.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Temple flower</p>
        </div>
      </div>
      <div className="card " style={{width: '18rem'}}>
        <img className="card-img-top" src="/image/daspethiya.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Daspethiya flower</p>
        </div>
      </div>
     
     
    


      </div>

        </div>

    )
}

export default items
