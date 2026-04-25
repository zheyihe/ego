import { APP_NAME } from "../config.js";
import type { SourceInfo } from "./source-info.js";

export type SlashCommandSource = "extension" | "prompt" | "skill";

export interface SlashCommandInfo {
	name: string;
	description?: string;
	source: SlashCommandSource;
	sourceInfo: SourceInfo;
}

export interface BuiltinSlashCommand {
	name: string;
	description: string;
}

export const BUILTIN_SLASH_COMMANDS: ReadonlyArray<BuiltinSlashCommand> = [
	{ name: "settings", description: "打开设置菜单" },
	{ name: "model", description: "选择 model（打开选择器 UI）" },
	{ name: "scoped-models", description: "启用/禁用 Ctrl+P 循环切换的 models" },
	{ name: "export", description: "导出 session（默认 HTML，也可指定路径：.html/.jsonl）" },
	{ name: "import", description: "从 JSONL 文件导入并恢复 session" },
	{ name: "share", description: "将 session 分享为 GitHub secret gist" },
	{ name: "copy", description: "复制最后一条 agent 消息到剪贴板" },
	{ name: "name", description: "设置 session 显示名称" },
	{ name: "session", description: "显示 session 信息和统计数据" },
	{ name: "changelog", description: "显示 changelog 条目" },
	{ name: "hotkeys", description: "显示所有键盘快捷键" },
	{ name: "fork", description: "从之前的用户消息创建新 fork" },
	{ name: "clone", description: "在当前位置复制当前 session" },
	{ name: "tree", description: "浏览 session tree（切换分支）" },
	{ name: "login", description: "配置 provider 认证" },
	{ name: "logout", description: "移除 provider 认证" },
	{ name: "new", description: "开始新 session" },
	{ name: "compact", description: "手动压缩 session 上下文" },
	{ name: "resume", description: "恢复另一个 session" },
	{ name: "reload", description: "重新加载 keybindings、extensions、skills、prompts 和 themes" },
	{ name: "quit", description: `退出 ${APP_NAME}` },
];
