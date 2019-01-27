console.log("log 1");
require([
    "./a-require.js"
], function(a) {
    console.log("log 3");
    a();
    console.log("log 5");
});
