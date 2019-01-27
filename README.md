# AMD to ES6 reordering.

This repo demonstrates that code transpiled from AMD to ES6 could behave differently if the
AMD code has logic outside of its `require` or `define` calls. Specifically, code execution
order could change. If any of that code exposes or consumes global variables or
manipulates the DOM, that logic could break across transpilation.

## Run the demo

To see the demo, open `index-require.html` and `index-import.html` and compare the logs in
the console. In particular, note that the numbered log lines are in order in
`index-require.html`, but are out of order in `index-import.html`.

Files ending in `-require.js` are written as-is, and files ending in `-import.js` were
transpiled using [`amd-to-es6`][amdtoes6].

This should work as-is in the most recent version of Firefox, no web server required.
If you use Chrome, you may run into CORS issues, which can be circumvented by serving
the files from a web server (`cd amd-to-es6-reordering && python3 -m http.server`).
You could also [start Chrome with the `--disable-web-security` flag][stackoverflow]. 

[stackoverflow]:https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
[amdtoes6]:https://www.npmjs.com/package/amd-to-es6
