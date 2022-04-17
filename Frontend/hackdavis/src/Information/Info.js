import {extendObservable} from 'mobx';

class Information {
    constructor() {
        extendObservable(this, {
            pos: []
        })
    }
}

export default new Information(); // makes an instance of new userstore when user loads it up 