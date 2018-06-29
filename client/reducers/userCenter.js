import "babel-polyfill";
import ACTION from "./actions";

const initialState = {
    register:{
        registerLoading:true
    },
    checkNickname:{
        loadingCheckNickname:true,
        isRepeat:true
    }
};

const {userCenter} = ACTION;

function register(preState  = initialState.register,action){
    switch(action.type){
        case  userCenter.register.submit: 
            return {...preState ,registerLoading:true}
        break;
        case userCenter.register.success:
            console.log(action)
            return{...preState,...action.payload,registerLoading:false};
        break;
        case userCenter.register.fail:
            console.log(action)
            return{...preState,registerErr:action.payload,registerLoading:false};
        break;
        default :
            return preState
    }
};

function checkNickname(preState = initialState.checkNickname,action){
    switch(action.type){
        case userCenter.checkNickname.submit:
            return { ...preState , loadingCheckNickname:true};
        break;
        case userCenter.checkNickname.success:
            return {...preState,isRepeat:action.payload.isRepeat,loadingCheckNickname:false};
        break;
        case userCenter.checkNickname.fail:
            return {...preState,checkNicknameErr:action.payload,loadingCheckNickname:false}
        break;
        default :
            return preState;
    }
}

export  {register,checkNickname};