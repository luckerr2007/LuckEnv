# Tasks

- [x] Task 1: 更新 package.json 品牌信息
  - [x] 修改 name: FlyEnv → LuckEnv
  - [x] 修改 version: 4.13.6 → 1.1.0
  - [x] 修改 author: LuckErr → 云梦鱼 (3225567838@qq.com)
  - [x] 修改 copyright

- [x] Task 2: 更新 LICENSE 许可证
  - [x] 将 BSD 3-Clause 改为禁止二次创作、修改的许可证

- [x] Task 3: 更新关于页面 (src/render/components/About/index.vue)
  - [x] 修改程序名称: FlyEnv → LuckEnv
  - [x] 修改作者信息
  - [x] 修改 GitHub 链接: https://github.com/luckerr2007/LuckEnv
  - [x] 删除留言反馈按钮
  - [x] 删除赞助链接

- [x] Task 4: 删除 Feedback 模块
  - [x] 删除 src/render/components/Feedback/ 目录
  - [x] 删除相关语言文件中的 feedback 翻译

- [x] Task 5: 删除 AI 模块
  - [x] 删除 src/render/components/AI/ 目录
  - [x] 删除相关语言文件中的 AI 翻译

- [x] Task 6: 删除 Ollama 模块
  - [x] 删除 src/fork/module/Ollama/ 目录
  - [x] 从 src/render/core/type.ts 移除 ollama 类型
  - [x] 删除所有语言文件中的 ollama.json

- [x] Task 7: 更新 Windows 资源文件 (src/helper-go/winres/winres.json)
  - [x] 修改产品名称和公司信息

- [x] Task 8: 更新 AGENTS.md 项目文档
  - [x] 修改项目名称和作者信息
  - [x] 修改 GitHub 仓库链接

- [x] Task 9: 更新语言文件中的品牌信息
  - [x] 搜索所有语言文件中的 FlyEnv 并替换为 LuckEnv
  - [x] 更新相关翻译

- [x] Task 10: 清理模块注册和引用
  - [x] 从模块列表中移除 AI、Feedback、Ollama 相关注册

# Task Dependencies
- Task 4, 5, 6 可并行执行
- Task 9 依赖 Task 3, 4, 5, 6 完成
- Task 10 依赖 Task 4, 5, 6 完成
