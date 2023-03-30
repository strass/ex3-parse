program -> charmName newline charmDetails newline description

charmName -> .:+ {% function(d) {return d[0].join("") } %}

charmDetails -> cost mins newline
  charmType  newline
  keywords newline
  "Duration: " duration newline
  "Prerequisite Charms: None"

description -> .:+ {% function(d) {return d[0].join("") } %}
cost -> "Cost: " moteCost "; "  {% function(d) { return d[0] + d[1];} %}
moteCost -> number "m" {% function(d) { return d[0][0] + d[1];} %}
mins -> "Mins: " requirement ", ":? mins:? 
charmType -> "Type: " "Reflexive" | "Simple" {% function(d) {return d[0].join("") } %}
keywords ->  "Keywords: " "None"  | "Dual" {% function(d) {return d[0].join("") } %}
duration -> .:*  {% function(d) {return d[0].join("") } %}

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
