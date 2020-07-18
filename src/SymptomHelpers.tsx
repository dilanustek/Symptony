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

/// how to turn this into a class?
// export type Factor5 = {
//   id: string;
//   name: string;
// }

// export type Other = {
//   id: string;
//   name: string;
// }

// const f:Factor5 = {id:"aaa",name:"aaaaa"};
// const o:Other = {id:"assaa",name:"aaassaa"};

// function foo2(a:Factor5){
//   return a;
// }

// foo2(f);
// foo2(o);
// const s="aaaa";
// foo2(s);

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
// export enum ActivityOptions {
//   SITTING = "SITTING",
//   WALKING = "WALKING",
//   RUNNING = "RUNNING",
//   LAYING = "LAYING",
// }

// export const ActivityOptionNames: { [key in ActivityOptions]: string } = {
//   SITTING: "Sitting",
//   WALKING: "Walking",
//   RUNNING: "Running",
//   LAYING: "Laying down",
// };

// export const ActivityOptions = [
//   "SITTING",
//   "WALKING",
//   "RUNNING",
//   "LAYING",
// ] as const;
// type typeOfArray = typeof ActivityOptions;
// type ActivityOption = typeOfArray[number];

// export const ActivityOptionNames2: { [key in ActivityOption]: string } = {
//   SITTING: "Sitting",
//   WALKING: "Walking",
//   RUNNING: "Running",
//   LAYING: "Laying down",
// };

// export const ActivityOptions = ["SITTING","WALKING","RUNNING","LAYING"] as const;
// type typeOfArray = typeof ActivityOptions;
// type ActivityOption = typeOfArray[number];

// export const ActivityOptionNames3: { [key: string]: string } = {
//   SITTING: "Sitting",
//   WALKING: "Walking",
//   RUNNING: "Running",
//   LAYING: "Laying down",
// };

// type ActivityEntry = {
//   SITTING: boolean;
//   WALKING: boolean;
//   RUNNING: boolean;
//   LAYING: boolean;
// };

export var ActivityValues = ["Sitting", "Walking", "Running", "Laying down"];

//Water
// export enum WaterOptions {
//   BAD = "BAD",
//   GOOD = "GOOD",
// }

// export const WaterOptionNames: { [key in WaterOptions]: string } = {
//   BAD: "Bad",
//   GOOD: "Good",
// };

// type WaterEntry = {
//   BAD: boolean;
//   GOOD: boolean;
// };

export var WaterValues = ["Not enough", "Enough"];

//Exercise
// export enum ExerciseOptions {
//   NONE = "NONE",
//   YES = "YES",
// }

// export const ExerciseOptionNames: { [key in ExerciseOptions]: string } = {
//   NONE: "No Exercise",
//   YES: "Exercised",
// };

// type ExerciseEntry = {
//   NONE: boolean;
//   YES: boolean;
// };

export var ExerciseValues = ["No exercise", "Exercised"];

export var FoodValues = [
  "Carbohydrates",
  "Sugar",
  "Protein",
  "Salt",
  "Lactose",
  "Gluten",
];
export var MoodValues = ["Stress", "Anxiety"];
export var SleepValues = ["Not enough", "Too much"];

export const FactorsAndValues = {
  ACTIVITY: ActivityValues,
  HYDRATION: WaterValues,
  EXERCISE: ExerciseValues,
};

// all the entries are in FactorEntries.
// export type FactorEntry = {
//   factors: Factor[];
//   activityEntry?: ActivityEntry;
//   exerciseEntry?: ExerciseEntry;
//   waterEntry?: WaterEntry;
// };

export type EntryFactorValue = {
  factor: Factor;
  value: string;
};

export type Entry = {
  symptom: Symptom;
  timeStamp: Date;
  entryFactorValues: EntryFactorValue[];
};
