// Week 2 - Product
// Retrofitted Prompts with Drive Save + Checkpoints

export const week2 = {
  id: 'w2',
  label: 'Week 2',
  title: 'Week 2 — Product',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints',
  estimatedTime: '120 min',
  difficulty: 'Intermediate',
  sections: [
    {
      id: 'w2-move1',
      title: 'Move 1 — Product/Service Loop (Bullets)',
      hint: 'Mapping',
      content: `Map your product/service loop in bullet points to understand the customer journey from need to satisfaction to retention.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Product Loop Mapping",
          prompt: `Help me map my product/service loop in bullet points:

1. What does my customer need/want initially?
2. How do they discover my solution?
3. What's their first interaction with my product/service?
4. What value do they receive immediately?
5. How does this lead to continued engagement?
6. What's the cycle that keeps them coming back?

Create a clear, logical flow that shows the customer journey from need to satisfaction to retention.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 2.`
        }
      ]
    },
    {
      id: 'w2-move2',
      title: 'Move 2 — Mermaid.js Diagram',
      hint: 'Visualization',
      content: `Convert your product loop into a simple Mermaid.js diagram to visualize the customer flow.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Product Flow Diagram",
          prompt: `Convert my product loop into a simple Mermaid.js diagram:

Using my bullet points from the previous exercise, create a flowchart that shows:
- Customer entry point
- Key decision points
- Value delivery moments
- Feedback loops
- Retention cycles

Keep it simple - maximum 6-8 nodes. Use clear, descriptive labels. Format as proper Mermaid.js syntax.

✅ Review these results. Edit if needed. If approved, **save the code to your Google Drive doc and paste it back here** so GPT has context. Then say: Next, Move 3.`
        }
      ]
    },
    {
      id: 'w2-move3',
      title: 'Move 3 — One-Line Brand Narration',
      hint: 'Synthesis',
      content: `Create a single-line brand narration that captures your product loop in your calibrated voice.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Narration",
          prompt: `Create a single-line brand narration of my product loop in my calibrated voice:

Using my product diagram and brand voice, write one compelling sentence (25-35 words) that captures:
- What my product does
- Who it serves
- Why it matters
- The transformation it creates

This should sound like my brand and be memorable enough to use in presentations.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w2-move4',
      title: 'Move 4 — Trade-offs in Positioning',
      hint: 'Decisions',
      content: `Identify the key trade-offs in your product positioning to clarify your competitive stance.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Positioning Trade-offs",
          prompt: `Identify the key trade-offs in my product positioning:

For my product/service, what are the main either/or decisions I've made?

Format as:
**Option A**: [Description] - Benefits: [list] - Trade-offs: [what we give up]
**Option B**: [Alternative] - Benefits: [list] - Trade-offs: [what we give up]

Include 2-3 major positioning forks that define my competitive stance.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 5.`
        }
      ]
    },
    {
      id: 'w2-move5',
      title: 'Move 5 — Identify Competitors',
      hint: 'Landscape',
      content: `Identify your 3 most relevant competitors across direct, indirect, and aspirational categories.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitor Identification",
          prompt: `Help me identify my 3 most relevant competitors:

1. Direct Competitor
2. Indirect Competitor
3. Aspirational Competitor

For each, provide:
- Company name and brief description
- Why they're a relevant comparison
- What makes them a worthy rival to analyze

Be specific - no generic categories like "all consulting firms."

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 6.`
        }
      ]
    },
    {
      id: 'w2-move6',
      title: 'Move 6 — Competitor Comparison Table',
      hint: 'Analysis',
      content: `Create a comprehensive competitor comparison table to analyze strengths and weaknesses.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Analysis Grid",
          prompt: `Create a 4-column competitor comparison table:

| Feature/Aspect | My Brand | [Competitor 1] | [Competitor 2] | [Competitor 3] |
|----------------|----------|----------------|----------------|----------------|
| Core Offering | | | | |
| Target Market | | | | |
| Key Strength | | | | |
| Main Weakness | | | | |
| Brand Voice | | | | |
| Distribution | | | | |

Fill this out honestly - include where competitors are stronger than me.

✅ Review these results. Edit if needed. If approved, **save the table to your Google Drive doc and paste it back here** so GPT has context. Then say: Next, Move 7.`
        }
      ]
    },
    {
      id: 'w2-move7',
      title: 'Move 7 — Distinctiveness Lines',
      hint: 'Differentiation',
      content: `Write distinctiveness lines for each competitive dimension in your brand voice.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Distinctiveness",
          prompt: `For each row in my competitor grid, write a distinctiveness line in my brand voice.

Format:
**Core Offering**: "While [competitors do X], we [unique approach]..."
**Target Market**: "Unlike [competitor focus], we specifically serve..."
**Pricing Model**: "Where others [pricing approach], we..."

Keep each line under 25 words.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 8.`
        }
      ]
    },
    {
      id: 'w2-move8',
      title: 'Move 8 — Honest Assessment (2 lines)',
      hint: 'Reality Check',
      content: `Write a two-line honest assessment of your competitive position.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Reality Check",
          prompt: `Write a two-line honest assessment:

Line 1 - My Competitive Strength
Line 2 - My Competitive Gap

Each 15-25 words, confident but realistic.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 9.`
        }
      ]
    },
    {
      id: 'w2-move9',
      title: 'Move 9 — Internal Reality Check Memo',
      hint: 'Strategy',
      content: `Write an internal reality check memo that addresses current position, market reality, and strategic implications.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategic Reality Memo",
          prompt: `Write a 3-paragraph internal reality check memo:

Paragraph 1 - Current Position
Paragraph 2 - Market Reality
Paragraph 3 - Strategic Implications

Direct, actionable, in my brand voice.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 10.`
        }
      ]
    },
    {
      id: 'w2-move10',
      title: 'Move 10 — Punchy Headlines',
      hint: 'Synthesis',
      content: `Compress your reality check memo into 5 punchy headlines for quick reference.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategic Headlines",
          prompt: `Compress my reality check memo into 5 punchy headlines:

1. [Current position headline]
2. [Market reality headline]
3. [Competitive threat headline]
4. [Opportunity headline]
5. [Strategic direction headline]

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 11.`
        }
      ]
    },
    {
      id: 'w2-move11',
      title: 'Move 11 — Competitive Risk Metaphors',
      hint: 'Visualization',
      content: `Create metaphors that capture your biggest competitive risks for clearer understanding.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Risk Metaphors",
          prompt: `Create 2 metaphors that capture my biggest competitive risks:

Risk Metaphor 1: "Competing with [competitor] is like..."
Risk Metaphor 2: "Our position in the market is like..."

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 12.`
        }
      ]
    },
    {
      id: 'w2-move12',
      title: 'Move 12 — Strategy Presentation Slide Headers',
      hint: 'Framework',
      content: `Create slide headers for a competitive strategy presentation to organize your insights.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Presentation Structure",
          prompt: `Create 8 slide headers for a competitive strategy presentation.

Slide 1: ...
Slide 8: ...

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 13.`
        }
      ]
    },
    {
      id: 'w2-move13',
      title: 'Move 13 — Primary Strategy Seal',
      hint: 'Distinction',
      content: `Create your primary Strategy Seal - a 5-7 word phrase that captures your competitive distinction.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategy Seal Creation",
          prompt: `Create my primary Strategy Seal - a 5-7 word phrase that captures my competitive distinction.

Try 3 versions, then pick the strongest.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 14.`
        }
      ]
    },
    {
      id: 'w2-move14',
      title: 'Move 14 — Alternate Strategy Seals',
      hint: 'Variations',
      content: `Create alternate versions of your Strategy Seal with different tones for various contexts.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategy Seal Variations",
          prompt: `Create 3 alternate versions of my Strategy Seal with different tones:

1. Confident/Bold
2. Approachable/Friendly
3. Expert/Authority

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 15.`
        }
      ]
    },
    {
      id: 'w2-move15',
      title: 'Move 15 — Strategy Seal Badge',
      hint: 'Visual',
      content: `Format your Strategy Seal as a visual badge for brand applications.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Visual Badge Design",
          prompt: `Format my Strategy Seal as a visual badge.

Options:
1. ASCII art border
2. Simple circle/oval
3. Banner/ribbon
4. Stamp/seal

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 16.`
        }
      ]
    },
    {
      id: 'w2-move16',
      title: 'Move 16 — Strategy Seal Icons',
      hint: 'Symbols',
      content: `Suggest simple icons or symbols that could represent your Strategy Seal visually.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Icon Suggestions",
          prompt: `Suggest 1-2 simple icons/symbols that could represent my Strategy Seal.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc**.`
        }
      ]
    }
  ]
};
