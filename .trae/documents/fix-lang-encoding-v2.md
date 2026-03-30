# 构建问题修复计划

## 问题分析

通过分析 `d:\Desktop\logs_62540441173` 中的构建日志，发现所有平台构建失败的根本原因是：

### 问题：中文语言文件编码损坏

**错误信息**:
```
Unterminated string literal
Unexpected "}" in JSON
Expected "," in JSON but found "确定"
```

**原因**: `src/lang/zh/` 目录下的 JSON 文件中，中文字符串被截断，导致 JSON 格式错误。

**受影响的文件**（根据日志）:
| 文件 | 行号 | 问题 |
|------|------|------|
| `conf.json` | 4 | 字符串截断 |
| `fork.json` | 3 | 字符串截断 |
| `update.json` | 2 | 字符串截断 |
| `php.json` | 6 | 字符串截断 |
| `mysql.json` | 1 | 文件损坏，只有 "}" |
| `host.json` | 10 | 字符串截断 |
| `token-generator.json` | 2 | 字符串截断 |
| `tools.json` | 3 | 字符串截断 |
| `base.json` | 117 | 中文引号问题 |
| `nodejs.json` | 6 | 字符串截断 |
| `meilisearch.json` | 3 | 字符串截断 |
| `requestTimer.json` | 16 | 字符串截断 |

## 修复步骤

### 步骤 1: 检查所有损坏的文件

读取所有受影响的 JSON 文件，确认损坏程度。

### 步骤 2: 从原始仓库获取正确文件

从 FlyEnv 原始仓库获取正确的中文语言文件内容。

### 步骤 3: 重写所有损坏的文件

使用正确的 UTF-8 编码重写所有损坏的 JSON 文件。

### 步骤 4: 验证 JSON 格式

确保所有 JSON 文件格式正确，字符串完整。

### 步骤 5: 提交并推送修复

```bash
git add -A
git commit -m "fix: 完整修复中文语言文件编码问题"
git push origin master --force
git push origin --delete v1.1.0
git tag -d v1.1.0
git tag v1.1.0
git push origin v1.1.0
```

## 预期结果

修复后，所有 5 个平台的构建应该都能成功完成。
