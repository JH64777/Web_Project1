function Creator(){
    return new Promise((resolve) => {
        let result = '';
        for(let i = 0; i < 4; i++){
            result += Math.floor(Math.random() * 10).toString(); // create 4 length code
        }
        resolve(result); // return result
    });
}

module.exports = {CreateCode : Creator};