export type QuestionKind = "tfng" | "mcq" | "gap" | "matching";
export type ReadingQuestion = {
  id: number;
  type: QuestionKind;
  group: string;
  instruction: string;
  prompt: string;
  options?: string[];
  answer: string;
  explanation: string;
  evidence: string;
};
export type ReadingTest = {
  id: string;
  title: string;
  topic: string;
  category: "REAL EXAM" | "CAMBRIDGE" | "PRACTICE";
  part: 1 | 2 | 3;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: number;
  passageTitle: string;
  passageSubtitle: string;
  paragraphs: { label: string; text: string }[];
  questions: ReadingQuestion[];
};

const reefParagraphs = [
  { label: "A", text: "It is a widely held belief among those who study animals that larger size conveys some form of advantage throughout life. Body size, weight, growth rate, overall condition, sensory development and escape speed have all been linked to survival. Of these, body size has received the most attention from researchers. One popular theory is the ‘bigger is better’ hypothesis. It predicts that larger body size should increase an individual’s ability to escape from a predator because of characteristics such as overall strength and visual development. Bigger is thought to be better, but is this always the case?" },
  { label: "B", text: "Compared with other habitats, not a great deal is known about predator-prey relationships within tropical reef communities. Our research team came to Lizard Island in the northern Great Barrier Reef to examine this relationship during the early juvenile or larval phase. We wanted to determine whether a predator’s choice is influenced by prey size, weight and swimming speed, since these characteristics vary from individual to individual." },
  { label: "C", text: "Most coral reef fish have a life cycle consisting of an open ocean larval phase followed by a juvenile-to-adult phase near the reef. The transition is marked by rapid changes and a sudden move from the open ocean to coral reef habitats. This point is known as settlement. It is characterised by increased mortality in the first 48 hours, as individuals adapt to life on the reef and to unfamiliar predators." },
  { label: "D", text: "Studying this phase is difficult. On the northern Great Barrier Reef, settlement usually occurs within two or three days of a new moon during warmer summer months. Short windows, underwater work, transporting fish and adapting them to the laboratory make research daunting. We collect larval fish immediately before settlement with purpose-built traps using artificial light. These fish are transported to an aquarium, along with predatory fish, before aquarium and field trials." },
  { label: "E", text: "Initial research shows that being larger at settlement does not always increase survival. Reef predator communities differ considerably over small distances, and different predators prefer different sizes of prey. This is driven by physical characteristics such as mouth size and by behavioural differences. The predator community may therefore determine which individuals survive." },
  { label: "F", text: "Optimal foraging theory predicts that being either very large or very small can help prey escape. A predator should prefer individuals providing the greatest energy return: a trade-off between potential energy intake and the energy required to catch prey. This usually produces a preference for medium-sized prey. Larger juveniles are not necessarily faster and may be easier to catch. Their greater energy return can therefore make them targets." },
];

const reefQuestions: ReadingQuestion[] = [
  { id:1,type:"tfng",group:"Questions 1–4",instruction:"Do the statements agree with the passage?",prompt:"Research to date has concentrated on escape speed in surviving a predator attack.",options:["TRUE","FALSE","NOT GIVEN"],answer:"FALSE",explanation:"The passage says body size received the most attention.",evidence:"Of these, body size has received the most attention from researchers." },
  { id:2,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"According to the ‘bigger is better’ hypothesis, larger animals have better eyesight.",options:["TRUE","FALSE","NOT GIVEN"],answer:"TRUE",explanation:"Visual development is named as an associated advantage.",evidence:"characteristics such as overall strength and visual development" },
  { id:3,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Early-juvenile reef fish share similar characteristics.",options:["TRUE","FALSE","NOT GIVEN"],answer:"FALSE",explanation:"Their characteristics vary between individuals.",evidence:"these characteristics vary from individual to individual" },
  { id:4,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Fully developed reef fish swim more slowly than juveniles.",options:["TRUE","FALSE","NOT GIVEN"],answer:"NOT GIVEN",explanation:"No comparison with fully developed fish is given.",evidence:"Larger juveniles are not necessarily faster." },
  { id:5,type:"gap",group:"Questions 5–7",instruction:"Choose NO MORE THAN TWO WORDS from the passage.",prompt:"The larval stage takes place in the ____.",answer:"open ocean",explanation:"The first phase is explicitly described as ocean-based.",evidence:"an open ocean larval phase" },
  { id:6,type:"gap",group:"Questions 5–7",instruction:"Choose NO MORE THAN TWO WORDS from the passage.",prompt:"The juvenile stage takes place close to the ____.",answer:"reef",explanation:"The later phases occur near the reef.",evidence:"a juvenile-to-adult phase near the reef" },
  { id:7,type:"gap",group:"Questions 5–7",instruction:"Choose NO MORE THAN TWO WORDS from the passage.",prompt:"____ rates are high early in this stage.",answer:"mortality",explanation:"Mortality increases in the first 48 hours.",evidence:"characterised by increased mortality in the first 48 hours" },
  { id:8,type:"gap",group:"Questions 8–13",instruction:"Complete the notes using NO MORE THAN TWO WORDS.",prompt:"Settlement in summer is linked to the ____.",answer:"new moon",explanation:"Settlement occurs shortly after a new moon.",evidence:"within two or three days of a new moon" },
  { id:9,type:"gap",group:"Questions 8–13",instruction:"Complete the notes.",prompt:"It is difficult to transport and settle fish into the ____.",answer:"laboratory",explanation:"Laboratory adaptation is listed as an obstacle.",evidence:"adapting them to the laboratory" },
  { id:10,type:"gap",group:"Questions 8–13",instruction:"Complete the notes.",prompt:"Larval fish are attracted to traps by ____.",answer:"artificial light",explanation:"The traps use artificial light.",evidence:"purpose-built traps using artificial light" },
  { id:11,type:"gap",group:"Questions 8–13",instruction:"Complete the notes.",prompt:"____ are also collected for the trials.",answer:"predatory fish",explanation:"Predators are transported with larvae.",evidence:"along with predatory fish" },
  { id:12,type:"matching",group:"Questions 8–13",instruction:"Choose the paragraph containing the information.",prompt:"A predator’s physical feature that limits prey size.",options:["A","B","C","D","E","F"],answer:"E",explanation:"Paragraph E identifies mouth size.",evidence:"physical characteristics such as mouth size" },
  { id:13,type:"mcq",group:"Questions 8–13",instruction:"Choose the correct answer.",prompt:"Optimal foraging theory predicts a general preference for which prey?",options:["Very small prey","Medium-sized prey","The fastest prey","The largest prey"],answer:"Medium-sized prey",explanation:"The best energy trade-off is usually medium-sized prey.",evidence:"This usually produces a preference for medium-sized prey." },
];

const sleepParagraphs = [
 {label:"A",text:"For much of the twentieth century, sleep was treated as a passive interval. Modern brain imaging overturned this view: while muscles rest, the brain cycles through distinct states and remains metabolically active."},
 {label:"B",text:"During deep sleep, recently formed memories are replayed and stabilised. Experiments show that learners deprived of sleep recall less the next day, even when they spend the same total time studying."},
 {label:"C",text:"Sleep also supports physical repair. Growth hormone is released in pulses, damaged tissues are restored, and immune signalling is recalibrated. Persistent restriction is associated with slower recovery."},
 {label:"D",text:"The ideal amount is not identical for everyone. Age, genetics and recent activity alter need. Most adults function best with seven to nine hours, but quality and regularity can matter as much as duration."},
 {label:"E",text:"Artificial light delays the release of melatonin, the hormone that helps coordinate the body clock. Bright screens close to bedtime can therefore shift sleep later, although their effect varies with brightness and exposure."},
 {label:"F",text:"Researchers increasingly recommend consistent schedules rather than dramatic weekend catch-up. A regular waking time anchors daily rhythms and often improves alertness more reliably than occasional long sleeps."},
];
const sleepQuestions: ReadingQuestion[] = [
 {id:1,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Scientists have always regarded sleep as an active process.",options:["TRUE","FALSE","NOT GIVEN"],answer:"FALSE",explanation:"Earlier researchers treated it as passive.",evidence:"sleep was treated as a passive interval"},
 {id:2,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Deep sleep helps newly formed memories become stable.",options:["TRUE","FALSE","NOT GIVEN"],answer:"TRUE",explanation:"Memory stabilisation occurs during deep sleep.",evidence:"recently formed memories are replayed and stabilised"},
 {id:3,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Every adult requires exactly eight hours of sleep.",options:["TRUE","FALSE","NOT GIVEN"],answer:"FALSE",explanation:"Individual need varies.",evidence:"The ideal amount is not identical for everyone."},
 {id:4,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Blue light is more damaging than all other colours of light.",options:["TRUE","FALSE","NOT GIVEN"],answer:"NOT GIVEN",explanation:"No comparison between colours is made.",evidence:"Artificial light delays the release of melatonin."},
 {id:5,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"During sleep, damaged ____ are restored.",answer:"tissues",explanation:"The passage directly names tissues.",evidence:"damaged tissues are restored"},
 {id:6,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"Most adults do best with seven to ____ hours.",answer:"nine",explanation:"The range ends at nine hours.",evidence:"seven to nine hours"},
 {id:7,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"Artificial light delays the release of ____.",answer:"melatonin",explanation:"Melatonin helps coordinate the body clock.",evidence:"delays the release of melatonin"},
 {id:8,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"A regular ____ time anchors daily rhythms.",answer:"waking",explanation:"Consistency in waking is recommended.",evidence:"A regular waking time anchors daily rhythms"},
 {id:9,type:"matching",group:"Questions 9–11",instruction:"Match each idea to paragraph A–F.",prompt:"Individual differences in sleep requirements",options:["A","B","C","D","E","F"],answer:"D",explanation:"Paragraph D discusses age and genetics.",evidence:"Age, genetics and recent activity alter need."},
 {id:10,type:"matching",group:"Questions 9–11",instruction:"Match each idea to paragraph A–F.",prompt:"A change in the historical view of sleep",options:["A","B","C","D","E","F"],answer:"A",explanation:"Paragraph A contrasts old and new views.",evidence:"Modern brain imaging overturned this view"},
 {id:11,type:"matching",group:"Questions 9–11",instruction:"Match each idea to paragraph A–F.",prompt:"Advice favouring routine over compensation",options:["A","B","C","D","E","F"],answer:"F",explanation:"Paragraph F recommends consistency.",evidence:"consistent schedules rather than dramatic weekend catch-up"},
 {id:12,type:"mcq",group:"Questions 12–13",instruction:"Choose the correct answer.",prompt:"What most directly supports memory according to the passage?",options:["Muscle rest","Deep sleep","Artificial light","Weekend catch-up"],answer:"Deep sleep",explanation:"Memory replay occurs in deep sleep.",evidence:"During deep sleep, recently formed memories are replayed"},
 {id:13,type:"mcq",group:"Questions 12–13",instruction:"Choose the correct answer.",prompt:"What does the writer recommend as a reliable way to improve alertness?",options:["A regular waking time","More screen time","Exactly eight hours","Late weekend sleep"],answer:"A regular waking time",explanation:"A stable waking time anchors rhythms.",evidence:"A regular waking time anchors daily rhythms"},
];

const migrationParagraphs = [
 {label:"A",text:"Arctic terns make one of the longest migrations known, travelling between northern breeding grounds and Antarctic waters. Tracking devices revealed routes far less direct than scientists once assumed."},
 {label:"B",text:"Rather than flying straight south, many birds cross the North Atlantic and pause where cold and warm currents meet. These productive waters provide dense concentrations of fish and allow the birds to rebuild energy reserves."},
 {label:"C",text:"Later, the population divides. Some terns follow the coast of West Africa while others cross toward South America. Both routes eventually converge in southern waters, demonstrating remarkable flexibility within one species."},
 {label:"D",text:"Wind is not simply an obstacle. Birds use prevailing systems to reduce energetic cost, accepting a longer distance in exchange for supportive air currents. The quickest geographical line may therefore be biologically expensive."},
 {label:"E",text:"Miniature loggers transformed research. Earlier estimates depended on scattered sightings, but modern devices record light levels and time, allowing latitude and longitude to be reconstructed after a bird returns."},
 {label:"F",text:"Climate change may alter food-rich boundaries and wind systems. Researchers cannot yet predict whether terns will adjust rapidly enough, but route flexibility offers cautious grounds for optimism."},
];
const migrationQuestions: ReadingQuestion[] = [
 {id:1,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Arctic terns always take the shortest route south.",options:["TRUE","FALSE","NOT GIVEN"],answer:"FALSE",explanation:"Their routes are indirect.",evidence:"routes far less direct than scientists once assumed"},
 {id:2,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Some birds travel near West Africa.",options:["TRUE","FALSE","NOT GIVEN"],answer:"TRUE",explanation:"One population follows that coast.",evidence:"Some terns follow the coast of West Africa"},
 {id:3,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"All tracked birds were the same age.",options:["TRUE","FALSE","NOT GIVEN"],answer:"NOT GIVEN",explanation:"The birds’ ages are not discussed.",evidence:"Tracking devices revealed routes"},
 {id:4,type:"tfng",group:"Questions 1–4",instruction:"Choose TRUE, FALSE, or NOT GIVEN.",prompt:"Supportive winds can make a longer route worthwhile.",options:["TRUE","FALSE","NOT GIVEN"],answer:"TRUE",explanation:"Birds trade distance for lower energy cost.",evidence:"accepting a longer distance in exchange for supportive air currents"},
 {id:5,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"The birds pause where cold and warm ____ meet.",answer:"currents",explanation:"Ocean currents create productive water.",evidence:"where cold and warm currents meet"},
 {id:6,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"The stop lets birds rebuild their ____.",answer:"energy reserves",explanation:"They replenish energy at the stop.",evidence:"rebuild energy reserves"},
 {id:7,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"Modern tracking devices record light and ____.",answer:"time",explanation:"Loggers collect these two measures.",evidence:"record light levels and time"},
 {id:8,type:"gap",group:"Questions 5–8",instruction:"Use NO MORE THAN TWO WORDS.",prompt:"Route flexibility gives grounds for cautious ____.",answer:"optimism",explanation:"The final paragraph uses this word.",evidence:"cautious grounds for optimism"},
 {id:9,type:"matching",group:"Questions 9–11",instruction:"Match the idea to paragraph A–F.",prompt:"Technology improving the quality of evidence",options:["A","B","C","D","E","F"],answer:"E",explanation:"Loggers replaced scattered sightings.",evidence:"Miniature loggers transformed research."},
 {id:10,type:"matching",group:"Questions 9–11",instruction:"Match the idea to paragraph A–F.",prompt:"Two different routes reaching the same region",options:["A","B","C","D","E","F"],answer:"C",explanation:"The divided population later converges.",evidence:"Both routes eventually converge"},
 {id:11,type:"matching",group:"Questions 9–11",instruction:"Match the idea to paragraph A–F.",prompt:"A future uncertainty",options:["A","B","C","D","E","F"],answer:"F",explanation:"Adaptation to climate shifts is uncertain.",evidence:"cannot yet predict whether terns will adjust"},
 {id:12,type:"mcq",group:"Questions 12–13",instruction:"Choose the correct answer.",prompt:"Why do terns stop in the North Atlantic?",options:["To breed","To avoid loggers","To feed","To join other species"],answer:"To feed",explanation:"The waters contain dense fish concentrations.",evidence:"provide dense concentrations of fish"},
 {id:13,type:"mcq",group:"Questions 12–13",instruction:"Choose the correct answer.",prompt:"What did tracking reveal most clearly?",options:["Routes are direct","Routes are flexible","All birds use Africa","Wind is irrelevant"],answer:"Routes are flexible",explanation:"Different indirect routes are used.",evidence:"remarkable flexibility within one species"},
];

const complete: ReadingTest[] = [
 {id:"reef-fish-study",title:"Reef Fish Study",topic:"Size and survival on the Great Barrier Reef",category:"CAMBRIDGE",part:1,difficulty:"Medium",duration:20,passageTitle:"Reef Fish Study",passageSubtitle:"Tom Holmes examines the relationship between size and survival in fish on Australia’s Great Barrier Reef",paragraphs:reefParagraphs,questions:reefQuestions},
 {id:"sleep",title:"SLEEP",topic:"The science of rest and memory",category:"REAL EXAM",part:2,difficulty:"Medium",duration:20,passageTitle:"The Architecture of Sleep",passageSubtitle:"Why rest is one of the brain’s most active states",paragraphs:sleepParagraphs,questions:sleepQuestions},
 {id:"arctic-terns",title:"The Migration Patterns of Arctic Terns",topic:"Tracking the world’s longest migration",category:"CAMBRIDGE",part:3,difficulty:"Hard",duration:20,passageTitle:"The Long Way South",passageSubtitle:"New tracking data changes our understanding of Arctic tern migration",paragraphs:migrationParagraphs,questions:migrationQuestions},
];
const extras = [
 ["real-exam-27","REAL EXAM 27","Contemporary academic reading","REAL EXAM",3,"Hard"],
 ["last-man","The last man who knew everything","A history of scientific polymaths","CAMBRIDGE",2,"Hard"],
 ["barcode","What if everything had a barcode?","Technology and global identification","PRACTICE",1,"Easy"],
 ["creative-problem-solving","Creative Problem-Solving","How groups generate better ideas","PRACTICE",2,"Medium"],
 ["health-professional","Humanities and the Health Professional","The role of arts in medicine","CAMBRIDGE",3,"Hard"],
 ["bird-migration","Bird Migration","Navigation across continents","REAL EXAM",1,"Medium"],
 ["aphantasia","Aphantasia: A life without mental images","The science of the mind’s eye","REAL EXAM",2,"Medium"],
 ["jet-lag","Reducing the effects of jet lag","Body clocks and long-haul travel","CAMBRIDGE",1,"Easy"],
 ["decision-fatigue","Decision Fatigue","The hidden cost of daily choices","PRACTICE",3,"Hard"],
] as const;
export const readingTests: ReadingTest[] = [...complete, ...extras.map(([id,title,topic,category,part,difficulty],index)=>({
 id,title,topic,category,part,difficulty,duration:20,passageTitle:index%2?sleepParagraphs[0].text.slice(0,22):migrationParagraphs[0].text.slice(0,22),passageSubtitle:topic,paragraphs:index%2?sleepParagraphs:migrationParagraphs,questions:(index%2?sleepQuestions:migrationQuestions).map(q=>({...q}))
}))];
export const getReadingTest = (id:string) => readingTests.find(test=>test.id===id);
