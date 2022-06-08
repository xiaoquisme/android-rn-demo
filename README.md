## Installation
`npm install` 

## Run
`npm start`

It will start the React packager. Then, build and run the app by `Xcode` or `Android Studio/adb` for iOS or Android. 


## Notice
There is still something you should know:

### iOS
1. Please change the `Bundle Identifier` and `Signing Team` to your ones.


## 准备工作

https://github.com/xiaoquisme/docker-android-build-box

https://github.com/xiaoquisme/android-rn-demo

需要下载这两个项目,一个用于构建android的运行环境,另外一个用于验证android环境是否可用.

### 构建安卓运行环境

进入 `docker-android-build-box`的根目录,执行

```bash
docker build -t android-box-new:1.0 .
```

执行成功后通过执行

```bash
docker images -a | grep android-box-new
```

可以看到有android-box-new 的镜像.

### 验证可行性

进入`android-rn-demo`的根目录, 执行

```bash
docker build -t rn-demo:1.0 . --pull=false
```

执行成功后通过执行

```bash
docker images -a | grep rn-demo

```

可以看到有`rn-demo`的镜像

执行
```bash
docker run -it rn-demo:1.0 bash
```
之后看到
```
:app:mergeReleaseJniLibFolders
:app:transformNative_libsWithMergeJniLibsForRelease
:app:transformNative_libsWithStripDebugSymbolForRelease
:app:processReleaseJavaRes UP-TO-DATE
:app:transformResourcesWithMergeJavaResForRelease
:app:packageRelease
:app:assembleRelease

BUILD SUCCESSFUL

```
即为build 成功
