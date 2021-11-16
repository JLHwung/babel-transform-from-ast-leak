# babel-transform-from-ast-leak

Run

```
node ./leak.mjs
```

then profile the memory usage.

Note: If `transformAstSync` is replaced by `transformSync`, the memory usage will be stablized around 150MB.
