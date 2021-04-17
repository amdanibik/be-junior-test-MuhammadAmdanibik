const swaggerConfig = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movie Cast API',
            version: '1.0.0',
            description: 'Movie Cast API - Campaign.com Test'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: [ './routers/*.js' ]
}

module.exports = swaggerConfig