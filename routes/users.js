import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get("/banana", function(req, res) {
  console.log("the /banana route lol")
  res.send('<h1>Testing ONE TWO TESTING!!!!<h2>')
})

export {
  router
}
