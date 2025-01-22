/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: 'meep',
        database: 'printicaldb'
    }
}

module.exports = nextConfig
