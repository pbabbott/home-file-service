module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  release: {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
          changelogTitle: 'home-file-service Changelog',
        },
      ],
      ['@semantic-release/npm', { npmPublish: true }],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
        },
      ],
      [
        '@semantic-release/github',
        {
          assets: [{ path: 'CHANGELOG.md', name: 'Changelog' }],
        },
      ],
    ],
  }
}