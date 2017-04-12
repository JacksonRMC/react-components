var goShopping = ['kale', 'pickles', 'horse meat', 'oranges'];

var GroceryList = (props) => (
  <div>
    <h2>Grocery Time</h2>
    <ul>
      {props.items.map(buyIt => 
        <GroceryListItem item={buyIt} /> 
      )}
    </ul> 
  </div>  
)

class GroceryListItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      done: false
    };

  }

  render () {
     
     var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
     };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
      );
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

};




ReactDOM.render(<GroceryList items={goShopping}/>, document.getElementById("app"));
  // return ( 
  // <ul>
  //   <li onClick={onListItemClick}>{props.items[0]}</li>
  //   <li>{props.items[1]}</li>
  //   <li>{props.items[2]}</li>
  // </ul>