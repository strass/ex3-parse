program -> charmName newline charmDetails description {% function(d) { return d.flat().filter(Boolean) }%}

charmName -> singleLineText {% id %}

charmDetails -> cost mins newline
                type newline
                keywords newline
                duration newline
                prereqs newline {% function(d) {return d.filter(Boolean)} %}

cost -> "Cost: " moteCost "; "  {% function(d) { return d[0] + d[1];} %}
mins -> "Mins: " requirement ", ":? mins:? {% function(d) { return d[0] + d[1];} %}
type -> "Type: " charmType {% function(d) { return d[0] + d[1] } %}
keywords ->  "Keywords: " keywordTypes {% function(d) { return d[0] + d[1] } %}
duration -> "Duration: " .:*  {% function(d) {return d[0] + d[1].join("") } %}
prereqs -> "Prerequisite Charms: None" {% id %}

description -> multiLineText {% id %}

moteCost -> number "m" {% function(d) { return d[0][0] + d[1];} %}
requirement -> requirementType __ number {% function(d) { return d[0][0] + " " + d[2];} %}
requirementType -> "Archery" | "Athletics" | "Essence" {% id %}
charmType -> "Reflexive" | "Simple"
keywordTypes => "None"  | "Dual"

word -> [a-zA-Z]:+ " ":* {% id %}
commaSeparatedList -> word "," commaSeparatedList | word
number -> [0-9]
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f\s]
newline -> "\n":+ {% function(d) {return null;} %}

singleLineText -> .:+ {% function(d) {return d[0].join("") } %}
multiLineText -> singleLineText ("\n" {% d => " " %}) multiLineText {% d => d.join("") %} | singleLineText