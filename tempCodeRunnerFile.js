let cgpa = 9;

let res = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve (cgpa = 9.45);
    },1000);
});

res.then((rawData)=>{
    // cgpa = rawData;
    console.log(cgpa);
});