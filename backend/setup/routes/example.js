var Example = require('../controllers/example')

module.exports = function(router){
    router.get('/example', Example.get)
    router.put('/example', Example.put)
    router.post('/example', Example.post)
    router.delete('example', Example.del)
    router.get('/examples', Example.getAll)
};