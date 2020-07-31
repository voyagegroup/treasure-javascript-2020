## 環境

```
$ node -v
v12.18.2
```

```
$ node index.js
doAsyncTask2 value: doAsyncTask1
doAsyncTask3 value: doAsyncTask2
final result: doAsyncTask3
```

## 課題

以下のscriptで出力結果を変えないようにソースコードを書き換えてください

```js
(async function() {
    try {
        const result = await doAsyncTask1();
        const newResult = await doAsyncTask2(result);
        const finalResult = await doAsyncTask3(newResult);
        console.log('final result: ' + finalResult);
    } catch(error) {
        failureHandler(error);
    }
})();
```