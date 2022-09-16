const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
	const page = '首頁'
	res.render('index', { page })
})

app.get('/:page', (req, res) => {
	const page = req.params.page
	res.render('index', {page})
})

app.listen(port, () => {
	console.log(`Express is running on http://localhost:${port}`)
})