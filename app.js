var GroceryList = (props) => (
  <div>
    <h2>Grocery Time</h2>
    {props.items.map(item => 
      <GroceryListItems item={item} /> 
    )}
  </div>
);


class GroceryListItems extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li>{this.props.item}</li>
      );
  }
  
  onListItemClick (event) {
    console.log('I got clicked');
  };

};



ReactDOM.render(<GroceryList />, document.getElementById("app"));
  // return ( 
  // <ul>
  //   <li onClick={onListItemClick}>{props.items[0]}</li>
  //   <li>{props.items[1]}</li>
  //   <li>{props.items[2]}</li>
  // </ul>