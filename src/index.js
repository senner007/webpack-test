 import "@babel/polyfill";

var a = true;
if (a) {
    var m = 'module';
    var asset = {
        css: import('./css.css'),
        js : import(/* webpackPrefetch: true  */ `./${m}`)
    }

}

document.querySelector('button').addEventListener('click', function () {

    Promise.all([asset.css, asset.js]).then(function (mods) {
        console.log(mods[1].hello())
    })

})



