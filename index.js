module.exports = function stringShuffle(string){
    
    var strLength = string.length

    var a,b;
    var set = []
    var temp = 0

    for( var i = 0; i < strLength-1; i++){
        if(stri.length!=1){
            a = stri.charAt(temp)
            temp = temp+1
            b = stri.charAt(temp)
            temp = temp+1
            if(b.concat(a))
                set.push(b.concat(a))
        }
    }

    temp = 0

    for( var j = 0; j < set.length-1; j++){
        if(set.length!=1){
            a = set[temp]
            temp = temp+1
            if(set[temp]){
                b = set[temp]
                temp = temp+1
                set.push(b.concat(a))
            }
        }
    }

    return set[set.length-1]
};