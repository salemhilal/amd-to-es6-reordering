/**
 * This code is a direct conversion using amd-to-es6,
 * with the exception of updating a-require.js to be a-import.js.
 *
 * Note that this file is invalid because there is code that happens
 * before an import statement. As firefox yells, "import declarations
 * may only appear at top level of a module"

console.log("log 1");
import a from "./a-import.js";
    console.log("log 3");
    a();
    console.log("log 5");

 * The obvious fix here is to move the import statement to the top
 * of the file, which is what is below and outside of this comment.
 */
import a from "./a-import.js";
    console.log("log 1");
    console.log("log 3");
    a();
    console.log("log 5");



