// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["charmName", "newline", "charmDetails", "newline", "description"], "postprocess": function(d) { return d.flat().filter(Boolean) }},
    {"name": "charmName", "symbols": ["singleLineText"], "postprocess": id},
    {"name": "charmDetails$ebnf$1", "symbols": ["newline"], "postprocess": id},
    {"name": "charmDetails$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "charmDetails$ebnf$2", "symbols": ["newline"], "postprocess": id},
    {"name": "charmDetails$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "charmDetails$ebnf$3", "symbols": ["newline"], "postprocess": id},
    {"name": "charmDetails$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "charmDetails$ebnf$4", "symbols": ["newline"], "postprocess": id},
    {"name": "charmDetails$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "charmDetails", "symbols": ["cost", "mins", "charmDetails$ebnf$1", "type", "charmDetails$ebnf$2", "keywords", "charmDetails$ebnf$3", "duration", "charmDetails$ebnf$4", "prereqs"], "postprocess": function(d) {return d.filter(Boolean)}},
    {"name": "cost$string$1", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cost$string$2", "symbols": [{"literal":";"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cost", "symbols": ["cost$string$1", "moteCost", "cost$string$2"], "postprocess": function(d) { return d[0] + d[1];}},
    {"name": "mins$string$1", "symbols": [{"literal":"M"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "mins", "symbols": ["mins$string$1", "requirements"], "postprocess":  function(d) { 
        return d[0] + d[1].flat().filter(x => ![', ',' '].includes(x)).join(', ');} },
    {"name": "type$string$1", "symbols": [{"literal":"T"}, {"literal":"y"}, {"literal":"p"}, {"literal":"e"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1", "charmType"], "postprocess": function(d) { return d[0] + d[1] }},
    {"name": "keywords$string$1", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"y"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywords", "symbols": ["keywords$string$1", "keywordTypes"], "postprocess": function(d) { return d[0] + d[1] }},
    {"name": "duration$string$1", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "duration$ebnf$1", "symbols": []},
    {"name": "duration$ebnf$1", "symbols": ["duration$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "duration", "symbols": ["duration$string$1", "duration$ebnf$1"], "postprocess": function(d) {return d[0] + d[1].join("") }},
    {"name": "prereqs$string$1", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prereqs", "symbols": ["prereqs$string$1", "prereqList"], "postprocess": function(d) { return d[0] + d[1].join(', ');}},
    {"name": "description", "symbols": ["multiLineText"], "postprocess": id},
    {"name": "moteCost", "symbols": ["number", {"literal":"m"}], "postprocess": function(d) { return d[0][0] + d[1];}},
    {"name": "requirements$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirements", "symbols": ["requirement", "requirements$string$1", "requirements"]},
    {"name": "requirements", "symbols": ["requirement"], "postprocess":  function(d) {
          return d
        } },
    {"name": "requirement", "symbols": ["requirementType", "__", "number"], "postprocess":  function(d) { 
         
        return d[0] + " " + d[2];} },
    {"name": "requirementType$string$1", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$1"]},
    {"name": "requirementType$string$2", "symbols": [{"literal":"A"}, {"literal":"t"}, {"literal":"h"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$2"]},
    {"name": "requirementType$string$3", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$3"]},
    {"name": "requirementType$string$4", "symbols": [{"literal":"E"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "requirementType", "symbols": ["requirementType$string$4"]},
    {"name": "charmType$string$1", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"f"}, {"literal":"l"}, {"literal":"e"}, {"literal":"x"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "charmType", "symbols": ["charmType$string$1"]},
    {"name": "charmType$string$2", "symbols": [{"literal":"S"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "charmType", "symbols": ["charmType$string$2"]},
    {"name": "keywordTypes$string$1", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywordTypes", "symbols": ["keywordTypes$string$1"]},
    {"name": "keywordTypes$string$2", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "keywordTypes", "symbols": ["keywordTypes$string$2"]},
    {"name": "prereqList", "symbols": ["commaSeparatedList"], "postprocess": function(d) { return d.flat().filter(x => x !== ', '); }},
    {"name": "word$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word$ebnf$2", "symbols": []},
    {"name": "word$ebnf$2$subexpression$1", "symbols": [/[" "-]/, "word"]},
    {"name": "word$ebnf$2", "symbols": ["word$ebnf$2", "word$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1", "word$ebnf$2"], "postprocess": function(d) { return d[0].flat().join("") + d[1].flat().join("") }},
    {"name": "commaSeparatedList$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "commaSeparatedList", "symbols": ["word", "commaSeparatedList$string$1", "commaSeparatedList"]},
    {"name": "commaSeparatedList", "symbols": ["word"], "postprocess": id},
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
