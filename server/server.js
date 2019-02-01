import app from "./app"

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("listening to port 3000...")
})