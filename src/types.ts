export enum Levels {
  any,
  begginer,
  intermediate,
  advanced,
}

type Language = {
  name: string;
  flagCode: string;
};

export const Languages: {[key: string]: Language} = {
  english: {
    name: 'English',
    flagCode: 'gb',
  },
  polish: {
    name: 'Polish',
    flagCode: 'pl',
  },
  spanish: {
    name: 'Spanish',
    flagCode: 'es',
  },
  german: {
    name: 'German',
    flagCode: 'de',
  },
  dutch: {
    name: 'Dutch',
    flagCode: 'nl',
  },
  italian: {
    name: 'Italian',
    flagCode: 'it',
  },
  norwegian: {
    name: 'Norwegian',
    flagCode: 'no',
  },
  danish: {
    name: 'Danish',
    flagCode: 'dk',
  },
  swedish: {
    name: 'Swedish',
    flagCode: 'se',
  },
  french: {
    name: 'French',
    flagCode: 'fr',
  },
} as const;
