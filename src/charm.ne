program -> charmName newline charmDetails newline description {% function(d) { return d.flat().filter(Boolean) }%}

charmName -> singleLineText {% id %}

charmDetails -> cost mins newline:?
                type newline:?
                keywords newline:?
                duration newline:?
                prereqs {% function(d) {return d.filter(Boolean)} %}

cost -> "Cost: " moteCost "; "  {% function(d) { return d[0] + d[1];} %}
mins -> "Mins: " requirements {% function(d) { 
  return d[0] + d[1].flat().filter(x => ![', ',' '].includes(x)).join(', ');} %}
type -> "Type: " charmType {% function(d) { return d[0] + d[1] } %}
keywords ->  "Keywords: " keywordTypes {% function(d) { return d[0] + d[1] } %}
duration -> "Duration: " .:*  {% function(d) {return d[0] + d[1].join("") } %}
prereqs -> "Prerequisite Charms: " prereqList {% function(d) { return d[0] + d[1].join(', ');} %}

description -> multiLineText {% id %}

moteCost -> number "m" {% function(d) { return d[0][0] + d[1];} %}
requirements -> requirement ", " requirements | requirement {% function(d) {
  return d
} %}
requirement -> requirementType __ number {% function(d) { 
 
  return d[0] + " " + d[2];} %}
requirementType -> "Archery" | "Athletics" | "Integrity" | "Essence"
charmType -> "Reflexive" | "Simple"
keywordTypes => "None"  | "Dual"
prereqList -> commaSeparatedList {% function(d) { return d.flat().filter(x => x !== ', '); } %}

word -> [a-zA-Z]:+ ([" "-] word):* {% function(d) { return d[0].flat().join("") + d[1].flat().join("") } %}
commaSeparatedList -> word ", " commaSeparatedList | word {% id %}
number -> [0-9]
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f\s]
newline -> "\n":+ {% function(d) {return null;} %}

singleLineText -> .:+ {% function(d) {return d[0].join("") } %}
multiLineText -> singleLineText ("\n" {% d => " " %}) multiLineText {% d => d.join("") %} | singleLineText