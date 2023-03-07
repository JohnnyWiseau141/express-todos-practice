import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  console.log("looks like the get response works how about that")
  res.render('index', { title: 'Express' })
})

router.get("/banana", function(req, res) {
  console.log("the /banana route lol")
  res.send('<h1>Testing ONE TWO TESTING!!!!<h2>')
})

export { 
  router
}
