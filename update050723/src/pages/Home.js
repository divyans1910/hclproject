import React from 'react';
import UncontrolledExample from '../components/carousel';
import GroupExample from '../components/pricing';
import Footer from '../components/footer';


function Home() {
return (
    <div>
    <div id="carousel">
    <UncontrolledExample />
    </div>
    <br></br>
    <GroupExample />
    <Footer/>
    </div>
);
}
export default Home;