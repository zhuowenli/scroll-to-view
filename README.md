# scroll-to-view

## Example

[Example](http://www.zhuowenli.com/scroll-to-view/)


## Install

### npm
```
$ npm install scroll-to-view
```

### CDN
```html
<script src="https://unpkg.com/scroll-to-view/dist/scroll-to-view.js"></script>
```

## Usage

```js
scrollToView('#header', 300);
```

### Attributes
| name          | desc             | type      | default | required |
|-------------  |----------------- |---------- |-------- | -------- |
| selector      | element selector | string    | -       | ✔️       |
| duration      | animate time     | number    | 300     | -        |
| callback      | callback function| function  | -       | -        |


### Callback
You can pass a callback or `Promise` that will be called when all scrolling has been completed.

```js
// callback
scrollToView('#header', 300, () => console.log('done'));

// promise
scrollToView('#header', 300).then(() => console.log('done'))
```

## Size
<= 1 KB
