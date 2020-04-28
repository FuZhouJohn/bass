# Bass - Vue UI 组件库

![Node.js CI](https://github.com/FuZhouJohn/bass/workflows/Node.js%20CI/badge.svg) ![npm](https://img.shields.io/npm/v/bass-ui) ![GitHub](https://img.shields.io/github/license/FuZhouJohn/bass) ![npm](https://img.shields.io/npm/dm/bass-ui)

## 介绍

学习 Vue 过程中制作的一个 UI 框架

## 开始使用

1. CSS 样式

    开启 border-box

    ```css
    *,*::before,*::after {box-sizing: border-box}
    ```
    IE 8 及以上浏览器支持此样式
    
    需要设置默认颜色变量
    
    ```css
    html {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --border-radius: 4px;
       --color: #333;
       --border-color: #999;
       --border-color-hover: #666；
    }
    ```
    
    IE 15 及以上浏览器支持此样式

2. 安装 Bass

   npm
   ```bash
   npm i --save bass-ui 
   ```
   
   yarn
   
   ```bash
   yarn add bass-ui
   ```

3. 引入
    ```javascript
    import {Button} from 'bass-ui'
    import 'bass-ui/dist/index.css'
   
    export default {
      name: 'App',
      components: {
        HelloWorld,
        'b-button':Button
      }
    }
    ```


## 文档

## 提问

## 版本记录

## 联系方式


