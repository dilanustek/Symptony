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

export type SymptomsAndFactors = {
  [key in Symptom]?: Factor[];
};

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
