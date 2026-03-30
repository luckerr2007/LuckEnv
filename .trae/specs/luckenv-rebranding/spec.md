# LuckEnv 品牌重塑与功能精简 Spec

## Why
用户希望将 FlyEnv 项目完全重塑为自己的品牌 LuckEnv，并删除不需要的功能模块（AI助手、留言反馈、Ollama），使程序更加简洁。

## What Changes
- **程序名称**: FlyEnv → LuckEnv
- **作者信息**: LuckErr → 云梦鱼 (3225567838@qq.com)
- **版本号**: 4.13.6 → 1.1.0
- **GitHub URL**: https://github.com/xpf0000/FlyEnv → https://github.com/luckerr2007/LuckEnv
- **许可证**: BSD 3-Clause → 禁止二次创作、修改，需获得本人同意
- **删除功能**:
  - 给我留言功能 (Feedback 组件)
  - AI助手功能 (AI 组件)
  - Ollama 模块

## Impact
- Affected code: 
  - `package.json` - 名称、版本、作者
  - `LICENSE` - 许可证协议
  - `src/render/components/About/` - 关于页面
  - `src/render/components/Feedback/` - 删除
  - `src/render/components/AI/` - 删除
  - `src/fork/module/Ollama/` - 删除
  - `src/lang/*/` - 语言文件
  - `src/helper-go/winres/winres.json` - Windows 资源
  - `src/render/core/type.ts` - 移除 ollama 类型
  - `AGENTS.md` - 项目文档

## ADDED Requirements

### Requirement: 品牌重塑
系统 SHALL 将所有 FlyEnv 品牌标识替换为 LuckEnv。

#### Scenario: 关于页面显示
- **WHEN** 用户打开关于页面
- **THEN** 显示程序名称为 "LuckEnv"，作者为 "云梦鱼"，邮箱为 "3225567838@qq.com"，GitHub 链接为 "https://github.com/luckerr2007/LuckEnv"

#### Scenario: 更新检查
- **WHEN** 用户检查更新
- **THEN** 从 LuckEnv 的 GitHub 仓库检查更新

### Requirement: 许可证更新
系统 SHALL 使用新的许可证协议。

#### Scenario: 许可证显示
- **WHEN** 用户查看许可证
- **THEN** 显示禁止二次创作、修改，需获得本人同意的条款

## REMOVED Requirements

### Requirement: AI 助手功能
**Reason**: 用户不需要 AI 助手功能
**Migration**: 删除 `src/render/components/AI/` 目录及相关引用

### Requirement: 留言反馈功能
**Reason**: 用户不需要留言反馈功能
**Migration**: 删除 `src/render/components/Feedback/` 目录及相关引用

### Requirement: Ollama 模块
**Reason**: 用户不需要 Ollama 模块
**Migration**: 删除 `src/fork/module/Ollama/` 目录及 `type.ts` 中的 ollama 类型
