let a = 0;
let inter =   setInterval(function(){
  a++;
  if(a === 3){ clearInterval(inter);
  return;
  } 
  console.log(a);
},1000)

fetch(`https://randomuser.me/api/`).then(raw => raw.json()).then(readable => console.log(readable.results[0].name))

fetch(`https://dog.ceo/api/breeds/image/random`).then(raw => raw.json()).then(res => console.log(res))


//axios
axios.get(`https://ipapi.co/json`).then(res => console.log(res.data.city))

//promises

const parchi = new Promise(function(resolve,reject){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        if(result.results[0].gender === "male") resolve();
        else reject();
    });
});

parchi.then(function(){
    console.log("hara");
})
.catch(function(){
    console.log("laal");
})

//callback

function getData(url,callback){
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result)
    })
}

getData("https://randomuser.me/api/", function(result){
    console.log(result.results[0].gender, result.results[0].name.first)
})

//genr=erators
function* printnums(){
    console.log("started");
    yield 1;
    console.log("hel");
    yield 2;
    console.log("ach");
    yield 3;
}

const ans = printnums();
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next());

//ex
function* allnums(){
    for(let i = 1; i<11;i++){
        yield i;
    }
}

const gen = allnums();
//prints as we want pauses at every iteration
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


//prime num b/w 1-100 using generator

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  
  function* primeNums(limit) {
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        yield i;
      }
    }
  }
  
  
  const primes = primeNums(100);
  
  console.log(primes.next().value); // 2
  console.log(primes.next().value); // 3
  console.log(primes.next().value); // 5
  console.log(primes.next().value); // 7
  console.log(primes.next().value); // 11
  
  //webworker

  let numss = Array.from({length: 1000000},(_,b) => b + 1);
  const worker = new Worker("worker.js");

  worker.postMessage(numss);
  worker.onmessage = function(data){
    console.log(data.data);
  }