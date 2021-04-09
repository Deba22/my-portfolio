const dev = process.env.Node_ENV !== 'production'

export const airtableApiKey = 'keyfk9N6xZALtPjLK'
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'