/** WebCAD.js
 ** Simple text-based vector shape generation
**/


import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.0/dist/antlr4.web.min.js';
import MyGrammarLexer from './MyGrammarLexer.js';
import MyGrammarParser from './MyGrammarParser.js';
import MyGrammarListener from './MyGrammarListener.js';

const input = `
union(){
    circle(r=20);
    rotate(45) intersection(){
        rect(h=20,w=20);
        difference(){
            circle(r=18);
            circle(r=16);
        }
    }
    translate([-5,-10]) scale([1,2]) circle(r=1);
    translate([5,-10]) scale([1,2]) circle(r=1);
}
`;
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.prog();





// Main module