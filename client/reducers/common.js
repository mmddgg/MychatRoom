import "babel-polyfill";
import ACTION from "./actions";

const initState={
    language_key:'zh-CN'
}

export default function common(preState  = initialState,action){
    switch(action.type){
        case  ACTION.common.setLanguage:
            return {...preState,language_key:action.payload};
        break;
        default :
            return preState
    }
};