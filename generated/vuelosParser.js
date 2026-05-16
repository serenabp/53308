// Generated from c:/Users/SERE/Documents/UNIVERSIDAD/segundo año/SySL/new/antlr-vuelos/vuelos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vuelosListener from './vuelosListener.js';
import vuelosVisitor from './vuelosVisitor.js';

const serializedATN = [4,1,10,29,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,1,4,1,
10,8,1,11,1,12,1,11,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,21,8,2,1,2,1,2,1,2,1,
2,3,2,27,8,2,1,2,0,0,3,0,2,4,0,0,28,0,6,1,0,0,0,2,9,1,0,0,0,4,13,1,0,0,0,
6,7,3,2,1,0,7,1,1,0,0,0,8,10,3,4,2,0,9,8,1,0,0,0,10,11,1,0,0,0,11,9,1,0,
0,0,11,12,1,0,0,0,12,3,1,0,0,0,13,14,5,5,0,0,14,15,5,6,0,0,15,16,5,1,0,0,
16,17,5,6,0,0,17,20,5,7,0,0,18,19,5,3,0,0,19,21,5,8,0,0,20,18,1,0,0,0,20,
21,1,0,0,0,21,26,1,0,0,0,22,23,5,3,0,0,23,24,5,4,0,0,24,25,5,2,0,0,25,27,
5,9,0,0,26,22,1,0,0,0,26,27,1,0,0,0,27,5,1,0,0,0,3,11,20,26];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vuelosParser extends antlr4.Parser {

    static grammarFileName = "vuelos.g4";
    static literalNames = [ null, "'-'", "':'", "','", "'Gate'" ];
    static symbolicNames = [ null, "DASH", "COLON", "COMMA", "GATE_KEYWORD", 
                             "CODIGO_VUELO", "AEROPUERTO", "HORA", "ESTADO", 
                             "PUERTA", "WS" ];
    static ruleNames = [ "prog", "vuelolist", "vuelo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vuelosParser.ruleNames;
        this.literalNames = vuelosParser.literalNames;
        this.symbolicNames = vuelosParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vuelosParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.vuelolist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelolist() {
	    let localctx = new VuelolistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vuelosParser.RULE_vuelolist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.vuelo();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vuelosParser.RULE_vuelo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.match(vuelosParser.CODIGO_VUELO);
	        this.state = 14;
	        this.match(vuelosParser.AEROPUERTO);
	        this.state = 15;
	        this.match(vuelosParser.DASH);
	        this.state = 16;
	        this.match(vuelosParser.AEROPUERTO);
	        this.state = 17;
	        this.match(vuelosParser.HORA);
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 18;
	            this.match(vuelosParser.COMMA);
	            this.state = 19;
	            this.match(vuelosParser.ESTADO);

	        }
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 22;
	            this.match(vuelosParser.COMMA);
	            this.state = 23;
	            this.match(vuelosParser.GATE_KEYWORD);
	            this.state = 24;
	            this.match(vuelosParser.COLON);
	            this.state = 25;
	            this.match(vuelosParser.PUERTA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

vuelosParser.EOF = antlr4.Token.EOF;
vuelosParser.DASH = 1;
vuelosParser.COLON = 2;
vuelosParser.COMMA = 3;
vuelosParser.GATE_KEYWORD = 4;
vuelosParser.CODIGO_VUELO = 5;
vuelosParser.AEROPUERTO = 6;
vuelosParser.HORA = 7;
vuelosParser.ESTADO = 8;
vuelosParser.PUERTA = 9;
vuelosParser.WS = 10;

vuelosParser.RULE_prog = 0;
vuelosParser.RULE_vuelolist = 1;
vuelosParser.RULE_vuelo = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vuelosParser.RULE_prog;
    }

	vuelolist() {
	    return this.getTypedRuleContext(VuelolistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vuelosVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VuelolistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vuelosParser.RULE_vuelolist;
    }

	vuelo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VueloContext);
	    } else {
	        return this.getTypedRuleContext(VueloContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.enterVuelolist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.exitVuelolist(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vuelosVisitor ) {
	        return visitor.visitVuelolist(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vuelosParser.RULE_vuelo;
    }

	CODIGO_VUELO() {
	    return this.getToken(vuelosParser.CODIGO_VUELO, 0);
	};

	AEROPUERTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vuelosParser.AEROPUERTO);
	    } else {
	        return this.getToken(vuelosParser.AEROPUERTO, i);
	    }
	};


	DASH() {
	    return this.getToken(vuelosParser.DASH, 0);
	};

	HORA() {
	    return this.getToken(vuelosParser.HORA, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vuelosParser.COMMA);
	    } else {
	        return this.getToken(vuelosParser.COMMA, i);
	    }
	};


	ESTADO() {
	    return this.getToken(vuelosParser.ESTADO, 0);
	};

	GATE_KEYWORD() {
	    return this.getToken(vuelosParser.GATE_KEYWORD, 0);
	};

	COLON() {
	    return this.getToken(vuelosParser.COLON, 0);
	};

	PUERTA() {
	    return this.getToken(vuelosParser.PUERTA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vuelosListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vuelosVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




vuelosParser.ProgContext = ProgContext; 
vuelosParser.VuelolistContext = VuelolistContext; 
vuelosParser.VueloContext = VueloContext; 
