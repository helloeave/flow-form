import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Intro from './Intro';
import RegularForm from './RegularForm';
import SliderForm from './SliderForm';
import asFieldHOC from './asFieldHOC';

import NavBar from './NavBar';

// import registerObserver from 'react-perf-devtool';
// registerObserver();

const padding = { margin: '0 2rem 0', padding: '1rem', border: '2px solid steelblue' };
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="*" component={NavBar} />
          <div style={padding}>
            <Route path="/" exact component={Intro} />
            <Route path="/regular" exact component={RegularForm} />
            <Route path="/slider-form" component={SliderForm} />
            <Route path="/styling" component={() => <div>@TODO</div>} />
            <Route path="/with-redux" component={() => <div>@TODO</div>} />
            <Route path="/with-react-router" component={() => <div>@TODO</div>} />
            <Route path="/asfield-hoc" component={asFieldHOC} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
