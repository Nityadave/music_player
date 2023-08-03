/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    env: {
      MYSQL_HOST: 'localhost',
      MYSQL_PORT: '3306',
      MYSQL_DATABASE: 'Music_player',
      MYSQL_USER: 'root',
      MYSQL_PASSWORD: 'system'
    }
  }