// Execution Context (EC) Lifecycle


// *****************************************************************************
// Every Execution Context works in several steps.
// Following are the main phases of the Execution Context lifecycle:


// 1. Creation Phase / Memory Allocation
//   -- First, a Global Execution Context is created which contains many properties.
//   -- In this phase, space in memory is allocated to the variables or functions. Note: they are just allocated some space, but not assigned yet! Their value remains "Undefined".
//   -- The "this" keyword is set with the variable/function.


// 2. Execution Phase
//   -- In this phase, all the assignments and calculations are done.
//   -- The actual values are assigned to the variables.
//   -- The functions are executed.


// 3. Context Removal
//   -- Once an execution is completed, its Execution Context is deleted.
//   -- The memory is cleared.


// Here is the code example of the lifecycle of EC. Consider the following example:

let a = 10;
let b = 20;

function addNumbers(x, y) {
    let total = x + y;
    return total;
}

let result1 = addNumbers(a, b);
let result2 = addNumbers(2, 5);


// The above is a basic code for an add function; nothing to explain about the code.
// Let's see it from the Execution Context lifecycle point of view:


// 1. Once the code is run, a Global Execution Context will be created.


// 2. Creation Phase:
// {
//     Line 1-2: The space for variables a and b will be reserved in memory with value as undefined.
//     Line 3-6: Memory for the function addNumbers will be reserved.
//     Line 7-8: Memory for variables result1 and result2 will be allocated.
// }

// 3. Execution Phase
// { 
//     Line 1-2: Values will be assigned to a and b in memory.
//     Line 3-6: The function addNumbers will be assigned the function block.
//     Line 7: Here several steps will take place which can be concluded as:
//                => First, upon seeing the function addNumbers(), a new Function execution context will be created.
//                => Here, first, the Creation Phase will occur, and x, y, and total will be declared as undefined in memory.
//                => After the Creation Phase, the function will get executed, and calculations will be made.
//                => result1 variable will finally store its final value as 30.
//                => Once the function is completed, its Execution Context will get deleted (the one created in line 7).
//     Line 8: Here again, all steps will occur the same as line 7: memory allocation, then execution, then context deletion.
// }    
