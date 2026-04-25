/**
 * Bash Spawn Hook Example
 *
 * Adjusts command, cwd, and env before execution.
 *
 * Usage:
 *   ego -e ./bash-spawn-hook.ts
 */

import type { ExtensionAPI } from "@zheyihe/ego-coding-agent";
import { createBashTool } from "@zheyihe/ego-coding-agent";

export default function (ego: ExtensionAPI) {
	const cwd = process.cwd();

	const bashTool = createBashTool(cwd, {
		spawnHook: ({ command, cwd, env }) => ({
			command: `source ~/.profile\n${command}`,
			cwd,
			env: { ...env, EGO_SPAWN_HOOK: "1" },
		}),
	});

	ego.registerTool({
		...bashTool,
		execute: async (id, params, signal, onUpdate, _ctx) => {
			return bashTool.execute(id, params, signal, onUpdate);
		},
	});
}
