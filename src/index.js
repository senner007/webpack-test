import 'core-js/features/promise';  
import 'whatwg-fetch';


document.querySelector('button').addEventListener('click', function () {

    var a = false;
    if (a) {
        var m = 'module';
        var asset = {
            css: import(/* webpackPrefetch: true  */ './css.css'),
            js : import(/* webpackPrefetch: true  */ `./${m}`)
        }
    }
    else {
        var m = 'module';
        var asset = {
            css: import(/* webpackPrefetch: true  */ './css2.css'),
            js : import(/* webpackPrefetch: true  */ `./${m}`)
        }
    }

    Promise.all([asset.css, asset.js]).then(function (mods) {
        console.log(mods[1].hello())
    })

})



