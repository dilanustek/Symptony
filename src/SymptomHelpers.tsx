// Constants
// const MAX_FACTORVALUES = 5;

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
  timestamp: Date;
  entryFactorValues: EntryFactorValue[];
};

// // All tracked factors and values are tracked with an ID
export const idFactorValueMap: Map<string, EntryFactorValue> = new Map();
// export const factorValueIdMap: Map<EntryFactorValue, string> = new Map();

export function fillFactorValueDictionary() {
  let id = 0;
  for (let factor of Object.values(Factor)) {
    for (let value of FactorsAndValues[factor]) {
      idFactorValueMap.set(id.toString(), { factor, value });
      // factorValueIdMap.set({ factor, value }, id.toString());
      id++;
    }
  }
}

// // Commonly used functions
// export function getEntriesBySymptom(symptom: Symptom, allEntries: Entry[]) {
//   return allEntries.filter((entry) => entry.symptom === symptom);
// }

// function countFactorValues(entries: Entry[]) {
//   var factorValueCounts: Map<string, number> = new Map();

//   for (let entry of entries) {
//     for (let fv of entry.entryFactorValues) {
//       const id = factorValueIdMap.get(fv);
//       if (!id) return null;
//       const incrementCount = (factorValueCounts.get(id) || 0) + 1;
//       factorValueCounts.set(id, incrementCount);
//     }
//   }

//   return factorValueCounts;
// }

// export function getCommonFactorValuesBySymptom(
//   symptom: Symptom,
//   allEntries: Entry[]
// ) {
//   const factorValueCounts = countFactorValues(
//     getEntriesBySymptom(symptom, allEntries)
//   );

//   // console.log("factor Value counts " + factorValueCounts?.keys.length);

//   if (!factorValueCounts) return null;

//   const sorted = [...factorValueCounts.entries()].sort((a, b) => a[1] - b[1]);
//   const top = sorted.slice(0, MAX_FACTORVALUES);

//   const result = top.map(([id, count]) => {
//     const fv = idFactorValueMap.get(id);
//     if (!fv) return null;
//     return { fv, count };
//   });
//   return result;
//   // get the top 5 counts' indeces.
//   // for each index, get the fv in factorValuePairs[index]
//   // return those 5 fvs.
// }
