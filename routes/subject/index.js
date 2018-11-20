const router = require('express').Router()
const SubjectController = require('../../controllers/subjectController')
const StudentSubjectController = require('../../controllers/studentSubjectController')

router.get('/', SubjectController.findAll)

router.get('/add', SubjectController.renderAddSubject)
router.post('/add', SubjectController.addSubject)

router.get('/delete/:id', SubjectController.deleteSubject)

router.get('/edit/:id', SubjectController.renderEditSubject)
router.post('/edit/:id', SubjectController.editSubject)

router.get('/:id/enrolled-students', StudentSubjectController.findAll)

router.get('/:id/give-score', StudentSubjectController.renderGiveScore)
router.post('/:id/give-score', StudentSubjectController.giveScore)

module.exports = router