# Objects

User: (ignored for now)

- id
- name

Symptom:

- id
- name
- icon

Factor:

- id
- name
- icon

SymptomEntry:

- id
- symptom: Symptom
- timestamp: timestamp

EntryFactorValue

- (id)
- SymptomEntry.id
- FactorValuePair.id

<!--
- factorValues: [
  {factor: "factor1", value: "value1"},
  {factor: "factor5", value: "value2"},
  {factor: "factor5", value: "value3"},
  ]
-->

FactorValuePair:

- id
- factor: Factor
- value: string

# Analysis

- For a symptom, what are the most common factor values?
  (The results could first presented as high-level "factor" impact, then broken down into the exact factor-value)
  e.g. Does drinking not enough water cause headaches?
  Query: Select entry where symptom=symptom; then count all occurences with a factorValue

Total occurences of Symptom s: XXXX
Occurences with factor1-value1: YYY
Occurences with factor5-value2: YYY
Occurences with factor5-value3: YYY

- Plot frequency of symptoms per time period
  scatterplot one dot per symptom vs time period (week, month, year)
  x axis: date
  y axis: time of date (hour)

- Histogram: Which time of the day does a symptom happen? Which day of the week?
