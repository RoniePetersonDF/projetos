module.exports = app => {
    app.listen(app.get('port'), ()=> {
        console.log(`NTask API - port ${app.get('port')}`)
    })    
}