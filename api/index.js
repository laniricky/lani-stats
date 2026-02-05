const GitHubAPI = require('./utils/github');
const { renderStatsCard } = require('./utils/svg');
const { getTheme } = require('./utils/themes');

module.exports = async (req, res) => {
    try {
        const { username, theme = 'default', cache_seconds = 1800 } = req.query;

        if (!username) {
            return res.status(400).send('Missing username parameter');
        }

        const token = process.env.GITHUB_TOKEN || process.env.PAT_1;
        const api = new GitHubAPI(token);

        const stats = await api.getStats(username);
        const selectedTheme = getTheme(theme);
        const svg = renderStatsCard(stats, selectedTheme);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', `public, max-age=${cache_seconds}`);
        res.status(200).send(svg);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(`
      <svg width="495" height="120" xmlns="http://www.w3.org/2000/svg">
        <rect width="495" height="120" fill="#ff0000"/>
        <text x="10" y="60" fill="#ffffff" font-size="16">Error: ${error.message}</text>
      </svg>
    `);
    }
};
