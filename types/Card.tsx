export interface Card {
  name: String;
  manaCost: String;
  cmc: String;
  colors: [String];
  colorIdentity: [String];
  type: String;
  types: [String];
  subtypes: [String];
  rarity: String;
  set: String;
  setName: String;
  text: String;
  artist: String;
  number: String;
  power: String;
  toughness: String;
  layout: String;
  multiverseid: String;
  imageUrl: String;
  variations: [String];
  foreignNames: [
    {
      name: String;
      text: String;
      type: String;
      flavor: String;
      imageUrl: String;
      language: String;
      multiverseid: String;
    }
  ];
  printings: [String];
  originalText: String;
  originalType: String;
  legalities: [
    {
      format: String;
      legality: String;
    }
  ];
  id: String;
}
