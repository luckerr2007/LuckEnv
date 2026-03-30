# 构建问题修复计划

## 问题分析

通过分析 `d:\Desktop\logs_62530801588` 中的构建日志，发现以下问题：

### 问题 1: Element Plus 图标导入错误 (所有平台)

**错误信息**:
```
"Play" is not exported by "node_modules/@element-plus/icons-vue/dist/index.js"
```

**影响文件**: `src/render/components/Tools/ImageCompress/BatchImage.vue`

**原因**: `Play` 图标在 `@element-plus/icons-vue` 中不存在，正确的图标名称是 `VideoPlay`

**修复方案**: 将 `Play` 替换为 `VideoPlay`

### 问题 2: Linux arm64 构建被取消

由于其他平台构建失败，GitHub Actions 自动取消了剩余的构建任务。

## 修复步骤

### 步骤 1: 修复图标导入

修改 `src/render/components/Tools/ImageCompress/BatchImage.vue`:
- 第 146 行: 将 `Play` 替换为 `VideoPlay`
- 第 43 行模板中使用的是 `:icon="Play"`，需要改为 `:icon="VideoPlay"`

### 步骤 2: 提交并推送修复

```bash
git add -A
git commit -m "fix: 修复 Element Plus 图标导入错误 - Play 改为 VideoPlay"
git push origin master
```

### 步骤 3: 重新触发构建

删除旧的 v1.0.0 标签并重新创建：
```bash
git tag -d v1.0.0
git push origin --delete v1.0.0
git tag v1.0.0
git push origin v1.0.0
```

## 验证

修复后，所有 5 个构建任务应该都能成功完成：
1. Build Windows (x64)
2. Build macOS (arm64)
3. Build macOS (x64)
4. Build Linux (x64)
5. Build Linux (arm64)
