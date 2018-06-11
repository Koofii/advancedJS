export default class Set {
    constructor(list = []){
        this.list = list
    }
    size(){
        return this.list.length;
    }
    values(){
        return this.list
    }
    add(number){
        if(number === this.list.find(x => x === number)){
            return false;
        } else{
            this.list.push(number)
            return true;
        }
    }
}