const jobFunction =(a, b) =>{
    new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(typeof a === 'number' && typeof b === 'number')
        {
            resolve(a+b) ;
        }
        else{
       reject({error: "a and b is not number"})
        }
      })
    }, 5000);
}
jobFunction.then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error);
})