//app.js:

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [Codecademy];


// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

//bash:

$ node app.js
shell-init: error retrieving current directory: getcwd: cannot access parent directories: No such file or directory
path.js:1142
          cwd = process.cwd();
                        ^

Error: ENOENT: no such file or directory, uv_cwd
    at Object.resolve (path.js:1142:25)
    at startup (bootstrap_node.js:129:32)
    at bootstrap_node.js:542:3
$ 

