import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from './Schema'
import cors from "cors";
import {createConnection} from "typeorm";
import { Students } from './Entities/Students'



const main = async () => {
        await createConnection ({
            type: "mysql",
            host: "localhost",
            database:"db_students",
            username:"root",
            password:"root",
            logging:true,
            synchronize:false,
            entities:[Students],

        });

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true

    }))

    app.listen(3001, () =>{
        console.log("Servidor rodando na porta 3001");
    });
};

main().catch((err)=>{
    console.log(err);
});