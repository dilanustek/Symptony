export enum Symptom {
  REFLUX = "Acid Reflux",
  IBS = "Irritable Bowel",
  HEART = "Heart irregularity",
  MIGRAINE = "Migraines",
  STOMACH = "Stomach / Nausia",
  PAIN = "Pain",
  PMS = "Premenstrual Syndrome",
  VERTIGO = "Vertigo",
}

// export const allSymp = Object.keys(Symptom).map((k) => Symptom[k as any]);
export const allSymptomNames = Object.values(Symptom);
export type SymptomAndFactors = {
  [key in Symptom]?: Factor[];
};
// interface EnumObject {
//   [enumValue: number]: string;
// }

// function getEnumValues(e: EnumObject): string[] {
//   return Object.keys(e).map((i: number) => e[i]);
// }

// export const allSymptoms = getEnumValues(Symptom);

export type Factor =
  | "Current Activity"
  | "Hydration"
  | "Food"
  | "Exercise"
  | "Mood"
  | "Sleep";
