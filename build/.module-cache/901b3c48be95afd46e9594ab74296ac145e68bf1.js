// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// var TodoList = React.createClass({
//     getInitialState: function() {
//         return {
//             items: ['hello', 'world', 'click', 'me']
//         };
//     },
//     handleAdd: function() {
//         var newItems =
//             this.state.items.concat([prompt('Enter some text')]);
//         this.setState({
//             items: newItems
//         });
//     },
//     handleRemove: function(i) {
//         var newItems = this.state.items;
//         newItems.splice(i, 1);
//         this.setState({
//             items: newItems
//         });
//     },
//     render: function() {
//         var items = this.state.items.map(function(item, i) {
//             return (
//                 <div key = {item} onClick = {this.handleRemove.bind(this, i)} >
//                     {item}
//                 </div>
//             );
//         }.bind(this));
//         return ( 
//             <div>
//                 <button onClick = {this.handleAdd}>Add Item</button> 
//                 <ReactCSSTransitionGroup transitionName = "example" transitionAppear={true}>
//                     {items} 
//                 </ReactCSSTransitionGroup> 
//             < /div>
//         );
//     }
// });
var LikeButton = React.createClass({displayName: "LikeButton",
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      React.createElement("p", {onClick: this.handleClick}, 
        "You ", text, " this. Click to toggle."
      )
    );
  }
});

ReactDOM.render(
  React.createElement(LikeButton, null),
  document.getElementById('example')
);