var style = require('!css!less!./style.less');
module.exports = class extends React.Component{
    render (){
        return (
            <div className="app-drawer">
                <style dangerouslySetInnerHTML={{__html: "\n" + style}}/>
                <i className="glyphicon glyphicon-wrench"></i>
            </div>
        )
    }
};