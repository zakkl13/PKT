export var isProd = process.env.NODE_ENV === 'production'
export var port = process.env.PORT || 3000
export var mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/pktDB'
export var secret = process.env.SECRET || '7%ZD6Lr03g41'
