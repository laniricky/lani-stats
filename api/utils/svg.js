function createCard({ width = 495, height = 195, bg_color, border_color, title, body }) {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#${bg_color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#${bg_color};stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <style>
        .header { font: 600 18px 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; }
        .stat-label { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; }
        .stat-value { font: 700 14px 'Segoe UI', Ubuntu, Sans-Serif; }
        .icon { opacity: 0.8; }
      </style>
      <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="4.5" fill="url(#grad)" stroke="#${border_color}" stroke-opacity="0.6"/>
      ${title}
      ${body}
    </svg>
  `;
}

function renderStatsCard(stats, theme) {
  const { title_color, text_color, icon_color, bg_color, border_color } = theme;

  const title = `<text x="25" y="35" class="header" fill="#${title_color}">${stats.name}'s GitHub Stats</text>`;

  // SVG icons for each stat
  const icons = {
    stars: `<path fill="#${icon_color}" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
    repos: `<path fill="#${icon_color}" d="M4 9h16v11H4V9zm0-2V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2H4zm2 0h12V5H6v2z"/>`,
    forks: `<path fill="#${icon_color}" d="M5 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm11 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM8 19c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6-10.5C14 7.1 13.1 6 12 6s-2 1.1-2 2.5V12h4V8.5z"/>`,
    followers: `<path fill="#${icon_color}" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>`,
  };

  const statsList = [
    { icon: icons.stars, label: 'Total Stars', value: stats.totalStars },
    { icon: icons.repos, label: 'Public Repos', value: stats.totalRepos },
    { icon: icons.forks, label: 'Total Forks', value: stats.totalForks },
    { icon: icons.followers, label: 'Followers', value: stats.followers },
  ];

  const body = statsList.map((stat, i) => {
    const y = 70 + i * 30;
    return `
      <g transform="translate(25, ${y})">
        <svg width="20" height="20" viewBox="0 0 24 24" class="icon" y="-15">
          ${stat.icon}
        </svg>
        <text class="stat-label" fill="#${text_color}" x="30" y="0">${stat.label}:</text>
        <text class="stat-value" fill="#${icon_color}" x="380" y="0" text-anchor="end">${stat.value.toLocaleString()}</text>
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

  // Color palette for language bars
  const langColors = ['#00e676', '#ff6e96', '#79dafa', '#f8d847', '#bf91f3'];

  const body = languages.map((lang, i) => {
    const y = 70 + i * 35;
    const barWidth = Math.min(parseFloat(lang.percentage) * 3.5, 350);
    const color = langColors[i % langColors.length];

    return `
      <g transform="translate(25, ${y})">
        <text class="stat-label" fill="#${text_color}" x="0" y="0">${lang.name}</text>
        <rect x="150" y="-12" width="${barWidth}" height="16" fill="${color}" rx="8" opacity="0.9"/>
        <text class="stat-value" fill="#${text_color}" x="${165 + barWidth}" y="0">${lang.percentage}%</text>
      </g>
    `;
  }).join('');

  return createCard({
    width: 495,
    height: Math.max(195, 70 + languages.length * 35 + 25),
    bg_color,
    border_color,
    title,
    body,
  });
}

module.exports = { renderStatsCard, renderLanguagesCard };
