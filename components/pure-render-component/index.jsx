var shallowEqual = require('react/lib/shallowEqual');
module.exports = class extends React.Component{
    shouldComponentUpdate (nextProps, nextState){
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
};