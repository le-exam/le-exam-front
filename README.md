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
     * cors support
     * @return
     */
    @Bean
    public FilterRegistrationBean corsFilter() {
        // 注册CORS过滤器
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // 是否支持安全证书
        config.addAllowedOrigin("*"); // 允许任何域名使用
        config.addAllowedHeader("*"); // 允许任何头
        config.addAllowedMethod("*"); // 允许任何方法（post、get等）
        // 预检请求的有效期，单位为秒。
        //        config.setMaxAge(3600L);

        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
        bean.setOrder(0);
        return bean;
    }
```

后期让后端解决。