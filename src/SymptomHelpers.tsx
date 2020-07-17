// SYMPTOMS
export enum Symptom {
  REFLUX = "REFLUX",
  IBS = "IBS",
  HEART = "HEART",
  MIGRAINE = "MIGRAINE",
  STOMACH = "STOMACH",
  PAIN = "PAIN",
  PMS = "PMS",
  VERTIGO = "VERTIGO",
}

export const SymptomNames: { [key in Symptom]: string } = {
  REFLUX: "Acid Reflux",
  IBS: "Irritable Bowel",
  HEART: "Heart irregularity",
  MIGRAINE: "Migraines",
  STOMACH: "Stomach / Nausia",
  PAIN: "Pain",
  PMS: "Premenstrual Syndrome",
  VERTIGO: "Vertigo",
};

// FACTORS
export enum Factor {
  ACTIVITY = "ACTIVITY",
  EXERCISE = "EXERCISE",
  HYDRATION = "HYDRATION",
  FOOD = "FOOD",
  MOOD = "MOOD",
  SLEEP = "SLEEP",
}

export const FactorNames: { [key in Factor]: string } = {
  ACTIVITY: "Current Activity",
  EXERCISE: "Exercise",
  HYDRATION: "Hydration",
  FOOD: "Food",
  MOOD: "Mood",
  SLEEP: "Sleep",
};

// Symptoms and Factors - Setup
export type SymptomsAndFactors = {
  [key in Symptom]?: Factor[];
};

// FACTORS' OPTIONS
//Activity
export enum ActivityOptions {
  SITTING = "SITTING",
  WALKING = "WALKING",
  RUNNING = "RUNNING",
  LAYING = "LAYING",
}

export const ActivityOptionNames: { [key in ActivityOptions]: string } = {
  SITTING: "Sitting",
  WALKING: "Walking",
  RUNNING: "Running",
  LAYING: "Laying down",
};

type ActivityEntry = {
  SITTING: boolean;
  WALKING: boolean;
  RUNNING: boolean;
  LAYING: boolean;
};

//Water
export enum WaterOptions {
  BAD = "BAD",
  GOOD = "GOOD",
}

export const WaterOptionNames: { [key in WaterOptions]: string } = {
  BAD: "Bad",
  GOOD: "Good",
};

type WaterEntry = {
  BAD: boolean;
  GOOD: boolean;
};

//Exercise
export enum ExerciseOptions {
  NONE = "NONE",
  YES = "YES",
}

export const ExerciseOptionNames: { [key in ExerciseOptions]: string } = {
  NONE: "No Exercise",
  YES: "Exercised",
};

type ExerciseEntry = {
  NONE: boolean;
  YES: boolean;
};

// all the etnries are in FactorEntries.
type FactorEntries = {
  factors: Factor[];
  activityEntry: ActivityEntry;
  exerciseEntry: ExerciseEntry;
  waterEntry: WaterEntry;
};

export type Entry = {
  symptom: Symptom;
  timeStamp: Date;
  currentFactorsArr: FactorEntries;
};
