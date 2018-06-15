import "babel-polyfill";
import ACTION from "./actions";

const initialState = {

};

export  default function (preState  = initialState,action){
    switch(action.type){
        case  ACTION.register.submit: 
            return {
                ...preState ,loading:true
            }
        break;
        case ACTION.register.success:
            console.log(action)
            return{
                ...preState,...action.payload
            };
        break;
        case ACTION.register.fail:
            console.log(action)
            return{
                ...preState,registerErr:action.payload
            };
        break;
        default :
            return preState
    }
};