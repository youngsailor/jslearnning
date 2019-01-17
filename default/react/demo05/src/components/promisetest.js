var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('执行完成。。。');
        resolve('随便什么数据');
    },500)
    console.log('先执行')
})
