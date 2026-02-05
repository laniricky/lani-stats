# Contributing

Thank you for considering contributing to Lani Stats!

## How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive messages
4. Push your changes to your fork
5. Submit a pull request

## Guidelines

- Follow the existing code style
- Write clear and concise commit messages
- Ensure your changes do not break existing functionality
- Test your changes locally before submitting

## Adding New Themes

To add a new theme, edit `api/utils/themes.js` and add your theme to the `themes` object:

```javascript
my_theme: {
  title_color: 'ffffff',
  icon_color: '00ff00',
  text_color: 'cccccc',
  bg_color: '000000',
  border_color: '333333',
}
```

## Development

```bash
vercel dev
```

Visit `http://localhost:3000/api?username=yourusername&theme=yourtheme`
