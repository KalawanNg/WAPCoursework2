import React from 'react';
import Hero from "./Hero";
import Exercises from "./Exercises";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Start from "./Start";

const Home = () => {
    return (
        <>
            {/* <div className="rounded-2 overflow-hidden"><div className="gmap_canvas"><iframe width="100%" height="320" id="gmap_canvas" src={`https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title=""></iframe></div></div> */}
            <Hero />
            <Exercises />
            <Pricing />
            <Start />
            <Testimonials />
        </>
    );
};

export default Home;
