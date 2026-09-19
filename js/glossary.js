/* ===================== glossary =====================
   Technical words that the panels use, defined in place. The renderer marks
   the first appearance of each term in a panel and shows the definition on
   hover, on focus and on click.

   Each entry:
     def      one or two plain sentences. No jargon inside a definition.
     also     other spellings to match, beyond the term and its simple plural
     sources  entry numbers from js/sources.js, as everywhere else

   Terms are matched on whole words, so a term must read the same in the prose
   as it does here.                                                          */

const GLOSSARY = {
  "hard parts": {
    def:"Shells, armour and spines built from calcium carbonate or calcium phosphate. Trilobites, brachiopods and archaeocyaths are Cambrian examples.",
    sources:[445] },
  "vascular tissue": {
    def:"Internal plumbing that carries water up a stem. It is what lets a plant stand taller than a few centimetres.",
    sources:[417] },
  "tillite": {
    def:"Rock made of the unsorted rubble an ice sheet dumps as it melts.",
    sources:[219, 224] },
  "unconformity": {
    def:"A gap in the rock record, where layers were eroded away or never laid down.",
    also:["unconformities"], sources:[380, 445] },
  "orogeny": {
    def:"A mountain-building episode, usually caused by two pieces of crust colliding.",
    also:["orogenies"], sources:[314, 316] },
  "flood basalt": {
    def:"An enormous outpouring of lava from fissures rather than from a single volcano.",
    sources:[236] },
  "cyclothem": {
    def:"A repeating stack of sandstone, shale, seatearth and coal, produced as sea level rose and fell.",
    sources:[220] },
  "coccolith": {
    def:"A calcite plate a few thousandths of a millimetre across, shed by single-celled algae. Chalk is made of them.",
    sources:[352, 407] },
  "laterite": {
    def:"Red tropical soil left behind when weathering strips out everything but iron and aluminium oxides.",
    sources:[377] },
  "therapsid": {
    def:"A member of the group that includes mammals and their close extinct relatives.",
    sources:[34, 37] },
  "lycopsid": {
    def:"A group of spore-bearing plants. The Carboniferous tree forms stood more than thirty-five metres; the living ones are ankle-high clubmosses.",
    sources:[19, 208] },
  "dicynodont": {
    def:"A tusked plant-eating therapsid. Lystrosaurus is the best known of them.",
    sources:[34] },
  "synapsid": {
    def:"The branch of backboned animals that leads to mammals. Its early members looked like reptiles.",
    sources:[32, 33] },
  "amniote": {
    def:"An animal whose egg carries its own water supply inside a membrane, which freed backboned animals from breeding in water.",
    sources:[40, 41] },
  "seatearth": {
    def:"The fossil soil under a coal seam, holding the roots of the forest that grew in it.",
    sources:[218, 220] },
  "dolerite": {
    def:"A dark igneous rock of medium grain, formed where magma cooled in a sheet inside other rock instead of erupting.",
    sources:[264, 266] },
  "cross-bedding": {
    def:"Sloping layers inside a bed, left by migrating dunes or ripples. Their direction records which way the wind or the current ran.",
    also:["cross-beds", "cross-bedded"], sources:[355, 356] },
  "palaeomagnetism": {
    def:"The record of the Earth's magnetic field locked into a rock as it forms. It gives the latitude the rock sat at, though not its longitude.",
    sources:[280, 281] }
};
