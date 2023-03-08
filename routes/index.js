import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  console.log("looks like the get response works how about that")
  res.render('index', { title: 'Express' })
})

export { 
  router
}
