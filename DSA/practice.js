let str='watch thapha technical course in youtube';

function longesword(str){
    let count=0;
    let prev=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            prev=Math.max(prev,count);
            count=0;
            continue;
        }
        else{
            count++;
        }
    }
    return prev;
}

console.log(longesword(str));