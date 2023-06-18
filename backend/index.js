import express from 'express'
import cors from 'cors'
import "dotenv/config"
import session from 'express-session'
import userRoute from './routes/UserRoute.js'
import productRoute from './routes/ProductRoute.js'
import authRoute from './routes/AuthRoute.js'
import db from './config/db.js'
import SequelizeStore from 'connect-session-sequelize'
                      
const port = process.env.PORT 
const host = process.env.HOST
const app = express();

const sessionStore = SequelizeStore(session.Store)

const store  = new sessionStore ({
    db : db
})

// (async () => { 
//   db.sync();
// })();

// store.sync()


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized : true,
    store : store, 
    cookie: { 
        secure : "auto"
     }
}))

app.use(cors({
    credentials : true,
    origin : "http://localhost:3000",
}))

app.use(express.json())
app.use(userRoute)
app.use(productRoute)
app.use(authRoute)

app.listen(port, () => console.log(`Server listening on port http://${host}:${port} `))