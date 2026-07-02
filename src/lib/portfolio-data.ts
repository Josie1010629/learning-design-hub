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
    title: "Grade 4 Math Textbook Design",
    type: "Curriculum Design",
    category: "Learning Design",
    short:
      "Designed a full Grade 4 math textbook for U.S. elementary learners, including lesson writing, practice design, assessment alignment, teacher support materials, and visual page layout.",
    role: "Curriculum Designer",
    skills: ["Learner-Centered Design", "Instructional Sequencing", "Practice Design", "Assessment Design"],
    thumb: "curriculum",
    cover: { url: mathTextbookCover.url, fit: "contain" },

    overview:
      "This project focuses on designing a complete Grade 4 math textbook that supports classroom-ready instruction. The textbook is structured to help learners move from conceptual understanding to guided practice, independent problem-solving, and assessment readiness, with built-in formative checks throughout the learning sequence.",
    myRole:
      "I owned the full curriculum design process, from learning objective mapping and content sequencing to lesson writing, worksheet layout, teacher guidance, and assessment alignment.",
    goal:
      "Design a full Grade 4 math textbook that is clear, developmentally appropriate, and classroom-ready, with coherent lesson progression, accessible explanations, meaningful practice, and assessments aligned to the intended cognitive demand.",
    process: [
      "Analyzed Common Core Grade 4 standards and mapped target learning objectives.",
      "Sequenced textbook units and lessons using a concrete-to-representational-to-abstract progression.",
      "Drafted lesson narratives, worked examples, guided practice, independent practice, and reflection prompts.",
      "Designed visual page layouts optimized for Grade 4 learners and early independent readers.",
      "Developed formative checks and end-of-unit assessments aligned to learning objectives and cognitive demand.",
    ],
    decisions: [
      "Used a consistent lesson structure to support predictable classroom use.",
      "Limited visual density per page to reduce cognitive load.",
      "Included worked examples, guided exercises, and tiered practice to scaffold different learner needs.",
      "Designed varied interactive activities to promote active learning, engagement, and skill application.",
      "Built assessment items across multiple levels of cognitive demand.",
    ],
    result: [
      "Produced a Grade 4 math textbook design with student-facing lessons, engaging practice activities, formative checks, and aligned assessments.",
      "The project demonstrates an end-to-end curriculum design artifact suitable for K–12 learning contexts and educational publishing.",
    ],
    snapshot: {
      audience: "Grade 4 U.S. elementary learners and teachers",
      timeline: "Ongoing",
      tools: ["Figma", "Google Docs", "Adobe InDesign"],
      deliverable: "Full textbook design, including student lessons, practice activities, assessments, and answer key",
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
      "A game-based learning experience that embeds multiplication and basic arithmetic practice into the core mechanics of a traditional strategy board game. The project transforms repeated math practice into an engaging play loop supported by AI-assisted scaffolding.",
    myRole:
      "Defined learning goals, mapped game mechanics to math practice, designed scaffolding systems, and iterated through playtests to balance learning value with fun.",
    goal:
      "Transform repetitive arithmetic practice into an engaging, low-anxiety play experience where each move involves a meaningful math decision.",
    process: [
      "Mapped game mechanics to multiplication and basic arithmetic practice goals.",
      "Designed rules that connected player moves to math tasks and strategic decisions.",
      "Explored AI-assisted hints to support pacing, confidence, and age-appropriate cognitive load.",
    ],
    decisions: [
      "Embedded math practice into core gameplay rather than adding it as a separate layer.",
      "Used limited-use scaffolds to support productive struggle without giving away answers.",
      "Designed feedback and support tools to encourage reasoning.",
    ],
    result: [
      "A playable prototype that supported repeated arithmetic practice through meaningful gameplay, with playtests showing stronger engagement and sustained participation compared with traditional practice formats.",
    ],
    snapshot: {
      audience: "Children ages 6–8",
      timeline: "4 weeks",
      tools: ["Figma", "Procreate", "Paper prototyping"],
      deliverable: "Game prototype",
    },
  },

  {
    slug: "feeltogether",
    title: "Feeltogether",
    type: "Social-Emotional Learning",
    category: "Learning Design",
    short:
      "An interactive mobile app that helps parents practice emotion co-regulation through guided scenarios and real-time scaffolding.",
    role: "Learning Designer",
    skills: ["Parent Learning Design", "Behavior Change Design", "Mobile UX", "Scenario-Based Learning"],
    thumb: "mobile",
    cover: { url: feeltogetherCover.url, fit: "contain" },

    overview:
      "A caregiver-facing learning app that helps parents practice emotion co-regulation strategies and build healthier family communication through short learning modules, scenario-based practice, strategy cards, and reflective journaling.",
    myRole:
      "Designed the learning experience, including learning goals, scenario flow, reflection structure, and mobile interaction patterns, while contributing to prototype development, user research, and UX iteration.",
    goal:
      "Help parents move from general parenting advice to practical, repeatable co-regulation strategies they can use before, during, and after everyday emotional moments.",
    process: [
      "Defined learning goals around recognizing triggers, validating children's emotions, applying co-regulation strategies, and building family routines.",
      "Designed a learning flow that connects strategy learning, real emotional events, self-regulation, reflection, pattern recognition, and future strategy use.",
      "Created scenario-based learning activities and strategy cards to make co-regulation concepts easier to practice in realistic parent-child situations.",
      "Conducted user testing with caregivers and revised the experience based on feedback about flexibility, journaling timing, and real-life relevance.",
    ],
    decisions: [
      "Replaced quiz-like learning with scenario-based practice to better fit emotionally sensitive parenting moments.",
      "Separated \"regulate first\" from \"reflect later\" so parents are not asked to journal immediately after stressful events.",
      "Used short strategy cards to translate co-regulation concepts into clear, usable actions.",
      "Designed journaling and progress reports to support pattern recognition and long-term behavior change.",
    ],
    result: [
      "An end-to-end mobile prototype with learning modules, strategy toolbox, event journal, progress report, and profile features. User testing showed that caregivers valued the app most when it helped them reflect on emotional events, choose practical strategies, and connect learning to real family situations.",
    ],
    snapshot: {
      audience: "Parents of children ages 3–8",
      timeline: "6 weeks",
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
      "A wearable-supported intervention system for children with ASD and their caregivers, using biosensor data to detect rising stress, trigger real-time alerts, and guide timely support decisions.",
    myRole:
      "Designed the wearable-supported system concept, system flow, alert logic, data sources, and caregiver-facing mobile touchpoints.",
    goal:
      "Help caregivers identify early signs of emotional escalation and respond more quickly through real-time physiological signals, contextual logs, and personalized recommendations.",
    process: [
      "Researched current wearable and regulation-support tools, identifying a gap in systems that connect real-time physiological monitoring with home-based caregiver support.",
      "Designed a wearable biosensor concept that tracks stress-related signals such as heart rate, HRV, temperature, and breathing patterns.",
      "Mapped the alert workflow from biosignal detection to stress-zone feedback, caregiver notification, contextual logging, and recommendation delivery.",
      "Defined data sources across child biosensor data, caregiver logs, and child outcomes to support more accurate recommendations over time.",
    ],
    decisions: [
      "Used stress zones to translate complex physiological data into clear, actionable feedback for caregivers.",
      "Combined real-time detection with long-term pattern recognition to improve recommendation accuracy over time.",
    ],
    result: [
      "A concept prototype and system model combining wearable biosensor monitoring, caregiver alerts, contextual logging, co-regulation recommendations, feedback loops, and long-term pattern insights.",
    ],
    snapshot: {
      audience: "Autistic children and their caregivers",
      timeline: "4 weeks",
      tools: ["Figma", "Miro", "Whimsical"],
      deliverable: "Service blueprint",
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
    skills: ["Rubric Design", "Mixed Method Research", "App Evaluation", "Decision Support"],
    thumb: "rubric",
    cover: { url: appEvaluationCover.url, fit: "cover" },

    overview:
      "A research-based evaluation tool that helps app developers, educators, and parents assess educational potential of apps for primary-aged children.",
    myRole:
      "Led the research process, including literature review, rubric adaptation, survey design and administration, participant recruitment, data analysis, and final report writing.",
    goal:
      "Translate learning science into a practical evaluation tool that non-experts can use to select and design higher-quality learning apps.",
    process: [
      "Adapted an existing preschool app evaluation tool through comprehensive literature review and market research.",
      "Defined ten evaluation dimensions with behavioral indicators and scoring criteria.",
      "Conducted a two-stage validation study with app developers, educators, and caregivers.",
      "Refined the framework using quantitative ratings and qualitative feedback.",
    ],
    decisions: [
      "Shifted the focus from app features to children's actual learning behaviors.",
      "Used behavioral indicators instead of subjective quality judgments.",
      "Simplified learning science language into parent- and educator-friendly criteria.",
      "Designed the framework to support both app selection and learning-centered product design.",
    ],
    result: [
      "An 8-dimension evaluation framework with validated criteria, scoring guidelines, and decision-support guidance.",
    ],
    snapshot: {
      audience: "Educators, parents, EdTech evaluators",
      timeline: "5 months",
      tools: ["Google Docs", "Notion", "Figma"],
      deliverable: "Published evaluation framework + London International Conference on Inclusive Education poster presentation",
    },
  },

  {
    slug: "cyark-formative-evaluation",
    title: "CyArk",
    type: "Formative Evaluation / Product Research",
    category: "Evaluation & Research",
    short:
      "Formative evaluation of a digital cultural experience platform — identifying UX friction, adoption barriers, and learning challenges.",
    role: "Evaluation Researcher",
    skills: ["Formative Evaluation", "Usability Testing", "Learner Feedback Analysis", "Product Improvement"],
    thumb: "usability",
    cover: { url: cyarkCover.url, fit: "cover" },

    overview:
      "A formative evaluation of CyArk's Tapestry platform that examined how users navigate the digital heritage experiences, with findings translated into actionable recommendations for engagement, usability, and learning.",
    myRole:
      "Planned and conducted usability testing, supported interview design, analyzed qualitative findings, and contributed to the final evaluation report and recommendation deck.",
    goal:
      "Understand how users engage with Tapestry and identify where navigation, feature discovery, pacing, and instructional scaffolding affect meaningful user experiences.",
    process: [
      "Defined evaluation questions around user guidance, feature use, pacing, structure, challenges, and memorable learning moments.",
      "Conducted 30-minute think-aloud usability sessions with educator participants to capture real-time navigation behavior and platform use.",
      "Facilitated post-test interviews to understand the reasoning behind user choices.",
      "Analyzed findings through affinity diagramming, thematic coding, and categorization of repeated user patterns.",
      "Translated findings into prioritized recommendations for improving usability, engagement, and classroom adoption.",
    ],
    decisions: [
      "Focused on observed user behavior rather than only self-reported feedback.",
      "Separated navigation and usability issues from instructional design opportunities to make recommendations easier to act on.",
      "Framed findings constructively to help the product team improve the learning experience.",
    ],
    result: [
      "A formative evaluation report and recommendation deck identifying key strengths and friction points across visual engagement, homepage layout, feature discoverability, navigation, pacing, accessibility, and instructional scaffolding.",
    ],
    snapshot: {
      audience: "Adult informal learners",
      timeline: "6 weeks",
      tools: ["Zoom", "Otter.ai", "Figjam", "Notion"],
      deliverable: "Formative evaluation report",
    },
  },
  {
    slug: "agoda-cx-research",
    title: "Agoda",
    type: "User Experience Research",
    category: "Evaluation & Research",
    short:
      "A customer experience research project that analyzed user-generated content and interview data to identify user booking friction and generate 12 prioritized product recommendations.",
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
