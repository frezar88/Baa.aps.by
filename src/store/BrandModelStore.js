import {makeAutoObservable} from "mobx";

export default class BrandModelStore {
    constructor() {
        this._brand =[]

        this._model =[]

        this._bodyType=[]

        this._carType=[]

        makeAutoObservable(this)
    }

    setBrand(brand){
        this._brand = brand
    }
    setModel(model){
        this._model = model
    }
    setBodyType(bodyType){
        this._bodyType = bodyType
    }
    setCarType(carType){
        this._carType = carType
    }

    get IsBrand(){
        return this._brand
    }
    get Model(){
        return this._model
    }
    get IsBodyType(){
        return this._bodyType
    }
    get IsCarType(){
        return this._carType
    }


}