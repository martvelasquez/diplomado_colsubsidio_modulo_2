const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const pathJSON = path.join(__dirname, "./db.json")

const readJSON = () => {
        const template = {
                movies: [] ,
               };
               try {
                const data = fs.readFileSync(pathJSON, "utf-8")
                if (data.length === 0) {
                        return template;
                }
               } catch (error) {
                        fs.writeFileSync(pathJSON, JSON.stringify(template, null, 4), "utf-8" );
               }
               const data = fs.readFileSync(pathJSON, "utf-8");
               return JSON.parse(data);
};
const writeJSON = (data) => {
        const template = {
                movies: data,
        };
        
        fs.writeFileSync(pathJSON, JSON.stringify(template, null, 4), "utf-8")
};

const { movies } = readJSON();
movies.push({
        title: "Encanto",
        id: crypto.randomUUID(),
});
writeJSON(movies);