import nearley from "nearley";
import grammar from "./_charm.ne";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

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

describe("Charm Parser", () => {
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
});
