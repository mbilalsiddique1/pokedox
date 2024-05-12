enum LabelTypes {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Normal = 'normal',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}

export interface ILabel {
  type: LabelTypes,
  label: string
}
