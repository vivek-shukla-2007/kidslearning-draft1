import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ProgressData {
  completedSounds: string[];
  completedQuizzes: string[];
  totalLessonsCompleted: number;
  currentStreak: number;
  badges: string[];
}

interface ProgressStore {
  progress: ProgressData;
  completeSound: (soundId: string) => void;
  completeQuiz: (quizId: string) => void;
  addBadge: (badgeId: string) => void;
  getProgress: () => ProgressData;
  reset: () => void;
}

const initialProgress: ProgressData = {
  completedSounds: [],
  completedQuizzes: [],
  totalLessonsCompleted: 0,
  currentStreak: 0,
  badges: [],
};

export const useProgress = create<ProgressStore>(
  persist(
    (set, get) => ({
      progress: initialProgress,
      completeSound: (soundId: string) => {
        set((state) => {
          const isNew = !state.progress.completedSounds.includes(soundId);
          return {
            progress: {
              ...state.progress,
              completedSounds: [...state.progress.completedSounds, soundId],
              totalLessonsCompleted: isNew ? state.progress.totalLessonsCompleted + 1 : state.progress.totalLessonsCompleted,
            },
          };
        });
      },
      completeQuiz: (quizId: string) => {
        set((state) => ({
          progress: {
            ...state.progress,
            completedQuizzes: [...state.progress.completedQuizzes, quizId],
          },
        }));
      },
      addBadge: (badgeId: string) => {
        set((state) => ({
          progress: {
            ...state.progress,
            badges: [...state.progress.badges, badgeId],
          },
        }));
      },
      getProgress: () => get().progress,
      reset: () => set({ progress: initialProgress }),
    }),
    {
      name: 'kids-learning-progress',
    }
  )
);
