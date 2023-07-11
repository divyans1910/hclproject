import React from "react";
import Carousel from 'react-bootstrap/Carousel';
<link rel="stylesheet" href="carousel.css"></link>

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
          alt="First slide"
          style={{height:400, width: 1400}}
        />
        <Carousel.Caption>
          <h3>Safe Parking</h3>
          <p>Round the clock parking for the safety of your vehicle.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UfQ1spVIgBvdMRUj3v70vth9_Rb7OAF-eQ&usqp=CAU"
          alt="Second slide"
          style={{height:400, width: 1300}}
        />

        <Carousel.Caption>
          <h3>Ample Parking Space</h3>
          <p>Never have to park your road on the curbside again.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1545179605-1296651e9d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
          style={{height:400, width: 1300}}
        />

        <Carousel.Caption>
          <h3>Parking Lights </h3>
          <p>
            Parking lights sensors to keep track of parking spaces, easily.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
