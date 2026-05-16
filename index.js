import vuelosLexer from "./generated/vuelosLexer.js";
import vuelosParser from "./generated/vuelosParser.js";
import { CustomVuelosVisitor } from "./CustomVuelosVisitor.js";
import { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    const fileName = 'input.txt';
    let input;

    try {
        input = fs.readFileSync(fileName, 'utf8');
        console.log(`--- CODIGO FUENTE (${fileName}) ---\n${input}\n`);
    } catch (err) {
        console.error("Error: No se encontro input.txt");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new vuelosLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // REQUERIMIENTO: TABLA DE LEXEMAS-TOKENS
    console.log("TABLA DE LEXEMAS-TOKENS");
    console.log("-------------------------------------------");
    tokenStream.fill();
    tokenStream.tokens.forEach(t => {
        const symName = vuelosLexer.symbolicNames[t.type] || "EOF";
        if (symName !== 'WS' && t.type !== -1) {
            console.log(`${t.text.padEnd(15)} | ${symName}`);
        }
    });
    console.log("-------------------------------------------\n");

    tokenStream.seek(0);

    const parser = new vuelosParser(tokenStream);
    const tree = parser.prog();

    // REQUERIMIENTO: INFORMAR ERRORES (Línea y Causa)
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nERROR: La entrada contiene errores sintacticos.");
    } else {
        console.log("Sintaxis valida.");
        
        // REQUERIMIENTO: ÁRBOL SINTÁCTICO (Formato texto)
        console.log("\nARBOL DE ANALISIS SINTACTICO:");
        console.log(tree.toStringTree(parser.ruleNames, parser));

        // REQUERIMIENTO: INTERPRETACIÓN
        console.log("\n--- EJECUCION DEL INTERPRETE ---");
        const visitor = new CustomVuelosVisitor();
        visitor.visit(tree);
    }
}

main();