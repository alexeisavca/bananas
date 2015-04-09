module.exports = function(config){
    var Express = require('express');
    var app = Express();
    var npm = require('npm');

    return {
        run: function (){
            app.get('/', function (req, res) {
                res.send('Why hello there!');
            });

            app.listen(3000, function(){
                console.log("It's alive!");
                //npm.load(null, function(){
                //    //npm.commands.install(__dirname, ['react'], function(){
                //    //    console.log('it werked!');
                //    //})
                //    npm.commands.uninstall(['react'], function(){
                //        console.log('it werked!');
                //    })
                //});
            });
        }
    }
};

