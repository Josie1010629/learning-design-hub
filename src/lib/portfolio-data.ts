import mathTextbookCover from "@/assets/covers/math-textbook.png.asset.json";
import jungleMathCover from "@/assets/covers/jungle-math.png.asset.json";
import feeltogetherCover from "@/assets/covers/feeltogether.png.asset.json";
import copalCover from "@/assets/covers/copal.png.asset.json";
import appEvaluationCover from "@/assets/covers/app-evaluation.png.asset.json";
import cyarkCover from "@/assets/covers/cyark.png.asset.json";
import agodaCover from "@/assets/covers/agoda.png.asset.json";

export type Project = {
  slug: string;
  title: string;
  type: string;
  category: "Learning Design" | "Evaluation & Research";
  short: string;
  role: string;
  skills: string[];
  thumb: ThumbKind;
  cover?: { url: string; fit: "contain" | "cover" };
  // Case study
  overview: string;
  myRole: string;
  goal: string;
  process: string[];
  decisions: string[];
  result: string[];
  snapshot: {
    audience: string;
    timeline: string;
    tools: string[];
    deliverable: string;
  };
};

export type ThumbKind =
  | "curriculum"
  | "game"
  | "mobile"
  | "system"
  | "rubric"
  | "usability"
  | "journey";


export const projects: Project[] = [
  {
    slug: "grade-4-math-curriculum",
    title: "Math Textbook Sample",
    type: "Curriculum Design",
    category: "Learning Design",
    short:
      "A Grade 4 math textbook sample for U.S. elementary learners — lesson writing, practice design, assessment alignment, and visual page layout.",
    role: "Curriculum Designer",
    skills: ["Learner-Centered Design", "Instructional Sequencing", "Practice Design", "Assessment Design"],
    thumb: "curriculum",
    cover: { url: mathTextbookCover.url, fit: "contain" },

    overview:
      "A self-contained curriculum sample demonstrating how a single Grade 4 math unit can move learners from concrete representation to fluent practice, with built-in formative checks.",
    myRole:
      "Owned the full instructional design loop — from learning objectives and content sequencing to worksheet layout and assessment alignment.",
    goal:
      "Design a unit sample that reads as classroom-ready: clear objectives, progressive practice, and assessments that mirror the cognitive demand of stated objectives.",
    process: [
      "Analyzed Common Core Grade 4 standards and mapped target objectives.",
      "Sequenced lessons using concrete-to-abstract progression.",
      "Drafted lesson narratives, worked examples, and tiered practice.",
      "Designed visual page layouts optimized for early independent readers.",
      "Aligned formative checks and end-of-unit assessment to objectives.",
    ],
    decisions: [
      "Used a consistent three-part lesson structure (Explore → Practice → Reflect).",
      "Limited visual density per page to reduce cognitive load.",
      "Built assessment items at multiple DOK levels.",
    ],
    result: [
      "A polished unit sample including teacher notes, student pages, and an aligned assessment blueprint.",
      "Demonstrates an end-to-end instructional design artifact suitable for K–12 publishers.",
    ],
    snapshot: {
      audience: "Grade 4 U.S. elementary learners and teachers",
      timeline: "6 weeks",
      tools: ["Figma", "Google Docs", "Adobe InDesign"],
      deliverable: "Unit sample (student pages, teacher notes, assessment)",
    },
  },
  {
    slug: "jungle-math-chess",
    title: "Jungle Math Chess",
    type: "Game-Based Learning Design",
    category: "Learning Design",
    short:
      "A classic board game redesigned for ages 6–8 into a math learning experience with clear goals, scaffolding, and playful practice.",
    role: "Learning Experience Designer",
    skills: ["Game-Based Practice", "Practice Loop Design", "Feedback Design", "Visual Learning Flow"],
    thumb: "game",
    cover: { url: jungleMathCover.url, fit: "contain" },

    overview:
      "A game-based learning experience that turns familiar Jungle Chess piece hierarchy into structured math practice on comparison, place value, and arithmetic fluency.",
    myRole:
      "Defined learning goals, designed the scaffolding system, and produced the interaction flow connecting moves to math practice.",
    goal:
      "Convert a culturally familiar game into a focused, low-anxiety practice environment where every move embeds a math decision.",
    process: [
      "Mapped Jungle Chess mechanics to Grade 1–2 math standards.",
      "Designed a scaffolding ladder from supported to independent play.",
      "Prototyped move-feedback flows and player-error recovery loops.",
      "Tested with target-age learners and refined visual cues.",
    ],
    decisions: [
      "Tied feedback to the math reasoning, not just win/loss state.",
      "Introduced optional 'helper cards' to reduce frustration without removing challenge.",
    ],
    result: [
      "A playable prototype with rulebook, learner-facing cards, and a teacher facilitation guide.",
    ],
    snapshot: {
      audience: "Children ages 6–8",
      timeline: "4 weeks",
      tools: ["Figma", "Procreate", "Paper prototyping"],
      deliverable: "Game prototype + facilitation guide",
    },
  },
  {
    slug: "feeltogether",
    title: "Feeltogether",
    type: "Social-Emotional Learning / Mobile App Design",
    category: "Learning Design",
    short:
      "An interactive mobile app that helps parents practice emotion co-regulation through guided scenarios and real-time scaffolding.",
    role: "Learning Designer, Interaction Designer",
    skills: ["Parent-Facing Learning Design", "Behavior Change Strategy", "Mobile UX Flow", "Scenario-Based Interaction"],
    thumb: "mobile",
    cover: { url: feeltogetherCover.url, fit: "contain" },

    overview:
      "Feeltogether teaches co-regulation skills inside everyday parent–child moments through micro-scenarios, reflective prompts, and just-in-time guidance.",
    myRole:
      "Designed the learning architecture and scenario flow, and partnered on the visual UX.",
    goal:
      "Move parents from one-off tips toward sustained behavior change in emotionally charged moments.",
    process: [
      "Researched co-regulation literature and parent pain-points.",
      "Mapped behavior-change loops onto mobile interaction patterns.",
      "Wrote branching scenarios with multiple plausible parent responses.",
      "Designed reflective journaling and progress feedback.",
    ],
    decisions: [
      "Replaced quizzes with scenario reflection to fit emotional context.",
      "Surfaced just-in-time prompts instead of long lessons.",
    ],
    result: [
      "End-to-end mobile flow with onboarding, scenario library, reflection journal, and progress view.",
    ],
    snapshot: {
      audience: "Parents of children ages 3–8",
      timeline: "8 weeks",
      tools: ["Figma", "Notion", "Miro"],
      deliverable: "Hi-fi mobile prototype + content library",
    },
  },
  {
    slug: "co-pal",
    title: "Co-Pal",
    type: "Learning Support System Design",
    category: "Learning Design",
    short:
      "A closed-loop support system combining emotion check-ins, personalized guidance, and daily skill-building for autistic children and caregivers.",
    role: "Learning Designer, Systems Designer",
    skills: ["Learner Analysis", "Intervention Design", "System Mapping", "Caregiver Support"],
    thumb: "system",
    cover: { url: copalCover.url, fit: "contain" },

    overview:
      "Co-Pal supports families by linking children's emotion check-ins with caregiver guidance, creating a shared, low-friction skill-building rhythm.",
    myRole:
      "Designed the system architecture, intervention logic, and caregiver-facing learning materials.",
    goal:
      "Reduce caregiver decision fatigue while making everyday interactions developmentally productive.",
    process: [
      "Conducted secondary research on caregiver workflows and child needs.",
      "Mapped a closed-loop system: check-in → guidance → activity → reflection.",
      "Designed intervention modules aligned to common regulation challenges.",
      "Prototyped caregiver dashboard and child-facing micro-interactions.",
    ],
    decisions: [
      "Centered the system around shared rituals, not parent-only tasks.",
      "Used plain-language guidance over clinical terminology.",
    ],
    result: [
      "System map, journey diagrams, and prototype screens for both caregiver and child surfaces.",
    ],
    snapshot: {
      audience: "Autistic children and their caregivers",
      timeline: "10 weeks",
      tools: ["Figma", "Miro", "Whimsical"],
      deliverable: "Service blueprint + prototype screens",
    },
  },
  {
    slug: "app-evaluation-tool",
    title: "App Evaluation Tool",
    type: "Evaluation Framework Design",
    category: "Evaluation & Research",
    short:
      "A research-based evaluation tool assessing the educational potential of touchscreen apps for primary-aged learners.",
    role: "Evaluation Designer, Learning Science Researcher",
    skills: ["Rubric Design", "Learning Science Research", "App Evaluation", "Decision Support"],
    thumb: "rubric",
    cover: { url: appEvaluationCover.url, fit: "cover" },

    overview:
      "A rubric and scoring guide that helps educators and parents assess apps across learning goals, interaction quality, feedback, exploration, social learning, language, adjustability, and design.",
    myRole:
      "Synthesized the research base, defined evaluation dimensions, and authored the scoring rubric and decision guide.",
    goal:
      "Translate learning science into a practical, defensible tool non-experts can use.",
    process: [
      "Reviewed literature on children's app learning and quality indicators.",
      "Defined eight evaluation dimensions with behavioral indicators.",
      "Drafted scoring criteria and weighting recommendations.",
      "Piloted the tool on sample apps and iterated.",
    ],
    decisions: [
      "Used behavioral indicators rather than subjective adjectives.",
      "Built a decision view that summarizes strengths and caveats.",
    ],
    result: [
      "An 8-dimension rubric, scoring guide, and example evaluation reports.",
    ],
    snapshot: {
      audience: "Educators, parents, EdTech evaluators",
      timeline: "6 weeks",
      tools: ["Google Docs", "Notion", "Figma"],
      deliverable: "Evaluation rubric + decision guide",
    },
  },
  {
    slug: "cyark-formative-evaluation",
    title: "CyArk: Formative Evaluation of an Educational Product",
    type: "Formative Evaluation / Product Research",
    category: "Evaluation & Research",
    short:
      "Formative evaluation of a digital cultural experience platform — identifying UX friction, adoption barriers, and learning challenges.",
    role: "Evaluation Researcher, Learning Designer",
    skills: ["Formative Evaluation", "Usability Testing", "Learner Feedback Analysis", "Product Improvement"],
    thumb: "usability",
    cover: { url: cyarkCover.url, fit: "cover" },

    overview:
      "A formative evaluation surfacing usability and instructional issues on CyArk's digital heritage platform, paired with prioritized improvement recommendations.",
    myRole:
      "Planned and ran the evaluation, analyzed findings, and authored the recommendation report.",
    goal:
      "Give the product team a clear, actionable view of where engagement and learning break down.",
    process: [
      "Defined evaluation questions and learner success criteria.",
      "Designed task-based usability sessions and feedback instruments.",
      "Synthesized observations into a friction map.",
      "Prioritized fixes by learning impact and feasibility.",
    ],
    decisions: [
      "Separated UX issues from instructional design issues for cleaner triage.",
      "Anchored recommendations to specific learner moments, not generic heuristics.",
    ],
    result: [
      "Findings report with prioritized recommendations across navigation, content scaffolding, and feature discoverability.",
    ],
    snapshot: {
      audience: "Adult informal learners",
      timeline: "5 weeks",
      tools: ["Zoom", "Otter.ai", "Figjam", "Notion"],
      deliverable: "Formative evaluation report",
    },
  },
  {
    slug: "agoda-cx-research",
    title: "Agoda: Customer Experience Research",
    type: "User Experience Research / Customer Journey Analysis",
    category: "Evaluation & Research",
    short:
      "Analyzed Agoda's booking journey using user-generated content and qualitative data, generating 12 prioritized product recommendations.",
    role: "Customer Experience Researcher",
    skills: ["Customer Experience Research", "Qualitative Analysis", "Journey Mapping", "Insight Synthesis"],
    thumb: "journey",
    cover: { url: agodaCover.url, fit: "contain" },

    overview:
      "An end-to-end CX analysis of Agoda's booking journey — surfacing friction around search, pricing transparency, booking confidence, and service recovery.",
    myRole:
      "Led data collection, qualitative coding, journey mapping, and recommendation synthesis.",
    goal:
      "Translate scattered customer signals into a coherent journey view and prioritized product opportunities.",
    process: [
      "Collected user-generated content across review platforms and forums.",
      "Coded qualitative data and clustered recurring friction themes.",
      "Mapped findings onto an end-to-end booking journey.",
      "Prioritized recommendations by impact and effort.",
    ],
    decisions: [
      "Anchored each insight to a specific journey moment for traceability.",
      "Distinguished one-time fixes from systemic experience gaps.",
    ],
    result: [
      "Journey map, friction inventory, and a deck of 12 prioritized product recommendations.",
    ],
    snapshot: {
      audience: "Agoda booking customers",
      timeline: "4 weeks",
      tools: ["Airtable", "Figjam", "Google Sheets"],
      deliverable: "CX research deck + journey map",
    },
  },
];

export const skillCategories = [
  {
    title: "Instructional Design",
    items: ["Learning objectives", "Content structure", "Scaffolding", "Assessment alignment", "Feedback design"],
  },
  {
    title: "Learning Experience Design",
    items: ["Interactive flows", "Learner journeys", "Engagement strategy", "Game-based learning", "Usability-focused design"],
  },
  {
    title: "AI-Empowered Learning",
    items: ["AI-supported learning experiences", "Adaptive feedback", "Emerging learning technologies", "Human-centered AI use"],
  },
  {
    title: "Research and Evaluation",
    items: ["Learning science research", "Rubric design", "Evaluation tools", "Evidence synthesis", "Decision support"],
  },
];
