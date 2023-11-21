
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main(){

    try{

        mongoose.connect(config.database_url as string)
        .then(() => console.log('Connected!'));
        app.listen(config.port, () => {
          console.log(`Example app listening on port ${config.port}`)
        })
      
    }catch(error){
        console.log(error)

    }
  
}

main()



