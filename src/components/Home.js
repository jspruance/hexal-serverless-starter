import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> You can customize and embed <strong>COPY-That!<small>&reg;</small></strong> Web Portal directly into your website to match your existing design. Track your truck fleet status in realtime such as ... 
          <p class="col-md-2"><i><strong>Status:</strong></i>&nbsp;&nbsp;<strong>Truck:</strong> 10536 &nbsp; 
              <strong>Driver:</strong> James Franco &nbsp; <strong>Date:</strong> 08/11/2020 &nbsp; 
              <strong>Time:</strong> 13:25:49 &nbsp; <strong>Speed:</strong> 95 kmph &nbsp; 
              <strong>Heading:</strong> SW &nbsp;  <strong>Location:</strong> I-489, New Haven, IN 46774, USA 
          </p>
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
