import { makeAutoObservable } from "mobx";

class Store{

    count = 2;

    constructor(){

        makeAutoObservable(this);

    }

    inc(){
        this.count+=1;
    }
}

const store = new Store();

export default store;
