function createCard({ width = 495, height = 195, bg_color, border_color, title, body }) {
    return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; }
        .stat { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; }
        .stat-value { font: 400 14px 'Segoe UI', Ubuntu, Sans-Serif; }
        .icon { fill: currentColor; }
      </style>
      <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="4.5" fill="#${bg_color}" stroke="#${border_color}" stroke-opacity="1"/>
      ${title}
      ${body}
    </svg>
  `;
}

function renderStatsCard(stats, theme) {
    const { title_color, text_color, icon_color, bg_color, border_color } = theme;

    const title = `<text x="25" y="35" class="header" fill="#${title_color}">${stats.name}'s GitHub Stats</text>`;

    const statsList = [
        { icon: '★', label: 'Total Stars', value: stats.totalStars },
        { icon: '📦', label: 'Public Repos', value: stats.totalRepos },
        { icon: '🔱', label: 'Total Forks', value: stats.totalForks },
        { icon: '👥', label: 'Followers', value: stats.followers },
    ];

    const body = statsList.map((stat, i) => {
        const y = 70 + i * 30;
        return `
      <g transform="translate(25, ${y})">
        <text class="stat icon" fill="#${icon_color}" x="0" y="0">${stat.icon}</text>
        <text class="stat" fill="#${text_color}" x="30" y="0">${stat.label}:</text>
        <text class="stat-value" fill="#${text_color}" x="200" y="0">${stat.value}</text>
      </g>
    `;
    }).join('');

    return createCard({
        width: 495,
        height: 195,
        bg_color,
        border_color,
        title,
        body,
    });
}

function renderLanguagesCard(languages, theme) {
    const { title_color, text_color, icon_color, bg_color, border_color } = theme;

    const title = `<text x="25" y="35" class="header" fill="#${title_color}">Most Used Languages</text>`;

    const body = languages.map((lang, i) => {
        const y = 70 + i * 30;
        const barWidth = Math.min(parseFloat(lang.percentage) * 3, 300);
        return `
      <g transform="translate(25, ${y})">
        <text class="stat" fill="#${text_color}" x="0" y="0">${lang.name}</text>
        <rect x="120" y="-10" width="${barWidth}" height="12" fill="#${icon_color}" rx="5"/>
        <text class="stat-value" fill="#${text_color}" x="${130 + barWidth}" y="0">${lang.percentage}%</text>
      </g>
    `;
    }).join('');

    return createCard({
        width: 495,
        height: Math.max(195, 70 + languages.length * 30 + 20),
        bg_color,
        border_color,
        title,
        body,
    });
}

module.exports = { renderStatsCard, renderLanguagesCard };
