function checkName(name){
    return new Promise((resolve, reject)=>{
        if(name === "kodlib"){
            resolve(name)
        } else{
            reject("Kullanıcı adınız yanlış.")
        }
    })
}
