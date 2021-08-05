# 集成git提交规范
* 参考网址 https://commitlint.js.org/#/concepts-shareable-config
* 安装中遇到的问题
    * Npx command not find
        * 解决方案
            * 新建文件：code ~/.huskyrc  输入以下命令即可
            * export NVM_DIR="$HOME/.nvm"
            * [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
* git cz 提交 (git commit 提交规范)
    * 文档： https://github.com/commitizen/cz-cli

* 配置文件相关（根目录下）
      + .cz-config.js
      + .commitlint.config
      + package.json
* package.json中的配置不要和commitlint.config.js冲突（如下）。
~~~
 "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
~~~