# Lani Stats

> Lightweight GitHub stats generator API

Custom-built GitHub stats SVG generator designed for embedding in your profile README.

## Features

- 📊 User stats (stars, repos, forks, followers)
- 🎨 Top languages breakdown
- 🌈 Custom themes (including the signature `laniricky` theme)
- ⚡ Fast serverless deployment on Vercel
- 🔒 Zero dependencies (pure Node.js)

## Usage

### User Stats Card

```markdown
![GitHub Stats](https://lani-stats.vercel.app/api?username=laniricky&theme=laniricky)
```

### Top Languages Card

```markdown
![Top Languages](https://lani-stats.vercel.app/api/top-langs?username=laniricky&theme=laniricky)
```

## Query Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `username` | - | **Required**. GitHub username |
| `theme` | `default` | Theme name (`laniricky`, `tokyonight`, `dark`, `default`) |
| `cache_seconds` | `1800` | Cache duration in seconds |

## Available Themes

- **laniricky** - Bright green on dark (signature theme)
- **tokyonight** - Blue-purple neon
- **dark** - Classic dark mode
- **default** - Light mode

## Deployment

1. Fork this repository
2. Deploy to Vercel
3. Add `GITHUB_TOKEN` or `PAT_1` environment variable with your GitHub Personal Access Token
4. Use the generated URLs in your README

## Development

```bash
npm install vercel -g
vercel dev
```

Visit `http://localhost:3000/api?username=laniricky`

## Built With

- Node.js native `https` module
- Serverless functions on Vercel
- Pure SVG generation (no dependencies!)

## License

MIT © laniricky

---

Made with ⚡ by [laniricky](https://github.com/laniricky)
