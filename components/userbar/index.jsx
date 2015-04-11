var style = require('!css!less!./style.less');
console.log('' + style);
module.exports = class extends React.Component{
    render (){
        return (
            <div className="user-bar">
                <style dangerouslySetInnerHTML={{__html: "\n" + style}}/>
                <img src="https://placekitten.com/g/50/50" alt="" className="avatar" width="50" height="50"/>
                &nbsp;
                <strong>Alexei Savca</strong>
            </div>
        )
    }
};