program -> charmName newline charmDetails description

charmName -> singleLineText {% id %}

charmDetails -> cost mins newline
                charmType  newline
                keywords newline
                duration newline
                prereqs newline

cost -> "Cost: " moteCost "; "  {% function(d) { return d[0] + d[1];} %}
mins -> "Mins: " requirement ", ":? mins:? {% function(d) { return d[0] + d[1];} %}
charmType -> "Type: " "Reflexive" | "Simple" {% function(d) {return d[0].join("") } %}
keywords ->  "Keywords: " "None"  | "Dual" {% function(d) {return d[0].join("") } %}
duration -> "Duration: " .:*  {% function(d) {return d[0] + d[1].join("") } %}
prereqs -> "Prerequisite Charms: None"

description -> multiLineText {% id %}

moteCost -> number "m" {% function(d) { return d[0][0] + d[1];} %}
requirement -> requirementType __ number {% function(d) { return d[0][0] + " " + d[2];} %}
requirementType -> "Archery" | "Athletics" | "Essence"
[a-zA-Z] _
word -> [a-zA-Z]:+ " ":*
commaSeparatedList -> word "," commaSeparatedList | word
number -> [0-9]
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f\s]
newline -> "\n":+ {% function(d) {return null;} %}

singleLineText -> .:+ {% function(d) {return d[0].join("") } %}
multiLineText -> singleLineText ("\n" {% d => " " %}) multiLineText {% d => d.join("") %} | singleLineText