# learn-webpack

#### webpack的默认入口 src/index.js, 默认打包出口/dist
#### “执行npm run build，Webpack就会预先读取webpack.config.js，然后进行打包。”
#### “每次webpack-dev-server接收到请求时都只是将内存中的打包结果返回给浏览器。 "（能够刚好的支持开发者实时看到代码的更新！）

#### 模块的区别commomjs和es module
- “它们的主要区别在于前者建立模块依赖关系是在运行时，后者是在编译时；在模块导入方面，CommonJS导入的是值拷贝，ES6 Module导入的是只读的变量映射；ES6 Module通过其静态特性可以进行编译过程中的优化，并且具备处理循环依赖的能力。”


#### npm模块都有一个入口文件，当我们家在一个模块时，实际上是加载该模块的入口文件。

#### 分拆原理；“由于vendor仅仅包含第三方模块，这部分不会经常变动，因此可以有效地利用客户端缓存，在用户后续请求页面时会加快整体的渲染速度。” 
- 业务代码是自己写的，要根据自己的业务来变化
- 通用的依赖比如，react，react-dom等包是不变的，因此可以单独拆分，最大效果的利用客户端缓存。“提取vendor的方法，将各个页面之间的公共模块进行打包。”

#### 单页应用
#### 多页面应用
- 多入口

#### 不是很理解webpack和webpack-dev-server中的publicPath有啥区别

#### 各种loader能够帮助webpack（只能理解javascript代码）处理各种资源。“style-loader加到了css-loader前面，这是因为在Webpack打包时是按照数组从后往前的顺序将资源交给loader处理的，因此要把最后生效的放在前面。”
```js
module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
```

#### exclude和include
- “include代表该规则只对正则匹配到的模块生效。”
- “由于exclude优先级更
```js
“rules: [
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        include: /node_modules\/awesome-ui/,
    }
],”
```
#### 常见的loader
- babel-loader
```js
npm i babel-loader @babel/core @babel/preset-env
//  babel-loader 链接babel与webpack
// @babel/core babel编译器的核心模块
// @babel/preset-env “它是Babel官方推荐的预置器，可根据用户设置的目标环境自动添加所需的插件和补丁来编译ES6+代码。”
```
- “babel-loader支持从.babelrc文件读取Babel配置，因此可以将presets和plugins从Webpack配置文件中提取出来，也能达到相同的效果。”