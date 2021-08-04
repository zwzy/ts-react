# mac 卸载与重装
* **卸载**
  1. cd ~
  2. rm -rf .nvm
  3. 移除掉~/.profile, ~/.bash_profile, ~/.zshrc, ~/.bashrc文件中关于nvm的配置，比如：(以.bash_profile为例)
      + vim .bash_profile -> 打开Path配置
      + 将export NVM_DIR 那段语句删除
      + 按ESC，: 后键入wq，回车 -> 保存修改
      + source .bash_profile -> 让配置文件里面生效
  4. 命令行输入nvm、npm，分别提示command not found，删除成功
* **安装**
  1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

  2. export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  3. 参考网址：https://github.com/nvm-sh/nvm#install-script



