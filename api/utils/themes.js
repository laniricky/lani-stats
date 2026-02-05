const themes = {
    laniricky: {
        title_color: '#ff9d00',
        icon_color: '#ff9d00',
        text_color: 'ffffff',
        bg_color: '#5c3901',
        border_color: '#ff9d00',
    },
    blue_pink: {
        title_color: 'ff10f0',
        icon_color: '00f0ff',
        text_color: 'e0e0ff',
        bg_color: '0a0014',
        border_color: '2d1b69',
    },
    github_dark: {
        title_color: '58a6ff',
        icon_color: '1f6feb',
        text_color: 'c9d1d9',
        bg_color: '0d1117',
        border_color: '30363d',
    },
    github_light: {
        title_color: '24292f',
        icon_color: '0969da',
        text_color: '57606a',
        bg_color: 'ffffff',
        border_color: 'd0d7de',
    },
    moonlight: {
        title_color: 'c099ff',
        icon_color: '82aaff',
        text_color: 'b4c2f0',
        bg_color: '1e2030',
        border_color: '2f334d',
    },
    nord: {
        title_color: '88c0d0',
        icon_color: '5e81ac',
        text_color: 'd8dee9',
        bg_color: '2e3440',
        border_color: '3b4252',
    },
    dracula: {
        title_color: 'ff79c6',
        icon_color: 'bd93f9',
        text_color: 'f8f8f2',
        bg_color: '282a36',
        border_color: '44475a',
    },
    monokai: {
        title_color: 'f92672',
        icon_color: 'fd971f',
        text_color: 'f8f8f2',
        bg_color: '272822',
        border_color: '3e3d32',
    },
    ocean: {
        title_color: '4fc3f7',
        icon_color: '0288d1',
        text_color: 'b0bec5',
        bg_color: '0a1929',
        border_color: '1e3a5f',
    },
    synthwave: {
        title_color: 'ff6ec7',
        icon_color: 'ffd319',
        text_color: 'ffffff',
        bg_color: '2b213a',
        border_color: '495495',
    },
    midnight: {
        title_color: '64ffda',
        icon_color: '00e5ff',
        text_color: 'adbac7',
        bg_color: '0f1419',
        border_color: '2d333b',
    },
    slate: {
        title_color: 'f97316',
        icon_color: '3b82f6',
        text_color: '94a3b8',
        bg_color: '0f172a',
        border_color: '1e293b',
    },
};

function getTheme(themeName = 'github_dark') {
    return themes[themeName] || themes.github_dark;
}

module.exports = { themes, getTheme };

