# 如何运行

1. 使用 vscode 下载 code runner 插件

2. 在 settings 里 增加如下配置 

```shell
 "code-runner.executorMap": {
    "javascript": "bun $fullFileName",
  },
```

3. 直接使用 code runner 的执行按钮执行当前算法代码文件。