import Mock from "mockjs";
import uuid from "uuid";


Mock.Random.boolean();
Mock.Random.string();



export default{
    checkNickname:Mock.mock({
        'isRepeat|1-2':true
    }),
    register:Mock.mock({
        'userId|1':uuid.v4    
    })
};



