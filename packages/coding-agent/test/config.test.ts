import { afterEach, describe, expect, test } from "vitest";
import { detectInstallMethod, getUpdateInstruction } from "../src/config.js";

const execPathDescriptor = Object.getOwnPropertyDescriptor(process, "execPath");

function setExecPath(value: string): void {
	Object.defineProperty(process, "execPath", {
		value,
		configurable: true,
	});
}

afterEach(() => {
	if (execPathDescriptor) {
		Object.defineProperty(process, "execPath", execPathDescriptor);
	}
});

describe("detectInstallMethod", () => {
	test("detects pnpm from Windows .pnpm install paths", () => {
		setExecPath(
			"C:\\Users\\Admin\\Documents\\pnpm-repository\\global\\5\\.pnpm\\@mariozechner+ego-coding-agent@0.67.68\\node_modules\\@mariozechner\\ego-coding-agent\\dist\\cli.js",
		);

		expect(detectInstallMethod()).toBe("pnpm");
		expect(getUpdateInstruction("@zheyihe/ego-coding-agent")).toBe("Run: pnpm install -g @zheyihe/ego-coding-agent");
	});
});
