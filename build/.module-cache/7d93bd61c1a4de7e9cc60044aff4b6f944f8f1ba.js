var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
 
var Carousel = React.createClass({displayName: "Carousel",
        propTypes: {
      transitionName: React.PropTypes.string.isRequired,
            imageSrc: React.PropTypes.string.isRequired
        },
        render: function() {
            return (
                React.createElement("div", {className: "carousel"}, 
                    React.createElement(ReactCSSTransitionGroup, {transitionName: this.props.transitionName}, 
                        React.createElement("img", {src: this.props.imageSrc, key: this.props.imageSrc})
                    )
                )
            );
        }
});