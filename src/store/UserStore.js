import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userCars = {}
        this._userBrand = {}
        this._userModels = {}
        this._loadDone = false
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setLoadDone(bool){
        this._loadDone = bool
    }
    setUser(user){
        this._user = user
    }
    setUserCars(cars){
        this._userCars = cars
    }
    setUserBrand(brand){
        this._userBrand = brand
    }
    setUserModels(model){
        this._userModels = model
    }

    get IsAuth(){
       return this._isAuth
    }
    get User(){
        return this._user
    }
    get UserCars(){
        return this._userCars
    }
    get UserBrand(){
        return this._userBrand
    }
    get UserModels(){
        return this._userModels
    }
    get UserLoadDone(){
        return this._loadDone
    }


}