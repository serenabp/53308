grammar vuelos;

// --- REGLAS SINTÁCTICAS ---

prog: vuelolist;

vuelolist: vuelo+;

vuelo: CODIGO_VUELO AEROPUERTO DASH AEROPUERTO HORA (COMMA ESTADO)? (COMMA GATE_KEYWORD COLON PUERTA)? ;

// --- REGLAS LÉXICAS ---

DASH         : '-' ;
COLON        : ':' ;
COMMA        : ',' ;
GATE_KEYWORD : 'Gate' ;

CODIGO_VUELO : [a-zA-Z] [a-zA-Z] [0-9] [0-9] [0-9] ;
AEROPUERTO   : [a-zA-Z] [a-zA-Z] [a-zA-Z] ;
HORA         : ([0-1][0-9]|'2'[0-3]) ':' [0-5][0-9] | 'NOW' ;
ESTADO       : 'ON_TIME' | 'DELAYED' | 'CANCELLED' ;
PUERTA       : [a-zA-Z] [0-9]+ ;
WS           : [ \t\r\n]+ -> skip ;