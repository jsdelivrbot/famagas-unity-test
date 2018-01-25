const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./routes/page-route');

express()
.use(express.static(path.join(__dirname, 'public')),)
.use('#/', routes)
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`
**************************************************************************************
                        FAMAGÁS API V:2.0 STARTED SUCCESSFULLY           
                    Check your workstation in: localhost:${ PORT }
                        http://www.documentation.famagas.com.br
**************************************************************************************`))