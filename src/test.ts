import nearley from "nearley";
import grammar from "./_charm.ne";

let parser: nearley.Parser;

const SIMPLE_CHARM = `Graceful Crane Stance
Cost: 3m; Mins: Athletics 1
Type: Reflexive
Keywords: None
Duration: One scene
Prerequisite Charms: None
The Solar draws Essence through her pores and into her
bones, suffusing and lightening her form and steadying her
step. For the rest of the scene, she has perfect balance, and
can stand or run on things too narrow or weak to support
her normally, with no chance of falling or breaking through.
She can run on a guy wire, stand on a crumbling parapet,
balance on the tip of a pine tree, and perform many similar
feats without needing to roll (Dexterity + Athletics).`;

const CHARM_WITH_PREREQS = `Inviolable Essence-Merging
Cost: 7m; Mins: Integrity 5, Essence 4
Type: Reflexive
Keywords: None
Duration: Indefinite
Prerequisite Charms: Body-Restoring Benison, Energy Restoration Prana
Through meditation, the Exalt sinks into the Essence of her environment, temporarily absolving herself of the Ties and Principles that make her transient and definite. Instead she is everything and nothing, a fulcrum for the flow of all Essence. In this state she is untouchable. She cannot be attacked or harmed in any way, though she can still be subject to social influence. Powerful beings such as demons whose very voices break hearts and shatter souls may con- verse with her without harming her; if a being intends her no harm, then even the voice of the apocalypse or the with- ering whisper of the Dowager cannot harm her. Through- out her meditation, the Exalt simply becomes a natural facet of the cosmos, equal to and unaffected by all things. Her Lore score is doubled if for the purposes of discuss- ing the nature of Essence and the movement of the stars. Her Occult score is doubled if for the purposes of making enlightened pronouncement on the mysteries of the uni- verse. The powers and protections of this Charm end the moment the Solar ceases meditation.
Special activation rules: This Charm cannot be used in a scene in which the Exalt has attacked or otherwise harmed another character.`;

describe("Charm Parser", () => {
  beforeEach(() => {
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  });
  it("should parse a simple charm", () => {
    expect(parser.feed(SIMPLE_CHARM).results).toMatchInlineSnapshot(`
[
  [
    "Graceful Crane Stance",
    "Cost: 3m",
    "Mins: Athletics 1",
    "Type: Reflexive",
    "Keywords: None",
    "Duration: One scene",
    "Prerequisite Charms: None",
    "The Solar draws Essence through her pores and into her bones, suffusing and lightening her form and steadying her step. For the rest of the scene, she has perfect balance, and can stand or run on things too narrow or weak to support her normally, with no chance of falling or breaking through. She can run on a guy wire, stand on a crumbling parapet, balance on the tip of a pine tree, and perform many similar feats without needing to roll (Dexterity + Athletics).",
  ],
]
`);
  });
  it("should parse a charm with prereqs", () => {
    expect(parser.feed(CHARM_WITH_PREREQS).results).toMatchInlineSnapshot(`
[
  [
    "Inviolable Essence-Merging",
    "Cost: 7m",
    "Mins: Integrity 5, Essence 4",
    "Type: Reflexive",
    "Keywords: None",
    "Duration: Indefinite",
    "Prerequisite Charms: Body-Restoring Benison, Energy Restoration Prana",
    "Through meditation, the Exalt sinks into the Essence of her environment, temporarily absolving herself of the Ties and Principles that make her transient and definite. Instead she is everything and nothing, a fulcrum for the flow of all Essence. In this state she is untouchable. She cannot be attacked or harmed in any way, though she can still be subject to social influence. Powerful beings such as demons whose very voices break hearts and shatter souls may con- verse with her without harming her; if a being intends her no harm, then even the voice of the apocalypse or the with- ering whisper of the Dowager cannot harm her. Through- out her meditation, the Exalt simply becomes a natural facet of the cosmos, equal to and unaffected by all things. Her Lore score is doubled if for the purposes of discuss- ing the nature of Essence and the movement of the stars. Her Occult score is doubled if for the purposes of making enlightened pronouncement on the mysteries of the uni- verse. The powers and protections of this Charm end the moment the Solar ceases meditation. Special activation rules: This Charm cannot be used in a scene in which the Exalt has attacked or otherwise harmed another character.",
  ],
  [
    "Inviolable Essence-Merging",
    "Cost: 7m",
    "Mins: Integrity 5, Essence 4",
    "Type: Reflexive",
    "Keywords: None",
    "Duration: Indefinite",
    "Prerequisite Charms: Body-Restoring Benison, Energy Restoration Prana",
    "Through meditation, the Exalt sinks into the Essence of her environment, temporarily absolving herself of the Ties and Principles that make her transient and definite. Instead she is everything and nothing, a fulcrum for the flow of all Essence. In this state she is untouchable. She cannot be attacked or harmed in any way, though she can still be subject to social influence. Powerful beings such as demons whose very voices break hearts and shatter souls may con- verse with her without harming her; if a being intends her no harm, then even the voice of the apocalypse or the with- ering whisper of the Dowager cannot harm her. Through- out her meditation, the Exalt simply becomes a natural facet of the cosmos, equal to and unaffected by all things. Her Lore score is doubled if for the purposes of discuss- ing the nature of Essence and the movement of the stars. Her Occult score is doubled if for the purposes of making enlightened pronouncement on the mysteries of the uni- verse. The powers and protections of this Charm end the moment the Solar ceases meditation. Special activation rules: This Charm cannot be used in a scene in which the Exalt has attacked or otherwise harmed another character.",
  ],
  [
    "Inviolable Essence-Merging",
    "Cost: 7m",
    "Mins: Integrity 5, Essence 4",
    "Type: Reflexive",
    "Keywords: None",
    "Duration: Indefinite",
    "Prerequisite Charms: Body-Restoring Benison, Energy Restoration Prana",
    "Through meditation, the Exalt sinks into the Essence of her environment, temporarily absolving herself of the Ties and Principles that make her transient and definite. Instead she is everything and nothing, a fulcrum for the flow of all Essence. In this state she is untouchable. She cannot be attacked or harmed in any way, though she can still be subject to social influence. Powerful beings such as demons whose very voices break hearts and shatter souls may con- verse with her without harming her; if a being intends her no harm, then even the voice of the apocalypse or the with- ering whisper of the Dowager cannot harm her. Through- out her meditation, the Exalt simply becomes a natural facet of the cosmos, equal to and unaffected by all things. Her Lore score is doubled if for the purposes of discuss- ing the nature of Essence and the movement of the stars. Her Occult score is doubled if for the purposes of making enlightened pronouncement on the mysteries of the uni- verse. The powers and protections of this Charm end the moment the Solar ceases meditation. Special activation rules: This Charm cannot be used in a scene in which the Exalt has attacked or otherwise harmed another character.",
  ],
  [
    "Inviolable Essence-Merging",
    "Cost: 7m",
    "Mins: Integrity 5, Essence 4",
    "Type: Reflexive",
    "Keywords: None",
    "Duration: Indefinite",
    "Prerequisite Charms: Body-Restoring Benison, Energy Restoration Prana",
    "Through meditation, the Exalt sinks into the Essence of her environment, temporarily absolving herself of the Ties and Principles that make her transient and definite. Instead she is everything and nothing, a fulcrum for the flow of all Essence. In this state she is untouchable. She cannot be attacked or harmed in any way, though she can still be subject to social influence. Powerful beings such as demons whose very voices break hearts and shatter souls may con- verse with her without harming her; if a being intends her no harm, then even the voice of the apocalypse or the with- ering whisper of the Dowager cannot harm her. Through- out her meditation, the Exalt simply becomes a natural facet of the cosmos, equal to and unaffected by all things. Her Lore score is doubled if for the purposes of discuss- ing the nature of Essence and the movement of the stars. Her Occult score is doubled if for the purposes of making enlightened pronouncement on the mysteries of the uni- verse. The powers and protections of this Charm end the moment the Solar ceases meditation. Special activation rules: This Charm cannot be used in a scene in which the Exalt has attacked or otherwise harmed another character.",
  ],
]
`);
  });
});
