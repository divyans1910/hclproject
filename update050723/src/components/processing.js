import React from "react";
import Spinner from 'react-bootstrap/Spinner';

function BorderExample() {
  return( 
  <div id="object" style={{display:'flex', alignItems:'center', justifyContent: 'center', marginTop:'280px'}}>
  <Spinner animation="border" /> 
  <h1>Processing...</h1>
  </div>
  );
  
}

export default BorderExample;
  