// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["charmName", "newline", "charmDetails", "description"], "postprocess": function(d) { return d.flat().filter(Boolean) }},
    {"name": "charmName", "symbols": ["singleLineText"], "postprocess": id},
    {"name": "charmDetails", "symbols": ["cost", "mins", "newline", "type", "newline", "keywords", "newline", "duration", "newline", "prereqs", "newline"], "postprocess": function(d) {return d.filter(Boolean)}},
    {"name": "cost$string$1", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cost$string$2", "symbols": [{"literal":";"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cost", "symbols": ["cost$string$1", "moteCost", "cost$string$2"], "postprocess": function(d) { return d[0] + d[1];}},
    {"name": "mins$string$1", "symbols": [{"literal":"M"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "mins$ebnf$1$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "mins$ebnf$1", "symbols": ["mins$ebnf$1$string$1"], "postprocess": id},
    {"name": "mins$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "mins$ebnf$2", "symbols": ["mins"], "postprocess": id},
    {"name": "mins$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "mins", "symbols": ["mins$string$1", "requirement", "mins$ebnf$1", "mins$ebnf$2"], "postprocess": function(d) { return d[0] + d[1];}},
    {"name": "type$string$1", "symbols": [{"literal":"T"}, {"literal":"y"}, {"literal":"p"}, {"literal":"e"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1", "charmType"], "postprocess": function(d) { return d[0] + d[1] }},
    {"name": "keywords$string$1", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"y"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywords", "symbols": ["keywords$string$1", "keywordTypes"], "postprocess": function(d) { return d[0] + d[1] }},
    {"name": "duration$string$1", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "duration$ebnf$1", "symbols": []},
    {"name": "duration$ebnf$1", "symbols": ["duration$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "duration", "symbols": ["duration$string$1", "duration$ebnf$1"], "postprocess": function(d) {return d[0] + d[1].join("") }},
    {"name": "prereqs$string$1", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prereqs", "symbols": ["prereqs$string$1"], "postprocess": id},
    {"name": "description", "symbols": ["multiLineText"], "postprocess": id},
    {"name": "moteCost", "symbols": ["number", {"literal":"m"}], "postprocess": function(d) { return d[0][0] + d[1];}},
    {"name": "requirement", "symbols": ["requirementType", "__", "number"], "postprocess": function(d) { return d[0][0] + " " + d[2];}},
    {"name": "requirementType$string$1", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$1"]},
    {"name": "requirementType$string$2", "symbols": [{"literal":"A"}, {"literal":"t"}, {"literal":"h"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$2"]},
    {"name": "requirementType$string$3", "symbols": [{"literal":"E"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$3"], "postprocess": id},
    {"name": "charmType$string$1", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"f"}, {"literal":"l"}, {"literal":"e"}, {"literal":"x"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "charmType", "symbols": ["charmType$string$1"]},
    {"name": "charmType$string$2", "symbols": [{"literal":"S"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "charmType", "symbols": ["charmType$string$2"]},
    {"name": "keywordTypes$string$1", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywordTypes", "symbols": ["keywordTypes$string$1"]},
    {"name": "keywordTypes$string$2", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywordTypes", "symbols": ["keywordTypes$string$2"]},
    {"name": "word$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word$ebnf$2", "symbols": []},
    {"name": "word$ebnf$2", "symbols": ["word$ebnf$2", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1", "word$ebnf$2"], "postprocess": id},
    {"name": "commaSeparatedList", "symbols": ["word", {"literal":","}, "commaSeparatedList"]},
    {"name": "commaSeparatedList", "symbols": ["word"]},
    {"name": "number", "symbols": [/[0-9]/]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\v\f\s]/]},
    {"name": "newline$ebnf$1", "symbols": [{"literal":"\n"}]},
    {"name": "newline$ebnf$1", "symbols": ["newline$ebnf$1", {"literal":"\n"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "newline", "symbols": ["newline$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "singleLineText$ebnf$1", "symbols": [/./]},
    {"name": "singleLineText$ebnf$1", "symbols": ["singleLineText$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "singleLineText", "symbols": ["singleLineText$ebnf$1"], "postprocess": function(d) {return d[0].join("") }},
    {"name": "multiLineText$subexpression$1", "symbols": [{"literal":"\n"}], "postprocess": d => " "},
    {"name": "multiLineText", "symbols": ["singleLineText", "multiLineText$subexpression$1", "multiLineText"], "postprocess": d => d.join("")},
    {"name": "multiLineText", "symbols": ["singleLineText"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
