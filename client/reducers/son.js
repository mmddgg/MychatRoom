


let myBaby = new Baby({
    name:'杨承宇',
    gender:'boy',
    height:'40cm',
    weight:'3500g',
    petName:'果果',
    zodiac:'狗',
    birthday:'2018-07-29 ',
    constellatory:'狮子座',
    birthplace:'上海',
    parents:{
        dateOfMarriage:'2016-08-22',
        mother = new Women({
            age:29,
            name:'彭燕燕',
            height:'169cm',
            petName:'豆豆',
            hometown:'新疆·石河子',
            profession:'IOS开发工程师'
        }),
        father:new Man({
            age:29,
            name:'杨远远',
            height:'178cm',
            petName:'毛毛',
            hometown:'湖北·十堰',
            profession:'WEB前端开发工程师',
        }),
        hope:'Healthy and happy growth, become a positive, honest, beneficial to the community.'
    },
    theFirstVoice:'哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇',
    babyId:function(){
        const {birthday,name} = this;
        return Md5(`${birthday}-${name}-${UUID.v4()}`);
    }
});

