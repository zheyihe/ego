<p align="center">
  <a href="https://discord.com/invite/3cU7Bz4UPx"><img alt="Discord" src="https://img.shields.io/badge/discord-community-5865F2?style=flat-square&logo=discord&logoColor=white" /></a>
  <a href="https://github.com/zheyihe/ego/actions/workflows/ci.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/zheyihe/ego/ci.yml?style=flat-square&branch=main" /></a>
</p>

> New issues and PRs from new contributors are auto-closed by default. Maintainers review auto-closed issues daily. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

# Ego Monorepo

> **Looking for the ego coding agent?** See **[packages/coding-agent](packages/coding-agent)** for installation and usage.

Tools for building AI agents and managing LLM deployments.

## Packages

| Package | Description |
|---------|-------------|
| **[@zheyihe/ego-ai](packages/ai)** | Unified multi-provider LLM API (OpenAI, Anthropic, Google, etc.) |
| **[@zheyihe/ego-agent-core](packages/agent)** | Agent runtime with tool calling and state management |
| **[@zheyihe/ego-coding-agent](packages/coding-agent)** | Interactive coding agent CLI |
| **[@zheyihe/ego-mom](packages/mom)** | Slack bot that delegates messages to the ego coding agent |
| **[@zheyihe/ego-tui](packages/tui)** | Terminal UI library with differential rendering |
| **[@zheyihe/ego-web-ui](packages/web-ui)** | Web components for AI chat interfaces |
| **[@zheyihe/ego-pods](packages/pods)** | CLI for managing vLLM deployments on GPU pods |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and [AGENTS.md](AGENTS.md) for project-specific rules (for both humans and agents).

## Development

```bash
npm install          # Install all dependencies
npm run build        # Build all packages
npm run check        # Lint, format, and type check
./test.sh            # Run tests (skips LLM-dependent tests without API keys)
./ego-test.sh         # Run ego from sources (can be run from any directory)
```

> **Note:** `npm run check` requires `npm run build` to be run first. The web-ui package uses `tsc` which needs compiled `.d.ts` files from dependencies.

## License

MIT
