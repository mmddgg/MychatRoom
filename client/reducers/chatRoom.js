import "babel-polyfill";
import ACTION from "./actions";


const initialState = {
    list:{
        queryListLoading:true
    },
    detail:{
        queryDetailLoading:true
    }
};


const {chatRoom} = ACTION;

function chatRoomlist(preState  = initialState.list,action){
    let state = null;
    switch(action.type){
        case chatRoom.list.query:
            state = {...preState,queryListLoading:true};
        break;
        case chatRoom.list.querySuc:
            state = {...preState,queryListLoading:false,chatRoomListData:action.payload};
        break;
        case chatRoom.list.queryFail:
            state = {...preState,queryListLoading:false,chatRoomListErr:action.payload};
        break;
        default :
            state = preState;
    }
    return state;
}

function chatRoomdetail(preState  = initialState.detail,action){
    let state = null;
    switch(action.type){
        case chatRoom.detail.query:
            state =  {...preState,queryDetailLoading:true};
        break;
        case chatRoom.detail.querySuc:
            state = {...preState,queryDetailLoading:false,chatRoomDetail:action.payload};
        break;
        case chatRoom.detail.queryFail:
            state = {...preState,queryDetailLoading:false,chatRoomDetailErr:action.payload};
        break;
        default :
            state = preState;
    }
    return state;
}


export {chatRoomlist,chatRoomdetail};