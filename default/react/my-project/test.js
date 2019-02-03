function runAsync() {
    var p = new Promise(function(resolve, reject) {
        //做一些异步操作
        resolve('随便什么数据');
        setTimeout(function() {
            console.log('执行完成');
        }, 5000);
    });
    return p;
}
// runAsync()
runAsync()
runAsync().then();
console.log('aaa')
