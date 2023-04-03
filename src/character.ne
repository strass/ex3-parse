program -> characterName description stats combatStats

characterName -> singleLineText
description -> multiLineText
stats -> essence willpower join battle healthLevels actions socialStatics
combatStats -> attacks movement combatStatics soakHardness

essence -> "Essence: " number ";"
willpower -> "Willpower: " number ";"
join -> "Join: " number "dice"
healthLevels -> "Health Levels: " string
actions -> "Actions: " semicolinSeparatedList
movement -> "Combat Movement: " number "dice"
combatStatics: "Evasion" number ", Parry" number
soakHardness -> "Soak/Hardness" number "/" number "(" string ")"

word -> [a-zA-Z]:+ ([" "-] word):* {% function(d) { return d[0].flat().join("") + d[1].flat().join("") } %}
commaSeparatedList -> word ", " commaSeparatedList | word {% id %}
number -> [0-9]
_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}
wschar -> [ \t\v\f\s]
newline -> "\n":+ {% function(d) {return null;} %}

singleLineText -> .:+ {% function(d) {return d[0].join("") } %}
multiLineText -> singleLineText ("\n" {% d => " " %}) multiLineText {% d => d.join("") %} | singleLineText