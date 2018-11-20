const express= require("express")
const app = express()
const port = 3000
const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use("/",routes)

app.get("/*",function(req,res){
    res.send("PAGE NOT FOUND")
})

app.listen(port,function(){
    console.log(`App is running on port ${port}`)
})