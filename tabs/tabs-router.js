const router = require('express').Router();
const tabsModel = require('./tabs-model')

router.use("/:id", confirmUser)

router.get("/:id", (req, res) => {
    tabsModel.getUserTabs(req.params.id)
        .then(tabs => {
            res.json({tabs})
        })
        .catch(err => {
            res.status(500).json({error: "error occured retrieving user tabs"})
        })
})

router.post("/:id", (req, res) => {
    tabsModel.addTab({...req.body, user_id: req.params.id})
        .then(tabs => res.json({tabs}))
        .catch(err => {
            res.status(500).json({error: "error occured creating user tabs"})
        })
})

router.put("/:id/:tab_id", (req, res) => {
    tabsModel.updateTab({...req.body, user_id: req.params.id}, req.params.tab_id)
        .then(tabs => res.json({tabs}))
        .catch(err => {
            res.status(500).json({error: "error occured updating user tabs"})
        })
})

router.delete("/:id/:tab_id", (req, res) => {
    tabsModel.deleteTab(req.params.id, req.params.tab_id)
        .then(tabs => res.json({tabs}))
        .catch(err => {
            res.status(500).json({error: "error occured deleting user tabs"})
        })
})


function confirmUser(req, res, next) {
    tabsModel.getUser(req.params.id)
        .then(user => {
            if ( user ) {
                next()
            } else {
                res.status(400).json({message: "invalid user id"})
            }
        })
        .catch(err => {
            res.status(500).json({error: "error occured retrieving user information"})
        })
}

module.exports = router;