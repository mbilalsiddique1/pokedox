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
  // Split the word by hyphens or spaces
  const words = word.split(/[\s-]+/);

  // Take the first letter of the first word
  let abbreviation = words[0].charAt(0).toUpperCase();

  // Take the first letter of each subsequent word and combine them
  for (let i = 1; i < words.length; i++) {
    abbreviation += words[i].charAt(0).toUpperCase();
  }

  // Ensure the abbreviation is at least 3 letters long
  if (abbreviation.length < 3) {
    abbreviation += words[0].charAt(1).toUpperCase();
  }

  // Return the abbreviation
  return abbreviation;
}
