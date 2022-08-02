# vue_test

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

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## ref属性

    1、被用来给元素或子组件注册应用信息
    2、使用在html标签中获取真实dom元素，使用在组件标签上市组件实例对象
    3、获取方式：this.$ref.xxx

## props属性

    1、简单声明 props:['name','address']
    2、接受的同时对数据进行类型限制 props:{ name:String, address:String }, 
    3、接受数据同时对数据进行类型的限制+默认值的认定+必要性的限制 
      props:{ 
      name:{ t
      ype:String,
      required:true }, 
      address: 
          { type:String, default:'北京' } } }
    **注意：**props是只读，vue底层会检测它的修改，如果需要修改的话可以借助data中新设置一个属性
##mixin混入
    功能：可以吧多个组件共用的配置提取成一个混入对象
    使用方式：定义混入，使用混入（1、全局混入：vue.mixin 2、
    局部混入：mixins:[xxx]）
##案例
     ##todo案例总结
        1、拆分静态组件、实现动态组件、实现交互
        2、props适用于：父组件===>子组件 通信
                    子组件===>父组件  通信（需要借助函数，父先给子一个函数）
        3、使用v-model：其不能绑定props传过来的值，不可以修改
        4、props传过来的弱势对象类型的值，修改对象中的属性是vue不会报错
    