export interface PhonicsWorksheet {
  id: string;
  soundId: string;
  type: 'tracing' | 'matching' | 'fill-blank' | 'quiz';
  title: string;
  description: string;
  difficulty: 'easy' | 'medium';
  content: WorksheetContent;
}

export interface WorksheetContent {
  instructions: string;
  items: WorksheetItem[];
}

export interface WorksheetItem {
  id: string;
  word: string;
  image?: string;
  hint?: string;
  answer?: string;
}

// CVC Words for Sound 'S'
export const PHONICS_WORKSHEETS: PhonicsWorksheet[] = [
  {
    id: 's-tracing-1',
    soundId: 's',
    type: 'tracing',
    title: 'Trace the Letter S',
    description: 'Practice writing the letter S with dotted lines',
    difficulty: 'easy',
    content: {
      instructions: 'Trace the letter S using a pencil or pen. Start at the top and follow the dotted lines.',
      items: [
        { id: '1', word: 'S', hint: 'Capital letter' },
        { id: '2', word: 's', hint: 'Small letter' },
      ],
    },
  },
  {
    id: 's-tracing-words-1',
    soundId: 's',
    type: 'tracing',
    title: 'Trace CVC Words with S',
    description: 'Practice tracing simple words that start with S',
    difficulty: 'easy',
    content: {
      instructions: 'Trace the words with dotted lines using a pencil or pen.',
      items: [
        { id: '1', word: 'sat', hint: 'Past tense of sit' },
        { id: '2', word: 'sun', hint: 'Bright in the sky' },
        { id: '3', word: 'sit', hint: 'To be on a chair' },
        { id: '4', word: 'sat', hint: 'Past tense of sit' },
      ],
    },
  },
  {
    id: 's-matching-1',
    soundId: 's',
    type: 'matching',
    title: 'Match Words to Pictures',
    description: 'Draw lines to match words with their pictures',
    difficulty: 'easy',
    content: {
      instructions: 'Draw a line from each word to the correct picture.',
      items: [
        { id: '1', word: 'sun', answer: 'sun' },
        { id: '2', word: 'sit', answer: 'sit' },
        { id: '3', word: 'sat', answer: 'sat' },
        { id: '4', word: 'seal', answer: 'seal' },
      ],
    },
  },
  {
    id: 's-fill-blank-1',
    soundId: 's',
    type: 'fill-blank',
    title: 'Fill in the Missing Letter',
    description: 'Write the letter S to complete the words',
    difficulty: 'easy',
    content: {
      instructions: 'Write the letter S to complete each word.',
      items: [
        { id: '1', word: '_at', answer: 's', hint: 'Rhymes with cat' },
        { id: '2', word: '_un', answer: 's', hint: 'Bright in the sky' },
        { id: '3', word: '_it', answer: 's', hint: 'To be on a chair' },
        { id: '4', word: '_eal', answer: 's', hint: 'A sea animal' },
      ],
    },
  },
  {
    id: 's-quiz-1',
    soundId: 's',
    type: 'quiz',
    title: 'Sound S Quiz',
    description: 'Test your knowledge of the S sound',
    difficulty: 'medium',
    content: {
      instructions: 'Choose the correct word that starts with S.',
      items: [
        { id: '1', word: 'sun', hint: 'sun, run, fun' },
        { id: '2', word: 'sit', hint: 'sit, hit, bit' },
        { id: '3', word: 'sat', hint: 'sat, hat, cat' },
      ],
    },
  },
];

export function getPhonicsWorksheetsBySound(soundId: string): PhonicsWorksheet[] {
  return PHONICS_WORKSHEETS.filter((ws) => ws.soundId === soundId);
}

export function getPhonicsWorksheet(worksheetId: string): PhonicsWorksheet | undefined {
  return PHONICS_WORKSHEETS.find((ws) => ws.id === worksheetId);
}
