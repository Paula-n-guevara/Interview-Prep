const nemo = ['nemo'];
//now add more characters 
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

//creating a large array 
const large = new Array(10000).fill('nemo'); //this array will have nemo 100 times 

function findNemo(array){
  let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo'){
            console.log('found NEMO!');
        }
    }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds'); //around 3 millisecs
}

//before it was findNemo(nemo);
//now it's 
findNemo(large); //took 7.5 ms //1000 took 1374.8 ms
//findNemo(everyone); --> now the time  4.02 secs
// index
//this is an instruction 
//what's thr run time? O(N)

//as your inout grows, your run-time becomes slower
//when looping, it loops around the number of items that you have so this will be linear time (O(n)) where n is the number of inputs
