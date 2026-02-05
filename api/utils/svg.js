function createCard({ width = 495, height = 195, bg_color, border_color, title, body }) {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .card-bg { 
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }
        .header { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .stat-label { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .stat-value { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-size: 18px;
          font-weight: 700;
        }
        .divider {
          opacity: 0.1;
        }
      </style>
      <rect 
        class="card-bg"
        x="0.5" 
        y="0.5" 
        width="${width - 1}" 
        height="${height - 1}" 
        rx="6" 
        fill="#${bg_color}" 
        stroke="#${border_color}"
        stroke-width="1.5"
      />
      ${title}
      ${body}
    </svg>
  `;
}

function renderStatsCard(stats, theme) {
  const { title_color, text_color, icon_color, bg_color, border_color } = theme;

  const title = `
    <text x="24" y="38" class="header" fill="#${title_color}">
      ${stats.name}'s GitHub Stats
    </text>
    <line x1="24" y1="52" x2="471" y2="52" stroke="#${border_color}" class="divider" stroke-width="1"/>
  `;

  // Professional Material Design icons
  const icons = {
    stars: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              fill="#${icon_color}" stroke="#${icon_color}" stroke-width="0.5" stroke-linejoin="round"/>
      </svg>
    `,
    repos: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V3Z" 
              fill="#${icon_color}"/>
        <rect x="3" y="6" width="18" height="2" fill="#${bg_color}"/>
      </svg>
    `,
    forks: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="3" fill="#${icon_color}"/>
        <circle cx="18" cy="6" r="3" fill="#${icon_color}"/>
        <circle cx="12" cy="18" r="3" fill="#${icon_color}"/>
        <path d="M6 9v2c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4V9" stroke="#${icon_color}" stroke-width="2" fill="none"/>
        <path d="M12 15v-2" stroke="#${icon_color}" stroke-width="2"/>
      </svg>
    `,
    followers: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="#${icon_color}"/>
        <path d="M6 21c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#${icon_color}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </svg>
    `,
  };

  const statsList = [
    { icon: icons.stars, label: 'Total Stars', value: stats.totalStars },
    { icon: icons.repos, label: 'Public Repos', value: stats.totalRepos },
    { icon: icons.forks, label: 'Total Forks', value: stats.totalForks },
    { icon: icons.followers, label: 'Followers', value: stats.followers },
  ];

  const body = statsList.map((stat, i) => {
    const y = 78 + i * 36;
    return `
      <g transform="translate(24, ${y})">
        <g transform="translate(0, -8)">
          ${stat.icon}
        </g>
        <text class="stat-label" fill="#${text_color}" x="32" y="0">${stat.label}</text>
        <text class="stat-value" fill="#${title_color}" x="447" y="2" text-anchor="end">${stat.value.toLocaleString()}</text>
      </g>
    `;
  }).join('');

  return createCard({
    width: 495,
    height: 220,
    bg_color,
    border_color,
    title,
    body,
  });
}

function renderLanguagesCard(languages, theme) {
  const { title_color, text_color, icon_color, bg_color, border_color } = theme;

  const title = `
    <text x="24" y="38" class="header" fill="#${title_color}">
      Top Languages
    </text>
    <line x1="24" y1="52" x2="471" y2="52" stroke="#${border_color}" class="divider" stroke-width="1"/>
  `;

  // Professional color palette for languages
  const langColors = [
    icon_color,
    title_color,
    text_color,
    ...['5e81ac', '88c0d0', 'ebcb8b', 'a3be8c', 'bf616a'].map(c => c)
  ];

  const body = languages.map((lang, i) => {
    const y = 78 + i * 38;
    const percentage = parseFloat(lang.percentage);
    const barWidth = Math.min((percentage / 100) * 360, 360);
    const color = langColors[i % langColors.length];

    return `
      <g transform="translate(24, ${y})">
        <text class="stat-label" fill="#${text_color}" x="0" y="0">${lang.name}</text>
        <g transform="translate(0, 8)">
          <rect width="360" height="6" rx="3" fill="#${border_color}" opacity="0.3"/>
          <rect width="${barWidth}" height="6" rx="3" fill="#${color}"/>
        </g>
        <text class="stat-value" fill="#${title_color}" x="447" y="0" text-anchor="end" style="font-size: 14px;">${percentage.toFixed(1)}%</text>
      </g>
    `;
  }).join('');

  const cardHeight = Math.max(220, 78 + languages.length * 38 + 24);

  return createCard({
    width: 495,
    height: cardHeight,
    bg_color,
    border_color,
    title,
    body,
  });
}

module.exports = { renderStatsCard, renderLanguagesCard };
