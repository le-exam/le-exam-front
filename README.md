# le-exam-front

> A Vue.js project

### 编译运行

安装依赖包

```shell
$ npm install
```

运行

```shell
$ npm run server
# 或者
$ yarn run dev
```



### 编写代码

vscode vue 代码格式化插件

- **Prettier ESLint**



### 跨域解决

在 src -> main -> java -> com.leexam.utils -> Config类文件中加入以下代码，并导入包。

```java
   /**
     * 开启跨域
     */
    public void addCorsMappings(CorsRegistry registry) {
        // 设置允许跨域的路由
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOriginPatterns("*")
                // 是否允许证书（cookies）
                .allowCredentials(true)
                // 设置允许的方法
                .allowedMethods("*")
                // 跨域允许时间
                .maxAge(3600);
    }
```

后期让后端解决。

### VUE AJAX

**配置后端api路径**

main.js中 ```BACK_URL``` 常量，默认是```http://127.0.0.1:8081```

AJAX使用方法（POST）：

```javascript
this.$axios
    .post(that.getApi('####'), param) // ####是请求地址，地址不带前缀
    .then(function (response) {
		// 成功后调用代码
	})
    .catch(function (error) {
        console.log(error)
        // 失败后调用代码
    })
```

注意，axios方法中，this指向发生变化，提前使用类似以下语法：

```javascript
var that = this
```

将this提取出来，在axios方法中this使用that代替。

类似的，获取请求地址使用```that.getApi()```方法。