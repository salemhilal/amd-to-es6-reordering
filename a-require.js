console.log("log 2");
define([], function() {
    return function() {
        console.log("log 4");
    };
});
