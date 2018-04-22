import React, { Component } from 'react';
import { render } from 'react-dom';

// ...

// import app from './examples/cssModulesButtonCompose';
// import app from './examples/cssModulesBox';
// import app from './examples/nestedComponents';
// import app from './examples/nestedComponentsWithContext';
// import app from './examples/post';
// import app from './examples/counter';
// import app from './examples/timer';
// import app from './examples/nameFormControlled';
// import app from './examples/nameFormUncontrolled';
import app from './examples/productList';

// ...

app(component => render(component, document.getElementById('root')));