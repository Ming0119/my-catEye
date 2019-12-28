const MovieData=require('./public/mock/movie.json')
const mostExpectData = require('./public/mock/mostExpected.json')
// console.log(MovieData);
// console.log(MovieData.movieList);
const UpcomingData = require('./public/mock/upcoming.json')

module.exports={
    lintOnSave: false,
    devServer:{
        before:function (app,server) {
            app.get('/api/movieList',(req,res)=>{
                res.json({
                    list:MovieData,
                    errCode:0
                })
            })
            //轮播图
            app.get('/api/carousel', (req, res) => {
                res.json({
                  list: mostExpectData,
                  errCode: 0
                }) 
            })
            //即将上映接口

            app.get('/app/upcoming',(req,res)=>{
                res.json({
                    list: UpcomingData,
                    errCode: 0
                  }) 
            })
            //详情
            app.get('/app/detail',(req,res)=>{
               let { id }=req.query;
              
               res.json({
                   list:MovieData.movieList.filter(item=>item.id==id),
                   errCode:0
               }) 
            })
            //登入
        //     //账号，密码
        //     const USERDATA = [
        //         {
        //           user: 'devin',
        //           pwd: 123
        //         }
        //       ]
        //     //KEY键值
        //     const KEY='FE'
        //     app.get('/app/login',(req,res)=>{
        //         let { user, pwd }=req.query;
        //         let falg=USERDATA.some(item=>item.user==user&&item.pwd==pwd)
        //         if(falg){
        //             res.json({
        //                 errCode:0,
        //                 msg:'ok',
        //                 token:`${KEY}_${user}_${Date.now()}`
        //             })
        //         }else{
        //             res.json({
        //                 errCode: -1,
        //                 msg: 'no'
        //               })
        //         }
        //     })
        } 
    }
}