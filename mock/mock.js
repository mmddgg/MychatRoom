import Mock from "mockjs";
import uuid from "uuid";


Mock.Random.boolean();
Mock.Random.string();
Mock.Random.date();
Mock.Random.image();

export default{
    checkNickname:Mock.mock({
        'isRepeat|1-2':true
    }),
    register:Mock.mock({
        'userId|1':uuid.v4    
    }),
    chatroomList:Mock.mock({
        "datalist|10":[{
            chatroomId:function(){
                return 'room_id_' + uuid.v4();
            },
            name:/[\u4e00-\u9fa5]{5,10}/,
            description:/[\u4e00-\u9fa5_a-zA-Z0-9]{15,}/,
            creatorId:uuid.v4,
            createTime:'@date("yyyy-MM-dd HH:mm:ss")',
            iconImg:Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
            maxPerson:10,
            'currentPerson|1-10':2,
            'necessaryPwd|1-2':true,
            pwd:/[_a-zA-Z0-9]{5,10}/
        }]
    }),
    chatroomDetail:Mock.mock({
        chatroomId:function(){
            return 'room_id_' + uuid.v4();
        },
        name:/[\u4e00-\u9fa5]{5,10}/,
        description:/[\u4e00-\u9fa5_a-zA-Z0-9]{15,}/,
        creatorId:uuid.v4,
        createTime:'@date("yyyy-MM-dd HH:mm:ss")',
        iconImg:Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
        maxPerson:10,
        'currentPerson|1-10':2,
        'necessaryPwd|1-2':true,
        pwd:/[_a-zA-Z0-9]{5,10}/
    })
};



