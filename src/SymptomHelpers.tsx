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
  REFLUX: "Acid reflux",
  IBS: "Irritable bowel",
  HEART: "Heart irregularity",
  MIGRAINE: "Migraines",
  STOMACH: "Stomach / Nausia",
  PAIN: "Pain",
  PMS: "Premenstrual syndrome",
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
  ACTIVITY: "Current activity",
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

export const ActivityValues = ["Sitting", "Walking", "Running", "Laying down"];
export const WaterValues = ["Not enough", "Enough"];
export const ExerciseValues = ["No exercise", "Exercised"];
export const FoodValues = [
  "Carbohydrates",
  "Sugar",
  "Protein",
  "Salt",
  "Lactose",
  "Gluten",
];
export const MoodValues = ["Stress", "Anxiety"];
export const SleepValues = ["Not enough", "Too much"];

export const FactorsAndValues = {
  ACTIVITY: ActivityValues,
  HYDRATION: WaterValues,
  EXERCISE: ExerciseValues,
  MOOD: MoodValues,
  FOOD: FoodValues,
  SLEEP: SleepValues,
};

// EntryFactorValue type is a factor and value pair that will be stored as an  array for each entry.
export type EntryFactorValue = {
  factor: Factor;
  value: string;
};

// Each entry has  a symptom. timestamp,  and a list of factor-value pairs(EntryFactorValue)
export type Entry = {
  symptom: Symptom;
  timeStamp: Date;
  entryFactorValues: EntryFactorValue[];
};
