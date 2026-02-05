const themes = {
    laniricky: {
        title_color: '00e676',
        icon_color: '00e676',
        text_color: 'ffffff',
        bg_color: '0d1117',
        border_color: '30363d',
    },
    tokyonight: {
        title_color: '70a5fd',
        icon_color: 'bf91f3',
        text_color: '38bdae',
        bg_color: '1a1b27',
        border_color: '1a1b27',
    },
    dark: {
        title_color: 'ffffff',
        icon_color: '79ff97',
        text_color: '9f9f9f',
        bg_color: '151515',
        border_color: '1e1e1e',
    },
    default: {
        title_color: '2f80ed',
        icon_color: '4c71f2',
        text_color: '434d58',
        bg_color: 'fffefe',
        border_color: 'e4e2e2',
    },
};

function getTheme(themeName = 'default') {
    return themes[themeName] || themes.default;
}

module.exports = { themes, getTheme };
