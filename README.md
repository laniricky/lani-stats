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

Choose from 23 professionally designed themes:

### Official & Classic
- **laniricky** - Signature orange and brown theme
- **github_dark** - GitHub's official dark theme
- **github_light** - GitHub's official light theme  
- **moonlight** - Purple-blue moonlit aesthetic
- **nord** - Arctic, north-bluish color palette
- **dracula** - Dark theme with vivid colors
- **monokai** - Classic code editor theme
- **ocean** - Deep blue oceanic vibes
- **synthwave** - Retro 80s neon aesthetic
- **midnight** - Deep dark with cyan accents
- **slate** - Modern slate blue palette
- **blue_pink** - Vibrant neon pink and cyan contrast

### New Color Palettes
- **lavender_mint** - Soft lavender with golden accents
- **ocean_sky** - Bright sky blue with ocean depths
- **military_olive** - Earthy olive green military aesthetic
- **neon_splash** - Electric purple and lime on black
- **autumn_spice** - Warm orange and brown autumn tones
- **cyber_teal** - Futuristic cyan and blue neon
- **purple_twilight** - Deep purple twilight gradient
- **forest_sage** - Natural sage green forest theme
- **deep_ocean** - Rich ocean blue depths
- **sunset_steel** - Vibrant orange sunset over steel
- **lavender_dream** - Soft purple with cream accents
- **coral_sage** - Gentle coral pink with sage green
- **crimson_gold** - Bold crimson with golden yellow

```markdown
![GitHub Stats](https://lani-stats.vercel.app/api?username=laniricky&theme=neon_splash)
```

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
