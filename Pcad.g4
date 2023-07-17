grammar Pcad;

prog
    : statement+ EOF ;

statement
    : expr SEMI
    | assign SEMI
    | funcdef
    | funccallwithblock
    | conditional
    | loop
    ;

assign
    : ID EQUALS expr
    ;

expr
    : (MINUS|BANG) expr // unary
    | expr (CARET|BSLASH|PIPE) expr
    | expr (SPLAT|SLASH|PERCENT) expr
    | expr (PLUS|MINUS) expr
    | expr (DAMP|DPIPE|DCARET) expr
    | expr (LT|LTEQ|EQ|NOEQ|GTEQ|GT) expr // equality
    | LPAREN expr RPAREN
    | (funccall | ID | STRING | NUMBER | BOOLEAN | list | UNDEF | NULL)
    ;


funcdef
    : FUNCTION ID funcdefparams codeblock
    ;
funcdefparams
    : LPAREN ((ID COMMA)* (ID|(assign COMMA)* assign))? RPAREN
    ;

conditional
    : IF (expr codeblock | LPAREN expr RPAREN statement)
      (ELSEIF (expr codeblock | LPAREN expr RPAREN statement))* 
      (ELSE (codeblock|statement))?
    ;

loop
    : LOOP (assign codeblock | LPAREN assign RPAREN (statement|codeblock))
    ;

funccall
    : ID funccallparams
    ;
funccallwithblock
    : ID funccallparams? (codeblock | statement)
    ;
funccallparams
    : LPAREN ((expr COMMA)* (expr|(assign COMMA)* assign))? RPAREN
    ;

codeblock
    : LBRACE statement* RBRACE
    ;

list
    : valuelist
    | namedlist
    | rangelist
    ;

valuelist
    : LBRACK ((expr COMMA)* expr)? RBRACK
    ;
namedlist
    : LBRACK (assign COMMA)* assign RBRACK
    ;
rangelist
    : LBRACK expr COLON (expr COLON)? expr RBRACK
    ;

 


/* lexer rules */

// flow control keywords
IF          : 'if'      ;
ELSEIF      : 'elseif'  ;
ELSE        : 'else'    ;
LOOP        : 'loop'    ;

// other keywords
FUNCTION    : 'function';
UNDEF       : 'undefined'   ;
NULL        : 'null'    ;


// Literals

STRING
    : SQUOTE STRINGCHAR* SQUOTE
    ;

fragment STRINGCHAR
    : '\\\''
    | ~[']
    ;

BOOLEAN
    : 'true'
    | 'false'
    ;

NUMBER
    : INT (DOT INT)?
    | 'Infinity'
    | 'NaN'
    ;
fragment INT
    : [0-9]+
    ;

// comments
COMMENT
    : (LINECOMMENT | BLOCKCOMMENT) -> skip
    ;
LINECOMMENT
    : SLASH SLASH ~[\r\n]*
    ;
BLOCKCOMMENT
    : SLASH SPLAT .*? SPLAT SLASH
    ;

// operators/groupers

SQUOTE  : '\''  ;
DQUOTE  : '"'   ;
BQUOTE  : '`'   ;
LPAREN  : '('   ;
RPAREN  : ')'   ;
LBRACE  : '{'   ;
RBRACE  : '}'   ;
LBRACK  : '['   ;
RBRACK  : ']'   ;
DOT     : '.'   ;
COMMA   : ','   ;
SEMI    : ';'   ;
QUERY   : '?'   ;
COLON   : ':'   ;
BSLASH  : '\\'  ;
PLUS    : '+'   ;
MINUS   : '-'   ;
SPLAT   : '*'   ;
SLASH   : '/'   ;
PERCENT : '%'   ;
CARET   : '^'   ;
AMPER   : '&'   ;
PIPE    : '|'   ;
BANG    : '!'   ;
LT      : '<'   ;
GT      : '>'   ;
EQUALS  : '='   ;

DAMP    : '&&'  ;
DPIPE   : '||'  ;
DCARET  : '^^'  ;

LTEQ    : '<='  ;
GTEQ    : '>='  ;
EQ      : '=='  ;
NOEQ    : '!='  ;



ID
    : [a-zA-Z_][a-zA-Z_0-9]*
    ;

WS
    : [ \r\n\t]+ -> skip
    ;









