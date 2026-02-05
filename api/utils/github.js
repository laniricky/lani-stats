const https = require('https');

class GitHubAPI {
    constructor(token) {
        this.token = token;
        this.baseUrl = 'api.github.com';
    }

    async request(path) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: this.baseUrl,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'lani-stats',
                    'Accept': 'application/vnd.github.v3+json',
                },
            };

            if (this.token) {
                options.headers['Authorization'] = `token ${this.token}`;
            }

            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => (data += chunk));
                res.on('end', () => {
                    if (res.statusCode === 200) {
                        resolve(JSON.parse(data));
                    } else {
                        reject(new Error(`GitHub API Error: ${res.statusCode}`));
                    }
                });
            });

            req.on('error', reject);
            req.end();
        });
    }

    async getUser(username) {
        return this.request(`/users/${username}`);
    }

    async getUserRepos(username) {
        return this.request(`/users/${username}/repos?per_page=100&sort=updated`);
    }

    async getStats(username) {
        const [user, repos] = await Promise.all([
            this.getUser(username),
            this.getUserRepos(username),
        ]);

        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

        return {
            name: user.name || username,
            totalRepos: user.public_repos,
            totalStars,
            totalForks,
            followers: user.followers,
            following: user.following,
        };
    }

    async getTopLanguages(username) {
        const repos = await this.getUserRepos(username);
        const languages = {};

        repos.forEach((repo) => {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + repo.size;
            }
        });

        const total = Object.values(languages).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(languages)
            .map(([lang, size]) => ({
                name: lang,
                percentage: ((size / total) * 100).toFixed(2),
            }))
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
            .slice(0, 5);

        return sorted;
    }
}

module.exports = GitHubAPI;
