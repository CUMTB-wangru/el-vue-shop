# vue_shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目结构
1.安装node 16.16.0，最好通过nvm控制node版本；Git
2.导入mydb.sql,连接MySQL；先安装需要的依赖，使用node运行接口文件 node ./app.js
3.接口请求方式对照接口文档  电商后台管理api接口文档

.prettierrrc  vscode保存代码格式配置
.eslintrc.js  Eslint语法配置

作用域插槽的使用：slot-scope="scope" scope 拿到请求后端返回的全部数据
                scope.row 拿到一行数据
<template slot-scope="scope">
    <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeById(scope.row.goods_id)"></el-button>
</template>
