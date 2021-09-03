import "reflect-metadata";
import {createConnection} from "typeorm";
import { Bootstrap } from "./bootstrap";

createConnection().then(async connection => {

    Bootstrap().catch((err) => {
        console.log("Err : ", err);
    })

}).catch(error => console.log(error));
