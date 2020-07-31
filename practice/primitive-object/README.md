## 環境

```
$ node -v
v12.18.2
```

オブジェクトを参照渡しをしてしまっているので元のオブジェクトのpropertyも書き変わってしまっています

```
$ node index.js
object1.property: value
object2.property: value2
object1.property: value2
```

## 課題

object1のpropertyが書き換わらないようにしてください

```
$ node index.js
object1.property: value
object2.property: value2
object1.property: value
```