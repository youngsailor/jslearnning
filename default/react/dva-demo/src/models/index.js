// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);

//当model有很多的时候 ，用这个方法遍历导入
const context = require.context('./', false, /\.js$/);
console.log(context.keys())
export default context
    .keys()
    .filter(item => item !== './index.js')
    .map(key => context(key));
