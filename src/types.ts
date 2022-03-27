export enum RoomLanguageLevels {
  any,
  begginer,
  intermediate,
  advanced,
}

export enum UserLanguageLevels {
  begginer = 1,
  intermediate,
  advanced,
}

type Language = {
  name: string;
  flagCode: string;
};

export const Languages: {[key: string]: Language} = {
  English: {
    name: 'English',
    flagCode: 'gb',
  },
  Polish: {
    name: 'Polish',
    flagCode: 'pl',
  },
  Spanish: {
    name: 'Spanish',
    flagCode: 'es',
  },
  German: {
    name: 'German',
    flagCode: 'de',
  },
  Dutch: {
    name: 'Dutch',
    flagCode: 'nl',
  },
  Italian: {
    name: 'Italian',
    flagCode: 'it',
  },
  Norwegian: {
    name: 'Norwegian',
    flagCode: 'no',
  },
  Danish: {
    name: 'Danish',
    flagCode: 'dk',
  },
  Swedish: {
    name: 'Swedish',
    flagCode: 'se',
  },
  French: {
    name: 'French',
    flagCode: 'fr',
  },
} as const;
