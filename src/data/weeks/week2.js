// Week 2 - Product (Updated with Engaging Content + Checklist)
// Retrofitted Prompts with Drive Save + Checkpoints

export const week2 = {
  id: 'w2',
  label: 'Week 2',
  title: 'Week 2 — Product',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints',
  estimatedTime: '120 min',
  difficulty: 'Intermediate',
  introduction: `Now that your voice is set, it's time to define how your **product or service actually lives in the world.** This week isn't about features; it's about loops, trade-offs, and positioning. You're drawing the map of how customers discover, use, and come back to you — and how you hold your ground against competitors.

Think of this week as sharpening the edges of your brand tool. If Week 1 gave you a voice, Week 2 makes sure what you're saying has teeth.`,
  sections: [
    {
      id: 'w2-move1',
      title: 'Move 1 — Product/Service Loop',
      hint: 'Mapping',
      content: `**Why this matters:** Every product is a loop. Customers come in, experience value, and either leave or stay. Your loop shows what keeps them returning — or where they might fall off.

Imagine watching your customer like a film character: What triggers them to enter? What makes them stick around? This loop is their plotline with your brand.`,
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
      title: 'Move 2 — Product Loop Diagram (Mermaid.js)',
      hint: 'Visualization',
      content: `**Why this matters:** A loop in words is abstract. A loop in a diagram makes it real. Using Mermaid.js forces clarity: no hand-waving, just nodes and arrows.

If you can't diagram your product, it isn't clear enough yet.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Product Flow Diagram",
          prompt: `Convert my product loop into a simple Mermaid.js diagram:

Using my bullet points from the previous exercise, create a flowchart that shows:
- Customer entry point
- Key decision points
- Value delivery moments
- Retention/return loops

Use Mermaid.js syntax with clear node labels and directional arrows. Keep it simple but comprehensive.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 3.`
        }
      ]
    },
    {
      id: 'w2-move3',
      title: 'Move 3 — One-Line Narration',
      hint: 'Synthesis',
      content: `**Why this matters:** Investors, partners, and customers rarely ask for your 30-slide deck. They ask: *"What do you do?"* Your one-liner should capture the transformation you create in a way that sticks.

Think movie trailer voiceover, not a Wikipedia entry.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand One-Liner",
          prompt: `Create a compelling one-line narration of what my brand does:

Based on my product loop and customer journey, write a single sentence that captures:
- Who I serve
- What transformation I create
- Why it matters

Make it memorable, clear, and in my brand voice. This should be something I can say at a networking event or use as a tagline.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w2-move4',
      title: 'Move 4 — Trade-Offs',
      hint: 'Positioning',
      content: `**Why this matters:** A strong position requires sacrifice. You can't be everything to everyone. This step names your forks in the road — what you chose, what you gave up, and why that makes you stronger.

Trade-offs are what separate brands from bland businesses.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategic Trade-Offs",
          prompt: `Identify 2-3 key trade-offs that define my brand position:

For each trade-off, explain:
1. What I chose to prioritize
2. What I chose to sacrifice or de-emphasize
3. Why this makes my brand stronger/more distinctive
4. How this affects my target customer

Examples: Speed vs. Quality, Broad Appeal vs. Niche Focus, Premium vs. Accessible

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 5.`
        }
      ]
    },
    {
      id: 'w2-move5',
      title: 'Move 5 — Competitor Identification',
      hint: 'Landscape',
      content: `**Why this matters:** You're not building in a vacuum. You need to know the neighbor on your block, the store across town, and the giant chain that owns half the city.

Direct, indirect, and aspirational competitors give you three mirrors — where you are, what else is possible, and who you're chasing.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Landscape",
          prompt: `Identify my competitive landscape across three categories:

**Direct Competitors** (3-5):
- Companies offering similar solutions to the same customers
- Include company name, brief description, key strength

**Indirect Competitors** (3-5):
- Different solutions solving the same customer problem
- Include what they do differently and why customers might choose them

**Aspirational Competitors** (2-3):
- Brands I admire or want to emulate (can be from different industries)
- What makes them inspiring and what I can learn from them

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 6.`
        }
      ]
    },
    {
      id: 'w2-move6',
      title: 'Move 6 — Competitor Comparison Table',
      hint: 'Analysis',
      content: `**Why this matters:** Listing competitors is easy. Comparing yourself side by side makes the gaps obvious. This is where you stop bluffing and see what you're really up against.

The goal isn't to look perfect. It's to be honest and then decide where you'll win.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Comparison Grid",
          prompt: `Create a comparison table with my top 5 direct competitors:

Include these columns:
- Company Name
- Target Customer
- Key Features/Services
- Pricing Model
- Main Strength
- Main Weakness
- Market Position

Rate each (including myself) on key factors like:
- Price (1-5 scale)
- Quality (1-5 scale)
- Innovation (1-5 scale)
- Customer Service (1-5 scale)
- Brand Recognition (1-5 scale)

Be brutally honest about where I stand.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 7.`
        }
      ]
    },
    {
      id: 'w2-move7',
      title: 'Move 7 — Distinctiveness Lines',
      hint: 'Differentiation',
      content: `**Why this matters:** Once you see the grid, you need to answer the "so what?" These lines are your brand flex in each category. Short, sharp, and in your voice — so anyone can tell how you stand apart.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Competitive Distinctiveness",
          prompt: `Based on my competitive analysis, write distinctiveness lines for each key category:

For each area where I compete, write a short, punchy line (10-15 words max) that explains how I'm different. Use my brand voice.

Categories to cover:
- Product/Service Quality
- Customer Experience
- Pricing/Value
- Innovation/Features
- Brand Personality
- Target Focus

Example format: "While others [do X], we [do Y] because [reason]."

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 8.`
        }
      ]
    },
    {
      id: 'w2-move8',
      title: 'Move 8 — Two-Line Honest Assessment',
      hint: 'Reality Check',
      content: `**Why this matters:** Brutal honesty now saves you embarrassment later. Strength + gap. One line each. Clear-eyed enough to admit where you're behind, strong enough to name where you lead.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Honest Competitive Assessment",
          prompt: `Write a brutally honest two-line assessment of my competitive position:

Line 1: My biggest competitive strength (what I do better than anyone)
Line 2: My biggest competitive gap (where I'm clearly behind)

Be specific and honest. This is for internal strategy, not marketing copy.

Example:
"We deliver faster implementation than any competitor, with setup in days not months."
"Our brand recognition is practically zero compared to established players in the space."

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 9.`
        }
      ]
    },
    {
      id: 'w2-move9',
      title: 'Move 9 — Reality Check Memo',
      hint: 'Strategic Summary',
      content: `**Why this matters:** Time to zoom out. This memo is your market mirror. Three paragraphs: where you stand, what the market looks like, what it means.

Treat this like briefing your cofounder — blunt, clean, no fluff.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Market Reality Memo",
          prompt: `Write a 3-paragraph reality check memo about my competitive position:

**Paragraph 1: Current Position**
- Where I stand in the market today
- My key strengths and weaknesses vs. competitors
- Current market share/recognition level

**Paragraph 2: Market Dynamics**
- How the competitive landscape is evolving
- Key trends affecting my space
- Threats and opportunities emerging

**Paragraph 3: Strategic Implications**
- What this means for my strategy
- Where I should focus to win
- What I need to change or double down on

Write in a direct, strategic tone. This is internal analysis, not marketing material.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 10.`
        }
      ]
    },
    {
      id: 'w2-move10',
      title: 'Move 10 — Punchy Headlines',
      hint: 'Synthesis',
      content: `**Why this matters:** Memos live in docs. Headlines live in memory. Turning your reality check into five sharp lines makes your insights shareable, repeatable, and sticky inside your org.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategic Headlines",
          prompt: `Convert my reality check memo into 5 punchy headlines:

Transform the key insights from my memo into memorable, tweet-length headlines that capture:
1. My current competitive position
2. The biggest market opportunity
3. My main competitive advantage
4. The biggest threat I face
5. My strategic focus going forward

Each headline should be 10-15 words max and pack a punch. Think newspaper headlines or slide titles.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 11.`
        }
      ]
    },
    {
      id: 'w2-move11',
      title: 'Move 11 — Competitive Risk Metaphors',
      hint: 'Risk Assessment',
      content: `**Why this matters:** Metaphors make complex threats instantly clear. "Competing with X is like ___." These aren't jokes — they're shortcuts to understanding your battlefield.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Risk Metaphors",
          prompt: `Create 2 metaphors that capture my biggest competitive risks:

For my top 2 competitive threats, complete this sentence:
"Competing with [Competitor Name] is like ___________."

Make the metaphors vivid and accurate. They should instantly communicate:
- The nature of the challenge
- Why it's difficult
- What strategy might work

Examples:
- "Competing with Amazon is like opening a corner store next to Walmart"
- "Competing with Tesla is like racing a Formula 1 car with a motorcycle"

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 12.`
        }
      ]
    },
    {
      id: 'w2-move12',
      title: 'Move 12 — Strategy Presentation Slides',
      hint: 'Presentation',
      content: `**Why this matters:** You've written it all out. Now you need to show it. This step turns your memo into eight slide headers — the bones of a strategy deck you can flesh out anytime.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategy Deck Outline",
          prompt: `Create 8 slide headers for a competitive strategy presentation:

Based on all my analysis, create compelling slide titles that tell the story of:
1. Market landscape overview
2. Competitive positioning
3. Our key advantages
4. Main challenges/gaps
5. Strategic opportunities
6. Risk mitigation
7. Focus areas
8. Next steps/actions

Each title should be engaging and specific, not generic. Think TED talk slides, not corporate boilerplate.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 13.`
        }
      ]
    },
    {
      id: 'w2-move13',
      title: 'Move 13 — Strategy Seal (Primary)',
      hint: 'Brand Essence',
      content: `**Why this matters:** This is the tattoo on your brand's arm. A five-to-seven-word rallying cry that captures what makes you different. Distinctive enough to repeat. Strong enough to remember.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Primary Strategy Seal",
          prompt: `Create my primary Strategy Seal - a 5-7 word phrase that captures my competitive essence:

Based on everything we've analyzed, distill my unique position into a memorable phrase that:
- Captures what makes me different
- Reflects my key competitive advantage
- Uses my brand voice
- Is repeatable and memorable
- Could work as a rallying cry

Examples of strong seals:
- "Speed without compromise"
- "Enterprise power, startup agility"
- "Where creativity meets data"

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 14.`
        }
      ]
    },
    {
      id: 'w2-move14',
      title: 'Move 14 — Strategy Seal Variations',
      hint: 'Flexibility',
      content: `**Why this matters:** One seal isn't enough. You need to see how it flexes. Bold, approachable, authoritative — same core, different tones.

This shows you control the dial, not the other way around.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategy Seal Variations",
          prompt: `Create 3 variations of my Strategy Seal for different contexts:

Using my primary Strategy Seal as the foundation, create variations that work for:

1. **Bold/Aggressive Version**: For competitive situations, investor pitches
2. **Approachable/Friendly Version**: For customer-facing materials, social media
3. **Authoritative/Professional Version**: For partnerships, B2B contexts

Each should maintain the core meaning while adjusting the tone and energy level.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 15.`
        }
      ]
    },
    {
      id: 'w2-move15',
      title: 'Move 15 — Strategy Seal as Badge',
      hint: 'Visual Identity',
      content: `**Why this matters:** A phrase is invisible until you give it form. ASCII, stamp, ribbon — a lightweight graphic treatment makes your seal something you can literally paste anywhere.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Strategy Seal Badge Design",
          prompt: `Create simple badge/stamp designs for my Strategy Seal:

Design 3 different badge formats using ASCII art or simple text formatting:

1. **Classic Badge**: Circular or shield-like border
2. **Modern Stamp**: Clean, rectangular format
3. **Ribbon Banner**: Flowing banner style

Each should incorporate my Strategy Seal text in a way that's:
- Copy-pasteable as text
- Visually distinctive
- Professional but memorable

Use characters like ═, ║, ╔, ╗, ╚, ╝, ─, │, ┌, ┐, └, ┘ for borders.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 16.`
        }
      ]
    },
    {
      id: 'w2-move16',
      title: 'Move 16 — Icon/Symbol Suggestions',
      hint: 'Visual Symbols',
      content: `**Why this matters:** Simple icons carry weight. Think Nike's swoosh, Twitter's bird, or even an emoji. Choosing potential symbols gives your brand visual anchors that tie back to your Strategy Seal.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Symbol Concepts",
          prompt: `Suggest 5-7 simple icons or symbols that could represent my brand:

Based on my Strategy Seal and competitive position, suggest:
- 3 abstract symbols (geometric shapes, lines, etc.)
- 2 concrete objects (tools, animals, natural elements)
- 2 emoji options that could work as quick brand markers

For each suggestion, explain:
- How it connects to my Strategy Seal
- What it communicates about my brand
- Where it could be used (social media, business cards, etc.)

Keep suggestions simple enough to work at small sizes and in single colors.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context.`
        }
      ]
    },
    {
      id: 'w2-checklist',
      title: '✅ Week 2 Completion Checklist',
      hint: 'Completion',
      content: `By the end of Week 2, you should have:

• **A clear product/service loop and diagram**
• **A one-line brand narration**
• **2–3 named trade-offs that define your stance**
• **A competitor grid with honest comparisons**
• **Distinctiveness lines + strength & gap identified**
• **A reality check memo + 5 punchy headlines**
• **2 risk metaphors + 8 slide headers**
• **A primary Strategy Seal, 3 variations, badge formats, and simple icon ideas**

If you've got all this, you don't just have a product — you have a position. You know how you stand, who you face, and what you refuse to compromise on.

Ready for Week 3 where we'll turn this strategic foundation into a memorable identity!`,
      hasPrompts: false,
      copyablePrompts: []
    }
  ]
};
