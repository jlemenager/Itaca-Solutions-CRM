const router = express.Router()

const ClientRouter = require('./clientRoute')
const ExpertiseRouter = require('./expertiseRoute')
const LocationRouter = require('./locationRoute')
const ProjectRouter = require('./projectRoute')

router.get('/', (req,res)=> res.send('This is the main api page'))
router.use('/client', ClientRouter)
router.use('/expertise', ExpertiseRouter)
router.use('/location', LocationRouter)
router.use('/project', ProjectRouter)

module.exports = router