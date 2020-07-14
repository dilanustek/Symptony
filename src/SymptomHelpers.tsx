// export enum Symptom {
//   REFLUX = "Acid Reflux",
//   IBS = "Irritable Bowel",
//   HEART = "Heart irregularity",
//   MIGRAINE = "Migraines",
//   STOMACH = "Stomach / Nausia",
//   PAIN = "Pain",
//   PMS = "Premenstrual Syndrome",
//   VERTIGO = "Vertigo",
// }
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

export type Factor =
  | "Current Activity"
  | "Hydration"
  | "Food"
  | "Exercise"
  | "Mood"
  | "Sleep";
