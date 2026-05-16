import vuelosVisitor from "./generated/vuelosVisitor.js";

export class CustomVuelosVisitor extends vuelosVisitor {

    // Se ejecuta al visitar la regla raiz 'prog'
    visitProg(ctx) {
        return this.visit(ctx.vuelolist());
    }

    // Recorre la lista de vuelos
    visitVuelolist(ctx) {
        return this.visitChildren(ctx);
    }

    // Se ejecuta para cada regla 'vuelo' detectada
    visitVuelo(ctx) {
        const code = ctx.CODIGO_VUELO().getText();
        
        // AEROPUERTO() devuelve un array porque aparece dos veces (salida y llegada)
        const airports = ctx.AEROPUERTO();
        const from = airports[0].getText();
        const to = airports[1].getText();
        
        const time = ctx.HORA().getText();
        
        // Verificamos si los componentes opcionales existen en este nodo antes de pedir el texto
        const status = ctx.ESTADO() ? ctx.ESTADO().getText() : "NOT_SPECIFIED";
        const gate = ctx.PUERTA() ? ctx.PUERTA().getText() : "NOT_SPECIFIED";

        // Traducimos el codigo fuente a la estructura de objeto JavaScript requerida
        const flight = {
            code: code,
            from: from,
            to: to,
            time: time,
            status: status,
            gate: gate
        };

        // Mostramos por consola la interpretacion en formato JS limpio
        console.log("const flight = {");
        console.log(`  code: "${flight.code}",`);
        console.log(`  from: "${flight.from}",`);
        console.log(`  to: "${flight.to}",`);
        console.log(`  time: "${flight.time}",`);
        console.log(`  status: "${flight.status}",`);
        console.log(`  gate: "${flight.gate}",`);
        console.log("};");

        return flight;
    }
}