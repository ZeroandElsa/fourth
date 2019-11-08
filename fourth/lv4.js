function Deepclone(obj) {
    if(obj == null){
        return obj;
    }
    const result = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] == 'object'){
                result[key] = Deepclone(obj[key]);
            }else{
                result[key] = obj[key];
            }
        }
    }
    return result;
}
//针对object属性调用递归
const result = Array.isArray(obj) ? [] : {};
//数组的兼容
const symbols = Object.getOwnPropertySymbols(obj);
for (let s of symbols) {
    if (typeof obj[s] == 'object') {
        result[s] = cloneDeep(obj[s]);
    } else {
        result[s] = obj[s];
    }
}
//Object.getOwnPropertySymbols() 
//方法返回一个给定对象自身的所有 Symbol 属性的数组
