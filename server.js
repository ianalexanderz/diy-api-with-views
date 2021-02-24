const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')

const rowdyRes = rowdy.begin(app)

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
  res.send('hello from root!')
})

// Controllers
app.use('/countries', require('./controllers/countriesController'))
app.use('/continents', require('./controllers/continentsController'))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})
