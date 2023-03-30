program -> charmName newline charmDetails newline description

charmName -> .:+ {% function(d) {return d[0].join("") } %}

charmDetails -> cost mins newline
  _ "Type:" _ charmType _ newline
  _ "Keywords:" _ keywords newline
  _ "Duration:" _ duration newline
  _ "Prerequisite Charms: None"

description -> .:+ {% function(d) {return d[0].join("") } %}
cost -> "Cost: " moteCost "; "  {% function(d) { return d[0] + d[1];} %}
moteCost -> number "m" {% function(d) { return d[0][0] + d[1];} %}
mins -> "Mins: " requirement ", ":? mins:? 
charmType -> "Reflexive" | "Simple"
keywords -> "None"  | "Dual"
duration -> word:+

requirement -> requirementType __ number
requirementType -> "Archery" | "Athletics" | "Essence"
[a-zA-Z] _
word -> [a-zA-Z]:+ " ":*
commaSeparatedList -> word "," commaSeparatedList | word
number -> [0-9]
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f\s]
newline -> "\n":+ {% function(d) {return null;} %}
