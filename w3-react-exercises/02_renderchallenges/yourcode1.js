// Render challenges part 1

let Component = props => {
  // Enter code here so that the component outputs what is expected!
  return (<div>
    <h3>Shopping List</h3>
    <ul>
      <li>Milk</li>
      <li>Eggs</li>
      <li>Patience</li>
    </ul>
  </div>
  )
};

ReactDOM.render(
  // Enter code here so the component is rendered to the #target div!
  <Component />,
  document.getElementById('target')
);