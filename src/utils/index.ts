export function capitalize(str: string): string {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
}


export function dreamWorld(url: string): string {
  if (!url) return '';

  if (url.endsWith('.png')) {
    return url.replace('/sprites/pokemon/', '/sprites/pokemon/other/dream-world/').replace('.png', '.svg');
  }

  return url;
}

export function generateAbbreviation(word: string): string {
  const words = word.split(/[\s-]+/);

  let abbreviation = words[0].charAt(0).toUpperCase();

  for (let i = 1; i < words.length; i++) {
    abbreviation += words[i].charAt(0).toUpperCase();
  }

  if (abbreviation.length < 3) {
    abbreviation += words[0].charAt(1).toUpperCase();
  }

  return abbreviation;
}
