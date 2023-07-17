// Generated from Pcad.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import PcadListener from './PcadListener.js';
const serializedATN = [4,1,49,258,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,0,1,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,71,8,3,3,3,73,8,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,90,8,3,10,
3,12,3,93,9,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,103,8,5,10,5,12,5,106,
9,5,1,5,1,5,1,5,1,5,5,5,112,8,5,10,5,12,5,115,9,5,1,5,3,5,118,8,5,3,5,120,
8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,133,8,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,3,6,144,8,6,5,6,146,8,6,10,6,12,6,149,9,6,1,6,1,
6,1,6,3,6,154,8,6,3,6,156,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,167,
8,7,3,7,169,8,7,1,8,1,8,1,8,1,9,1,9,3,9,176,8,9,1,9,1,9,3,9,180,8,9,1,10,
1,10,1,10,1,10,5,10,186,8,10,10,10,12,10,189,9,10,1,10,1,10,1,10,1,10,5,
10,195,8,10,10,10,12,10,198,9,10,1,10,3,10,201,8,10,3,10,203,8,10,1,10,1,
10,1,11,1,11,5,11,209,8,11,10,11,12,11,212,9,11,1,11,1,11,1,12,1,12,1,12,
3,12,219,8,12,1,13,1,13,1,13,1,13,5,13,225,8,13,10,13,12,13,228,9,13,1,13,
3,13,231,8,13,1,13,1,13,1,14,1,14,1,14,1,14,5,14,239,8,14,10,14,12,14,242,
9,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,253,8,15,1,15,1,15,
1,15,1,15,0,1,6,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,6,2,0,30,
30,37,37,3,0,28,28,34,34,36,36,1,0,31,33,1,0,29,30,1,0,41,43,2,0,38,39,44,
47,285,0,33,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,6,72,1,0,0,0,8,94,1,0,0,0,
10,99,1,0,0,0,12,123,1,0,0,0,14,157,1,0,0,0,16,170,1,0,0,0,18,173,1,0,0,
0,20,181,1,0,0,0,22,206,1,0,0,0,24,218,1,0,0,0,26,220,1,0,0,0,28,234,1,0,
0,0,30,246,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,
0,35,36,1,0,0,0,36,37,1,0,0,0,37,38,5,0,0,1,38,1,1,0,0,0,39,40,3,6,3,0,40,
41,5,25,0,0,41,50,1,0,0,0,42,43,3,4,2,0,43,44,5,25,0,0,44,50,1,0,0,0,45,
50,3,8,4,0,46,50,3,18,9,0,47,50,3,12,6,0,48,50,3,14,7,0,49,39,1,0,0,0,49,
42,1,0,0,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,3,
1,0,0,0,51,52,5,48,0,0,52,53,5,40,0,0,53,54,3,6,3,0,54,5,1,0,0,0,55,56,6,
3,-1,0,56,57,7,0,0,0,57,73,3,6,3,8,58,59,5,17,0,0,59,60,3,6,3,0,60,61,5,
18,0,0,61,73,1,0,0,0,62,71,3,16,8,0,63,71,5,48,0,0,64,71,5,8,0,0,65,71,5,
10,0,0,66,71,5,9,0,0,67,71,3,24,12,0,68,71,5,6,0,0,69,71,5,7,0,0,70,62,1,
0,0,0,70,63,1,0,0,0,70,64,1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,70,67,1,0,
0,0,70,68,1,0,0,0,70,69,1,0,0,0,71,73,1,0,0,0,72,55,1,0,0,0,72,58,1,0,0,
0,72,70,1,0,0,0,73,91,1,0,0,0,74,75,10,7,0,0,75,76,7,1,0,0,76,90,3,6,3,8,
77,78,10,6,0,0,78,79,7,2,0,0,79,90,3,6,3,7,80,81,10,5,0,0,81,82,7,3,0,0,
82,90,3,6,3,6,83,84,10,4,0,0,84,85,7,4,0,0,85,90,3,6,3,5,86,87,10,3,0,0,
87,88,7,5,0,0,88,90,3,6,3,4,89,74,1,0,0,0,89,77,1,0,0,0,89,80,1,0,0,0,89,
83,1,0,0,0,89,86,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,7,
1,0,0,0,93,91,1,0,0,0,94,95,5,5,0,0,95,96,5,48,0,0,96,97,3,10,5,0,97,98,
3,22,11,0,98,9,1,0,0,0,99,119,5,17,0,0,100,101,5,48,0,0,101,103,5,24,0,0,
102,100,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,117,
1,0,0,0,106,104,1,0,0,0,107,118,5,48,0,0,108,109,3,4,2,0,109,110,5,24,0,
0,110,112,1,0,0,0,111,108,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,
1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,118,3,4,2,0,117,107,1,0,0,0,
117,113,1,0,0,0,118,120,1,0,0,0,119,104,1,0,0,0,119,120,1,0,0,0,120,121,
1,0,0,0,121,122,5,18,0,0,122,11,1,0,0,0,123,132,5,1,0,0,124,125,3,6,3,0,
125,126,3,22,11,0,126,133,1,0,0,0,127,128,5,17,0,0,128,129,3,6,3,0,129,130,
5,18,0,0,130,131,3,2,1,0,131,133,1,0,0,0,132,124,1,0,0,0,132,127,1,0,0,0,
133,147,1,0,0,0,134,143,5,2,0,0,135,136,3,6,3,0,136,137,3,22,11,0,137,144,
1,0,0,0,138,139,5,17,0,0,139,140,3,6,3,0,140,141,5,18,0,0,141,142,3,2,1,
0,142,144,1,0,0,0,143,135,1,0,0,0,143,138,1,0,0,0,144,146,1,0,0,0,145,134,
1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,155,1,0,0,0,
149,147,1,0,0,0,150,153,5,3,0,0,151,154,3,22,11,0,152,154,3,2,1,0,153,151,
1,0,0,0,153,152,1,0,0,0,154,156,1,0,0,0,155,150,1,0,0,0,155,156,1,0,0,0,
156,13,1,0,0,0,157,168,5,4,0,0,158,159,3,4,2,0,159,160,3,22,11,0,160,169,
1,0,0,0,161,162,5,17,0,0,162,163,3,4,2,0,163,166,5,18,0,0,164,167,3,2,1,
0,165,167,3,22,11,0,166,164,1,0,0,0,166,165,1,0,0,0,167,169,1,0,0,0,168,
158,1,0,0,0,168,161,1,0,0,0,169,15,1,0,0,0,170,171,5,48,0,0,171,172,3,20,
10,0,172,17,1,0,0,0,173,175,5,48,0,0,174,176,3,20,10,0,175,174,1,0,0,0,175,
176,1,0,0,0,176,179,1,0,0,0,177,180,3,22,11,0,178,180,3,2,1,0,179,177,1,
0,0,0,179,178,1,0,0,0,180,19,1,0,0,0,181,202,5,17,0,0,182,183,3,6,3,0,183,
184,5,24,0,0,184,186,1,0,0,0,185,182,1,0,0,0,186,189,1,0,0,0,187,185,1,0,
0,0,187,188,1,0,0,0,188,200,1,0,0,0,189,187,1,0,0,0,190,201,3,6,3,0,191,
192,3,4,2,0,192,193,5,24,0,0,193,195,1,0,0,0,194,191,1,0,0,0,195,198,1,0,
0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,199,1,0,0,0,198,196,1,0,0,0,199,
201,3,4,2,0,200,190,1,0,0,0,200,196,1,0,0,0,201,203,1,0,0,0,202,187,1,0,
0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,18,0,0,205,21,1,0,0,0,206,
210,5,19,0,0,207,209,3,2,1,0,208,207,1,0,0,0,209,212,1,0,0,0,210,208,1,0,
0,0,210,211,1,0,0,0,211,213,1,0,0,0,212,210,1,0,0,0,213,214,5,20,0,0,214,
23,1,0,0,0,215,219,3,26,13,0,216,219,3,28,14,0,217,219,3,30,15,0,218,215,
1,0,0,0,218,216,1,0,0,0,218,217,1,0,0,0,219,25,1,0,0,0,220,230,5,21,0,0,
221,222,3,6,3,0,222,223,5,24,0,0,223,225,1,0,0,0,224,221,1,0,0,0,225,228,
1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,226,1,0,0,0,
229,231,3,6,3,0,230,226,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,
5,22,0,0,233,27,1,0,0,0,234,240,5,21,0,0,235,236,3,4,2,0,236,237,5,24,0,
0,237,239,1,0,0,0,238,235,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,
1,0,0,0,241,243,1,0,0,0,242,240,1,0,0,0,243,244,3,4,2,0,244,245,5,22,0,0,
245,29,1,0,0,0,246,247,5,21,0,0,247,248,3,6,3,0,248,252,5,27,0,0,249,250,
3,6,3,0,250,251,5,27,0,0,251,253,1,0,0,0,252,249,1,0,0,0,252,253,1,0,0,0,
253,254,1,0,0,0,254,255,3,6,3,0,255,256,5,22,0,0,256,31,1,0,0,0,29,35,49,
70,72,89,91,104,113,117,119,132,143,147,153,155,166,168,175,179,187,196,
200,202,210,218,226,230,240,252];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PcadParser extends antlr4.Parser {

    static grammarFileName = "Pcad.g4";
    static literalNames = [ null, "'if'", "'elseif'", "'else'", "'loop'", 
                            "'function'", "'undefined'", "'null'", null, 
                            null, null, null, null, null, "'''", "'\"'", 
                            "'`'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
                            "'.'", "','", "';'", "'?'", "':'", "'\\'", "'+'", 
                            "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
                            "'!'", "'<'", "'>'", "'='", "'&&'", "'||'", 
                            "'^^'", "'<='", "'>='", "'=='", "'!='" ];
    static symbolicNames = [ null, "IF", "ELSEIF", "ELSE", "LOOP", "FUNCTION", 
                             "UNDEF", "NULL", "STRING", "BOOLEAN", "NUMBER", 
                             "COMMENT", "LINECOMMENT", "BLOCKCOMMENT", "SQUOTE", 
                             "DQUOTE", "BQUOTE", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "LBRACK", "RBRACK", "DOT", "COMMA", 
                             "SEMI", "QUERY", "COLON", "BSLASH", "PLUS", 
                             "MINUS", "SPLAT", "SLASH", "PERCENT", "CARET", 
                             "AMPER", "PIPE", "BANG", "LT", "GT", "EQUALS", 
                             "DAMP", "DPIPE", "DCARET", "LTEQ", "GTEQ", 
                             "EQ", "NOEQ", "ID", "WS" ];
    static ruleNames = [ "prog", "statement", "assign", "expr", "funcdef", 
                         "funcdefparams", "conditional", "loop", "funccall", 
                         "funccallwithblock", "funccallparams", "codeblock", 
                         "list", "valuelist", "namedlist", "rangelist" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PcadParser.ruleNames;
        this.literalNames = PcadParser.literalNames;
        this.symbolicNames = PcadParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		case 4:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PcadParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.statement();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1075972082) !== 0) || _la===37 || _la===48);
	        this.state = 37;
	        this.match(PcadParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PcadParser.RULE_statement);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.expr(0);
	            this.state = 40;
	            this.match(PcadParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.assign();
	            this.state = 43;
	            this.match(PcadParser.SEMI);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.funcdef();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.funccallwithblock();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.conditional();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 48;
	            this.loop();
	            break;

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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PcadParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(PcadParser.ID);
	        this.state = 52;
	        this.match(PcadParser.EQUALS);
	        this.state = 53;
	        this.expr(0);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, PcadParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 37:
	            this.state = 56;
	            _la = this._input.LA(1);
	            if(!(_la===30 || _la===37)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 57;
	            this.expr(8);
	            break;
	        case 17:
	            this.state = 58;
	            this.match(PcadParser.LPAREN);
	            this.state = 59;
	            this.expr(0);
	            this.state = 60;
	            this.match(PcadParser.RPAREN);
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 21:
	        case 48:
	            this.state = 70;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 62;
	                this.funccall();
	                break;

	            case 2:
	                this.state = 63;
	                this.match(PcadParser.ID);
	                break;

	            case 3:
	                this.state = 64;
	                this.match(PcadParser.STRING);
	                break;

	            case 4:
	                this.state = 65;
	                this.match(PcadParser.NUMBER);
	                break;

	            case 5:
	                this.state = 66;
	                this.match(PcadParser.BOOLEAN);
	                break;

	            case 6:
	                this.state = 67;
	                this.list();
	                break;

	            case 7:
	                this.state = 68;
	                this.match(PcadParser.UNDEF);
	                break;

	            case 8:
	                this.state = 69;
	                this.match(PcadParser.NULL);
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 89;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PcadParser.RULE_expr);
	                    this.state = 74;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 75;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 321) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 76;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PcadParser.RULE_expr);
	                    this.state = 77;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 78;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 79;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PcadParser.RULE_expr);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 81;
	                    _la = this._input.LA(1);
	                    if(!(_la===29 || _la===30)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 82;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PcadParser.RULE_expr);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 84;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 85;
	                    this.expr(5);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PcadParser.RULE_expr);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 87;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 963) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 88;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	funcdef() {
	    let localctx = new FuncdefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PcadParser.RULE_funcdef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(PcadParser.FUNCTION);
	        this.state = 95;
	        this.match(PcadParser.ID);
	        this.state = 96;
	        this.funcdefparams();
	        this.state = 97;
	        this.codeblock();
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



	funcdefparams() {
	    let localctx = new FuncdefparamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PcadParser.RULE_funcdefparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(PcadParser.LPAREN);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 104;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 100;
	                    this.match(PcadParser.ID);
	                    this.state = 101;
	                    this.match(PcadParser.COMMA); 
	                }
	                this.state = 106;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	            }

	            this.state = 117;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 107;
	                this.match(PcadParser.ID);
	                break;

	            case 2:
	                this.state = 113;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 108;
	                        this.assign();
	                        this.state = 109;
	                        this.match(PcadParser.COMMA); 
	                    }
	                    this.state = 115;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	                }

	                this.state = 116;
	                this.assign();
	                break;

	            }
	        }

	        this.state = 121;
	        this.match(PcadParser.RPAREN);
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PcadParser.RULE_conditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(PcadParser.IF);
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 124;
	            this.expr(0);
	            this.state = 125;
	            this.codeblock();
	            break;

	        case 2:
	            this.state = 127;
	            this.match(PcadParser.LPAREN);
	            this.state = 128;
	            this.expr(0);
	            this.state = 129;
	            this.match(PcadParser.RPAREN);
	            this.state = 130;
	            this.statement();
	            break;

	        }
	        this.state = 147;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 134;
	                this.match(PcadParser.ELSEIF);
	                this.state = 143;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 135;
	                    this.expr(0);
	                    this.state = 136;
	                    this.codeblock();
	                    break;

	                case 2:
	                    this.state = 138;
	                    this.match(PcadParser.LPAREN);
	                    this.state = 139;
	                    this.expr(0);
	                    this.state = 140;
	                    this.match(PcadParser.RPAREN);
	                    this.state = 141;
	                    this.statement();
	                    break;

	                } 
	            }
	            this.state = 149;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 150;
	            this.match(PcadParser.ELSE);
	            this.state = 153;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 19:
	                this.state = 151;
	                this.codeblock();
	                break;
	            case 1:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 17:
	            case 21:
	            case 30:
	            case 37:
	            case 48:
	                this.state = 152;
	                this.statement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }

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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PcadParser.RULE_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(PcadParser.LOOP);
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.state = 158;
	            this.assign();
	            this.state = 159;
	            this.codeblock();
	            break;
	        case 17:
	            this.state = 161;
	            this.match(PcadParser.LPAREN);
	            this.state = 162;
	            this.assign();
	            this.state = 163;
	            this.match(PcadParser.RPAREN);
	            this.state = 166;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 17:
	            case 21:
	            case 30:
	            case 37:
	            case 48:
	                this.state = 164;
	                this.statement();
	                break;
	            case 19:
	                this.state = 165;
	                this.codeblock();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	funccall() {
	    let localctx = new FunccallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PcadParser.RULE_funccall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(PcadParser.ID);
	        this.state = 171;
	        this.funccallparams();
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



	funccallwithblock() {
	    let localctx = new FunccallwithblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PcadParser.RULE_funccallwithblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(PcadParser.ID);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 174;
	            this.funccallparams();

	        }
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 177;
	            this.codeblock();
	            break;
	        case 1:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 17:
	        case 21:
	        case 30:
	        case 37:
	        case 48:
	            this.state = 178;
	            this.statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	funccallparams() {
	    let localctx = new FunccallparamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PcadParser.RULE_funccallparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(PcadParser.LPAREN);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1075972032) !== 0) || _la===37 || _la===48) {
	            this.state = 187;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 182;
	                    this.expr(0);
	                    this.state = 183;
	                    this.match(PcadParser.COMMA); 
	                }
	                this.state = 189;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	            }

	            this.state = 200;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 190;
	                this.expr(0);
	                break;

	            case 2:
	                this.state = 196;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 191;
	                        this.assign();
	                        this.state = 192;
	                        this.match(PcadParser.COMMA); 
	                    }
	                    this.state = 198;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	                }

	                this.state = 199;
	                this.assign();
	                break;

	            }
	        }

	        this.state = 204;
	        this.match(PcadParser.RPAREN);
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



	codeblock() {
	    let localctx = new CodeblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PcadParser.RULE_codeblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(PcadParser.LBRACE);
	        this.state = 210;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1075972082) !== 0) || _la===37 || _la===48) {
	            this.state = 207;
	            this.statement();
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 213;
	        this.match(PcadParser.RBRACE);
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PcadParser.RULE_list);
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.valuelist();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.namedlist();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 217;
	            this.rangelist();
	            break;

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



	valuelist() {
	    let localctx = new ValuelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PcadParser.RULE_valuelist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(PcadParser.LBRACK);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1075972032) !== 0) || _la===37 || _la===48) {
	            this.state = 226;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 221;
	                    this.expr(0);
	                    this.state = 222;
	                    this.match(PcadParser.COMMA); 
	                }
	                this.state = 228;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	            }

	            this.state = 229;
	            this.expr(0);
	        }

	        this.state = 232;
	        this.match(PcadParser.RBRACK);
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



	namedlist() {
	    let localctx = new NamedlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PcadParser.RULE_namedlist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(PcadParser.LBRACK);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 235;
	                this.assign();
	                this.state = 236;
	                this.match(PcadParser.COMMA); 
	            }
	            this.state = 242;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	        }

	        this.state = 243;
	        this.assign();
	        this.state = 244;
	        this.match(PcadParser.RBRACK);
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



	rangelist() {
	    let localctx = new RangelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PcadParser.RULE_rangelist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(PcadParser.LBRACK);
	        this.state = 247;
	        this.expr(0);
	        this.state = 248;
	        this.match(PcadParser.COLON);
	        this.state = 252;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 249;
	            this.expr(0);
	            this.state = 250;
	            this.match(PcadParser.COLON);

	        }
	        this.state = 254;
	        this.expr(0);
	        this.state = 255;
	        this.match(PcadParser.RBRACK);
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

PcadParser.EOF = antlr4.Token.EOF;
PcadParser.IF = 1;
PcadParser.ELSEIF = 2;
PcadParser.ELSE = 3;
PcadParser.LOOP = 4;
PcadParser.FUNCTION = 5;
PcadParser.UNDEF = 6;
PcadParser.NULL = 7;
PcadParser.STRING = 8;
PcadParser.BOOLEAN = 9;
PcadParser.NUMBER = 10;
PcadParser.COMMENT = 11;
PcadParser.LINECOMMENT = 12;
PcadParser.BLOCKCOMMENT = 13;
PcadParser.SQUOTE = 14;
PcadParser.DQUOTE = 15;
PcadParser.BQUOTE = 16;
PcadParser.LPAREN = 17;
PcadParser.RPAREN = 18;
PcadParser.LBRACE = 19;
PcadParser.RBRACE = 20;
PcadParser.LBRACK = 21;
PcadParser.RBRACK = 22;
PcadParser.DOT = 23;
PcadParser.COMMA = 24;
PcadParser.SEMI = 25;
PcadParser.QUERY = 26;
PcadParser.COLON = 27;
PcadParser.BSLASH = 28;
PcadParser.PLUS = 29;
PcadParser.MINUS = 30;
PcadParser.SPLAT = 31;
PcadParser.SLASH = 32;
PcadParser.PERCENT = 33;
PcadParser.CARET = 34;
PcadParser.AMPER = 35;
PcadParser.PIPE = 36;
PcadParser.BANG = 37;
PcadParser.LT = 38;
PcadParser.GT = 39;
PcadParser.EQUALS = 40;
PcadParser.DAMP = 41;
PcadParser.DPIPE = 42;
PcadParser.DCARET = 43;
PcadParser.LTEQ = 44;
PcadParser.GTEQ = 45;
PcadParser.EQ = 46;
PcadParser.NOEQ = 47;
PcadParser.ID = 48;
PcadParser.WS = 49;

PcadParser.RULE_prog = 0;
PcadParser.RULE_statement = 1;
PcadParser.RULE_assign = 2;
PcadParser.RULE_expr = 3;
PcadParser.RULE_funcdef = 4;
PcadParser.RULE_funcdefparams = 5;
PcadParser.RULE_conditional = 6;
PcadParser.RULE_loop = 7;
PcadParser.RULE_funccall = 8;
PcadParser.RULE_funccallwithblock = 9;
PcadParser.RULE_funccallparams = 10;
PcadParser.RULE_codeblock = 11;
PcadParser.RULE_list = 12;
PcadParser.RULE_valuelist = 13;
PcadParser.RULE_namedlist = 14;
PcadParser.RULE_rangelist = 15;

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
        this.ruleIndex = PcadParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(PcadParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitProg(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_statement;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(PcadParser.SEMI, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	funcdef() {
	    return this.getTypedRuleContext(FuncdefContext,0);
	};

	funccallwithblock() {
	    return this.getTypedRuleContext(FunccallwithblockContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_assign;
    }

	ID() {
	    return this.getToken(PcadParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(PcadParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitAssign(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_expr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(PcadParser.MINUS, 0);
	};

	BANG() {
	    return this.getToken(PcadParser.BANG, 0);
	};

	LPAREN() {
	    return this.getToken(PcadParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PcadParser.RPAREN, 0);
	};

	funccall() {
	    return this.getTypedRuleContext(FunccallContext,0);
	};

	ID() {
	    return this.getToken(PcadParser.ID, 0);
	};

	STRING() {
	    return this.getToken(PcadParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(PcadParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(PcadParser.BOOLEAN, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	UNDEF() {
	    return this.getToken(PcadParser.UNDEF, 0);
	};

	NULL() {
	    return this.getToken(PcadParser.NULL, 0);
	};

	CARET() {
	    return this.getToken(PcadParser.CARET, 0);
	};

	BSLASH() {
	    return this.getToken(PcadParser.BSLASH, 0);
	};

	PIPE() {
	    return this.getToken(PcadParser.PIPE, 0);
	};

	SPLAT() {
	    return this.getToken(PcadParser.SPLAT, 0);
	};

	SLASH() {
	    return this.getToken(PcadParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(PcadParser.PERCENT, 0);
	};

	PLUS() {
	    return this.getToken(PcadParser.PLUS, 0);
	};

	DAMP() {
	    return this.getToken(PcadParser.DAMP, 0);
	};

	DPIPE() {
	    return this.getToken(PcadParser.DPIPE, 0);
	};

	DCARET() {
	    return this.getToken(PcadParser.DCARET, 0);
	};

	LT() {
	    return this.getToken(PcadParser.LT, 0);
	};

	LTEQ() {
	    return this.getToken(PcadParser.LTEQ, 0);
	};

	EQ() {
	    return this.getToken(PcadParser.EQ, 0);
	};

	NOEQ() {
	    return this.getToken(PcadParser.NOEQ, 0);
	};

	GTEQ() {
	    return this.getToken(PcadParser.GTEQ, 0);
	};

	GT() {
	    return this.getToken(PcadParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitExpr(this);
		}
	}


}



class FuncdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_funcdef;
    }

	FUNCTION() {
	    return this.getToken(PcadParser.FUNCTION, 0);
	};

	ID() {
	    return this.getToken(PcadParser.ID, 0);
	};

	funcdefparams() {
	    return this.getTypedRuleContext(FuncdefparamsContext,0);
	};

	codeblock() {
	    return this.getTypedRuleContext(CodeblockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterFuncdef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitFuncdef(this);
		}
	}


}



class FuncdefparamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_funcdefparams;
    }

	LPAREN() {
	    return this.getToken(PcadParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PcadParser.RPAREN, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.ID);
	    } else {
	        return this.getToken(PcadParser.ID, i);
	    }
	};


	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.COMMA);
	    } else {
	        return this.getToken(PcadParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterFuncdefparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitFuncdefparams(this);
		}
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_conditional;
    }

	IF() {
	    return this.getToken(PcadParser.IF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	codeblock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeblockContext);
	    } else {
	        return this.getTypedRuleContext(CodeblockContext,i);
	    }
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.LPAREN);
	    } else {
	        return this.getToken(PcadParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.RPAREN);
	    } else {
	        return this.getToken(PcadParser.RPAREN, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.ELSEIF);
	    } else {
	        return this.getToken(PcadParser.ELSEIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(PcadParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitConditional(this);
		}
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_loop;
    }

	LOOP() {
	    return this.getToken(PcadParser.LOOP, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	codeblock() {
	    return this.getTypedRuleContext(CodeblockContext,0);
	};

	LPAREN() {
	    return this.getToken(PcadParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PcadParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitLoop(this);
		}
	}


}



class FunccallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_funccall;
    }

	ID() {
	    return this.getToken(PcadParser.ID, 0);
	};

	funccallparams() {
	    return this.getTypedRuleContext(FunccallparamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterFunccall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitFunccall(this);
		}
	}


}



class FunccallwithblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_funccallwithblock;
    }

	ID() {
	    return this.getToken(PcadParser.ID, 0);
	};

	codeblock() {
	    return this.getTypedRuleContext(CodeblockContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	funccallparams() {
	    return this.getTypedRuleContext(FunccallparamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterFunccallwithblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitFunccallwithblock(this);
		}
	}


}



class FunccallparamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_funccallparams;
    }

	LPAREN() {
	    return this.getToken(PcadParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PcadParser.RPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.COMMA);
	    } else {
	        return this.getToken(PcadParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterFunccallparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitFunccallparams(this);
		}
	}


}



class CodeblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_codeblock;
    }

	LBRACE() {
	    return this.getToken(PcadParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(PcadParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterCodeblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitCodeblock(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_list;
    }

	valuelist() {
	    return this.getTypedRuleContext(ValuelistContext,0);
	};

	namedlist() {
	    return this.getTypedRuleContext(NamedlistContext,0);
	};

	rangelist() {
	    return this.getTypedRuleContext(RangelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitList(this);
		}
	}


}



class ValuelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_valuelist;
    }

	LBRACK() {
	    return this.getToken(PcadParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(PcadParser.RBRACK, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.COMMA);
	    } else {
	        return this.getToken(PcadParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterValuelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitValuelist(this);
		}
	}


}



class NamedlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_namedlist;
    }

	LBRACK() {
	    return this.getToken(PcadParser.LBRACK, 0);
	};

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	RBRACK() {
	    return this.getToken(PcadParser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.COMMA);
	    } else {
	        return this.getToken(PcadParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterNamedlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitNamedlist(this);
		}
	}


}



class RangelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PcadParser.RULE_rangelist;
    }

	LBRACK() {
	    return this.getToken(PcadParser.LBRACK, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PcadParser.COLON);
	    } else {
	        return this.getToken(PcadParser.COLON, i);
	    }
	};


	RBRACK() {
	    return this.getToken(PcadParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.enterRangelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PcadListener ) {
	        listener.exitRangelist(this);
		}
	}


}




PcadParser.ProgContext = ProgContext; 
PcadParser.StatementContext = StatementContext; 
PcadParser.AssignContext = AssignContext; 
PcadParser.ExprContext = ExprContext; 
PcadParser.FuncdefContext = FuncdefContext; 
PcadParser.FuncdefparamsContext = FuncdefparamsContext; 
PcadParser.ConditionalContext = ConditionalContext; 
PcadParser.LoopContext = LoopContext; 
PcadParser.FunccallContext = FunccallContext; 
PcadParser.FunccallwithblockContext = FunccallwithblockContext; 
PcadParser.FunccallparamsContext = FunccallparamsContext; 
PcadParser.CodeblockContext = CodeblockContext; 
PcadParser.ListContext = ListContext; 
PcadParser.ValuelistContext = ValuelistContext; 
PcadParser.NamedlistContext = NamedlistContext; 
PcadParser.RangelistContext = RangelistContext; 
