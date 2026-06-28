// Phonics Phase 2 - 19 sounds
// Reference: https://literacylearn.com/cvc-word-flashcards-with-pictures-free-printables/

export interface PhonicsSound {
  id: string;
  letter: string;
  phase: 2 | 3 | 4 | 5;
  pronunciationGuide: string;
  examples: {
    word: string;
    imageUrl?: string;
    pronunciation?: string;
  }[];
  commonWords: string[];
  blendingExamples: string[];
}

export const PHONICS_PHASE_2: PhonicsSound[] = [
  {
    id: "s",
    letter: "s",
    phase: 2,
    pronunciationGuide: "Like a snake: ssssss",
    examples: [
      { word: "sat", pronunciation: "sat" },
      { word: "sun", pronunciation: "sun" },
      { word: "sit", pronunciation: "sit" },
      { word: "seal", pronunciation: "seal" },
      { word: "sat", pronunciation: "sat" },
    ],
    commonWords: ["sat", "sit", "sun", "sad", "seal"],
    blendingExamples: ["s-a-t", "s-u-n", "s-i-t"],
  },
  {
    id: "a",
    letter: "a",
    phase: 2,
    pronunciationGuide: "Short 'a' sound like in 'cat'",
    examples: [
      { word: "ant", pronunciation: "ant" },
      { word: "apple", pronunciation: "apple" },
      { word: "cat", pronunciation: "cat" },
      { word: "map", pronunciation: "map" },
      { word: "sat", pronunciation: "sat" },
    ],
    commonWords: ["cat", "ant", "apple", "map", "sat"],
    blendingExamples: ["a", "c-a-t", "m-a-p"],
  },
  {
    id: "t",
    letter: "t",
    phase: 2,
    pronunciationGuide: "Like a tick tock: t-t-t",
    examples: [
      { word: "tap", pronunciation: "tap" },
      { word: "ten", pronunciation: "ten" },
      { word: "tiger", pronunciation: "tiger" },
      { word: "top", pronunciation: "top" },
      { word: "tea", pronunciation: "tea" },
    ],
    commonWords: ["tap", "top", "ten", "tea", "tiger"],
    blendingExamples: ["t-a-p", "t-o-p", "t-e-n"],
  },
  {
    id: "p",
    letter: "p",
    phase: 2,
    pronunciationGuide: "Like a pop: p-p-p",
    examples: [
      { word: "pig", pronunciation: "pig" },
      { word: "pen", pronunciation: "pen" },
      { word: "pot", pronunciation: "pot" },
      { word: "pat", pronunciation: "pat" },
      { word: "puppy", pronunciation: "puppy" },
    ],
    commonWords: ["pig", "pot", "pen", "pat", "puppy"],
    blendingExamples: ["p-i-g", "p-o-t", "p-e-n"],
  },
  {
    id: "i",
    letter: "i",
    phase: 2,
    pronunciationGuide: "Short 'i' sound like in 'sit'",
    examples: [
      { word: "igloo", pronunciation: "igloo" },
      { word: "ink", pronunciation: "ink" },
      { word: "sit", pronunciation: "sit" },
      { word: "pig", pronunciation: "pig" },
      { word: "bin", pronunciation: "bin" },
    ],
    commonWords: ["sit", "pig", "bin", "ink", "igloo"],
    blendingExamples: ["i", "s-i-t", "p-i-g"],
  },
  {
    id: "n",
    letter: "n",
    phase: 2,
    pronunciationGuide: "Like a bee: nnn",
    examples: [
      { word: "nest", pronunciation: "nest" },
      { word: "net", pronunciation: "net" },
      { word: "nap", pronunciation: "nap" },
      { word: "nose", pronunciation: "nose" },
      { word: "nut", pronunciation: "nut" },
    ],
    commonWords: ["nest", "net", "nap", "nose", "nut"],
    blendingExamples: ["n-e-t", "n-a-p", "n-o-s-e"],
  },
  {
    id: "m",
    letter: "m",
    phase: 2,
    pronunciationGuide: "Like mmm: mmm",
    examples: [
      { word: "mat", pronunciation: "mat" },
      { word: "man", pronunciation: "man" },
      { word: "map", pronunciation: "map" },
      { word: "mop", pronunciation: "mop" },
      { word: "moon", pronunciation: "moon" },
    ],
    commonWords: ["mat", "man", "map", "mop", "moon"],
    blendingExamples: ["m-a-t", "m-o-p", "m-a-n"],
  },
  {
    id: "d",
    letter: "d",
    phase: 2,
    pronunciationGuide: "Like a drum: d-d-d",
    examples: [
      { word: "dog", pronunciation: "dog" },
      { word: "doll", pronunciation: "doll" },
      { word: "den", pronunciation: "den" },
      { word: "dot", pronunciation: "dot" },
      { word: "dig", pronunciation: "dig" },
    ],
    commonWords: ["dog", "doll", "den", "dot", "dig"],
    blendingExamples: ["d-o-g", "d-e-n", "d-i-g"],
  },
  {
    id: "g",
    letter: "g",
    phase: 2,
    pronunciationGuide: "Like a goat: g-g-g",
    examples: [
      { word: "girl", pronunciation: "girl" },
      { word: "gap", pronunciation: "gap" },
      { word: "goat", pronunciation: "goat" },
      { word: "got", pronunciation: "got" },
      { word: "gas", pronunciation: "gas" },
    ],
    commonWords: ["girl", "gap", "goat", "got", "gas"],
    blendingExamples: ["g-a-p", "g-o-t", "g-a-s"],
  },
  {
    id: "o",
    letter: "o",
    phase: 2,
    pronunciationGuide: "Short 'o' sound like in 'dog'",
    examples: [
      { word: "orange", pronunciation: "orange" },
      { word: "odd", pronunciation: "odd" },
      { word: "dog", pronunciation: "dog" },
      { word: "top", pronunciation: "top" },
      { word: "pot", pronunciation: "pot" },
    ],
    commonWords: ["dog", "top", "pot", "orange", "odd"],
    blendingExamples: ["o", "d-o-g", "t-o-p"],
  },
  {
    id: "c",
    letter: "c",
    phase: 2,
    pronunciationGuide: "Like a cat: c-c-c",
    examples: [
      { word: "cat", pronunciation: "cat" },
      { word: "cap", pronunciation: "cap" },
      { word: "can", pronunciation: "can" },
      { word: "cup", pronunciation: "cup" },
      { word: "cot", pronunciation: "cot" },
    ],
    commonWords: ["cat", "cap", "can", "cup", "cot"],
    blendingExamples: ["c-a-t", "c-a-p", "c-u-p"],
  },
  {
    id: "k",
    letter: "k",
    phase: 2,
    pronunciationGuide: "Like a kite: k-k-k",
    examples: [
      { word: "king", pronunciation: "king" },
      { word: "kit", pronunciation: "kit" },
      { word: "kite", pronunciation: "kite" },
      { word: "key", pronunciation: "key" },
      { word: "kick", pronunciation: "kick" },
    ],
    commonWords: ["king", "kit", "kite", "key", "kick"],
    blendingExamples: ["k-i-t", "k-i-n-g", "k-e-y"],
  },
  {
    id: "e",
    letter: "e",
    phase: 2,
    pronunciationGuide: "Short 'e' sound like in 'pen'",
    examples: [
      { word: "egg", pronunciation: "egg" },
      { word: "elephant", pronunciation: "elephant" },
      { word: "pen", pronunciation: "pen" },
      { word: "ten", pronunciation: "ten" },
      { word: "net", pronunciation: "net" },
    ],
    commonWords: ["egg", "pen", "ten", "net", "elephant"],
    blendingExamples: ["e", "p-e-n", "t-e-n"],
  },
  {
    id: "u",
    letter: "u",
    phase: 2,
    pronunciationGuide: "Short 'u' sound like in 'up'",
    examples: [
      { word: "up", pronunciation: "up" },
      { word: "under", pronunciation: "under" },
      { word: "umbrella", pronunciation: "umbrella" },
      { word: "sun", pronunciation: "sun" },
      { word: "cup", pronunciation: "cup" },
    ],
    commonWords: ["up", "under", "umbrella", "sun", "cup"],
    blendingExamples: ["u", "s-u-n", "c-u-p"],
  },
  {
    id: "r",
    letter: "r",
    phase: 2,
    pronunciationGuide: "Like a lion: rrr",
    examples: [
      { word: "run", pronunciation: "run" },
      { word: "rat", pronunciation: "rat" },
      { word: "rabbit", pronunciation: "rabbit" },
      { word: "red", pronunciation: "red" },
      { word: "ring", pronunciation: "ring" },
    ],
    commonWords: ["run", "rat", "rabbit", "red", "ring"],
    blendingExamples: ["r-u-n", "r-a-t", "r-e-d"],
  },
  {
    id: "h",
    letter: "h",
    phase: 2,
    pronunciationGuide: "Like a hat: h-h-h",
    examples: [
      { word: "hat", pronunciation: "hat" },
      { word: "hop", pronunciation: "hop" },
      { word: "house", pronunciation: "house" },
      { word: "hand", pronunciation: "hand" },
      { word: "hen", pronunciation: "hen" },
    ],
    commonWords: ["hat", "hop", "house", "hand", "hen"],
    blendingExamples: ["h-a-t", "h-o-p", "h-e-n"],
  },
  {
    id: "b",
    letter: "b",
    phase: 2,
    pronunciationGuide: "Like a bee: bbb",
    examples: [
      { word: "bat", pronunciation: "bat" },
      { word: "ball", pronunciation: "ball" },
      { word: "bed", pronunciation: "bed" },
      { word: "bug", pronunciation: "bug" },
      { word: "bus", pronunciation: "bus" },
    ],
    commonWords: ["bat", "ball", "bed", "bug", "bus"],
    blendingExamples: ["b-a-t", "b-e-d", "b-u-g"],
  },
  {
    id: "f",
    letter: "f",
    phase: 2,
    pronunciationGuide: "Like a fan: fff",
    examples: [
      { word: "fan", pronunciation: "fan" },
      { word: "fish", pronunciation: "fish" },
      { word: "fox", pronunciation: "fox" },
      { word: "fig", pronunciation: "fig" },
      { word: "fat", pronunciation: "fat" },
    ],
    commonWords: ["fan", "fish", "fox", "fig", "fat"],
    blendingExamples: ["f-a-n", "f-i-g", "f-a-t"],
  },
  {
    id: "l",
    letter: "l",
    phase: 2,
    pronunciationGuide: "Like a lion: lll",
    examples: [
      { word: "lamp", pronunciation: "lamp" },
      { word: "log", pronunciation: "log" },
      { word: "leg", pronunciation: "leg" },
      { word: "lid", pronunciation: "lid" },
      { word: "lion", pronunciation: "lion" },
    ],
    commonWords: ["lamp", "log", "leg", "lid", "lion"],
    blendingExamples: ["l-e-g", "l-i-d", "l-o-g"],
  },
];

export function getPhonicsSound(soundId: string): PhonicsSound | undefined {
  return PHONICS_PHASE_2.find((sound) => sound.id === soundId);
}
