# 简单使用
使用
```javascript
zhue.request(URL地址, 回调函数)
```
发起GET请求

使用
```javascript
zheu.request(URL地址, 回调函数, 请求体)
```
发起POST请求
# 进阶使用
使用
```javascript
zhue.request.request(URL地址, {
  method: 方法,
  cache: 使用启用缓存,
  onProcessEnd: 回调函数,
  AllowedMIME: 允许的返回MIME，如果为空数组则视为无限制,
  AllowedLanguage: 允许的返回语言，如果为空数组则视为无限制,
  body: 请求体
})
```
发起高级请求
