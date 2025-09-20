// Complete week content with all copyable prompts from original files

export const weekContent = {
  w0: {
    id: 'w0',
    label: 'Week 0',
    title: 'Week 0 — Origin Point',
    subtitle: 'Self‑serve setup. Mindset • Access • Why',
    estimatedTime: '45 min',
    difficulty: 'Beginner',
    sections: [
      {
        id: 'etiquette',
        title: 'Etiquette & Mindset',
        hint: 'Self‑serve',
        content: "Respect the tool → better prompts = better results. • Treat GPT like a coach, not a vending machine. • Iteration > perfection. Keep a prompt journal.",
        hasPrompts: false,
        copyablePrompts: [
          { title: "✋ if you've had GPT confidently make something up that was wrong", prompt: "✋" },
          { title: "🔄 if you asked GPT to revise one part and it changed something else too", prompt: "🔄" },
          { title: "😤 if you've rage‑quit a GPT chat", prompt: "😤" }
        ]
      },
      {
        id: 'access',
        title: 'Access',
        hint: 'Setup',
        content: "Enable GPT‑5 (upgrade if needed). • Expectation: GPT will be used throughout the course.",
        hasPrompts: false,
        copyablePrompts: [
          { title: "💳 if you're on GPT‑5 (🔒 if not yet)", prompt: "💳" },
          { title: "✅ if you've ever pasted GPT output directly into a real project", prompt: "✅" }
        ]
      },
      {
        id: 'why',
        title: 'Why / Expectations',
        hint: 'Orientation',
        content: "Framework arc: Origin → Voice → Product → Identity → Launch. • Participation: interactive sessions, prompt journaling, sharing progress.",
        hasPrompts: false,
        copyablePrompts: [
          { title: "⚙️ if you've used system prompts or custom instructions", prompt: "⚙️" },
          { title: "🎨 if you've designed in Figma/Canva/Photoshop", prompt: "🎨" },
          { title: "🤖 if you've built an automation in Zapier/Make/Notion", prompt: "🤖" },
          { title: "📐 if you've written or copy‑pasted code", prompt: "📐" },
          { title: "🧩 if you've heard of JSON", prompt: "🧩" }
        ]
      },
      {
        id: 'scanner',
        title: 'Brand Scanner',
        hint: 'Pre‑work',
        content: "Complete your Brand Scanner (if not already). • Debrief: pick 2 surprising and 2 confirming words.",
        hasPrompts: false,
        copyablePrompts: [
          { title: "🔍 if you've taken a brand archetype quiz", prompt: "🔍" },
          { title: "📊 if you've done customer interviews or surveys", prompt: "📊" }
        ]
      }
    ]
  },

  w1: {
    id: 'w1',
    label: 'Week 1',
    title: 'Week 1 — The Letters',
    subtitle: 'Live session. Brand Voice • Prompting as Identity',
    estimatedTime: '90 min',
    difficulty: 'Intermediate',
    sections: [
      {
        id: 'intro-setup',
        title: 'Introductions & Setup',
        hint: 'Instruction',
        content: "Set up your brand voice development workspace and establish your core identity foundation.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Studio Setup Prompt",
            prompt: `You are a brand strategist helping me develop my brand voice. I need you to:

1. Create a dedicated workspace for our brand development
2. Remember our conversation history and build on previous insights
3. Ask clarifying questions when you need more context
4. Provide specific, actionable guidance

Let's start by establishing my brand foundation. What's the first thing you need to know about my business?`
          },
          {
            title: "Context Drop (bind Core)",
            prompt: `Here's my core business context:

Business: [Your business description]
Target Audience: [Your ideal customer]
Main Value Proposition: [What you offer and why it matters]
Current Stage: [Startup/Growth/Established]
Industry: [Your industry/niche]

Please acknowledge this context and ask me 3 specific questions that will help you understand my brand voice needs better.`
          },
          {
            title: "Mini-Scanner (fallback)",
            prompt: `If I don't have a complete Brand Scanner, help me create a quick brand foundation:

1. What are 3 words that best describe my business personality?
2. What's one thing that makes my approach different from competitors?
3. How do I want customers to feel after interacting with my brand?
4. What's my brand's "why" - the deeper purpose behind what I do?

Use my answers to suggest an initial brand voice direction.`
          }
        ]
      },
      {
        id: 'archetypes',
        title: 'Archetypes',
        hint: 'Instruction',
        content: "Explore brand archetypes to define your brand's personality and voice characteristics.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Archetype Explorer (AIBF)",
            prompt: `Based on my business context, help me identify my brand archetype:

1. Analyze my business description, values, and target audience
2. Suggest 2-3 brand archetypes that could fit my brand
3. For each archetype, explain:
   - Core personality traits
   - Voice characteristics
   - How it would appeal to my target audience
   - Example brands that use this archetype well

4. Ask me which resonates most and why

Use the 12 classic brand archetypes: Innocent, Explorer, Sage, Hero, Outlaw, Magician, Regular Guy/Girl, Lover, Jester, Caregiver, Creator, Ruler.`
          },
          {
            title: "Reframe Essence (AIBF objects)",
            prompt: `Now let's define my brand essence using concrete objects and metaphors:

If my brand were:
1. An animal, what would it be and why?
2. A car, what make/model would it be?
3. A person at a party, how would they behave?
4. A piece of clothing, what would it be?
5. A movie genre, which one fits best?

For each answer, explain how this metaphor translates into specific voice and personality traits for my brand communications.`
          },
          {
            title: "Reframe Essence (Hero/Creator/Outlaw)",
            prompt: `Let's explore how my brand could embody different archetypal energies:

**Hero Energy**: How could my brand be the champion that helps customers overcome challenges?
**Creator Energy**: How could my brand inspire innovation and self-expression?
**Outlaw Energy**: How could my brand challenge the status quo and offer a rebellious alternative?

For each energy:
1. What would be my brand's mission/battle cry?
2. How would I communicate differently?
3. What kind of content would I create?
4. Which energy feels most authentic to my business goals?`
          }
        ]
      },
      {
        id: 'three-letters',
        title: 'Three Letters (Voice Stress-Test)',
        hint: 'Instruction',
        content: "Test your brand voice under different emotional scenarios to ensure consistency and authenticity.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Ransom Letter",
            prompt: `Write a "ransom letter" from my brand - a message where I'm demanding something important from my audience, but in my authentic brand voice.

Scenario: I'm "holding hostage" a valuable piece of content, service, or insight that my audience desperately wants. Write a playful but firm message demanding they take a specific action to "get it back."

Requirements:
- Stay true to my brand archetype and voice
- Make it engaging and slightly provocative
- Include a clear call-to-action
- Show personality while maintaining professionalism
- 150-200 words max

This tests how my brand voice handles urgency and direct demands.`
          },
          {
            title: "Runaway Letter",
            prompt: `Write a "runaway letter" from my brand - a message where I'm explaining why I'm leaving/taking a break, but in my authentic brand voice.

Scenario: I need to communicate a temporary absence, service pause, or major change to my audience. Write a message that explains the situation while maintaining my brand personality.

Requirements:
- Stay true to my brand archetype and voice
- Be honest but maintain positive energy
- Address potential concerns proactively
- Include what happens next
- Show vulnerability while maintaining authority
- 150-200 words max

This tests how my brand voice handles difficult conversations and transitions.`
          },
          {
            title: "Retirement Letter",
            prompt: `Write a "retirement letter" from my brand - a final message to my audience, but in my authentic brand voice.

Scenario: I'm announcing the end of my business/service and saying goodbye to my community. Write a heartfelt farewell message that captures my brand's essence one last time.

Requirements:
- Stay true to my brand archetype and voice
- Express gratitude and reflection
- Share the impact we've made together
- Maintain my brand's emotional tone
- End with a memorable final thought
- 200-250 words max

This tests how my brand voice handles legacy, gratitude, and emotional depth.`
          }
        ]
      },
      {
        id: 'voice-calibration',
        title: 'Voice Calibration',
        hint: 'Instruction',
        content: "Create specific voice guidelines and test them across different content formats.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Voice Matrix",
            prompt: `Create a comprehensive voice matrix for my brand:

**Voice Characteristics:**
1. Tone: [Friendly/Professional/Casual/Authoritative] - explain why
2. Personality: [3-5 key personality traits]
3. Language Style: [Simple/Complex/Technical/Conversational]
4. Emotional Range: [What emotions does my brand express and avoid?]

**Do's and Don'ts:**
- 5 things my brand voice ALWAYS does
- 5 things my brand voice NEVER does
- Specific words/phrases to use regularly
- Words/phrases to avoid completely

**Voice Modulation:**
- How does the voice change for different audiences?
- How does it adapt for different content types?
- What stays consistent across all communications?

Make this specific enough that someone else could write in my brand voice using these guidelines.`
          },
          {
            title: "Sample Posts (X + IG)",
            prompt: `Using my established brand voice, write sample social media posts:

**Twitter/X Posts (3 different types):**
1. Educational/tip post (280 chars max)
2. Behind-the-scenes/personal post (280 chars max)  
3. Promotional post for my service/product (280 chars max)

**Instagram Posts (2 different types):**
1. Inspirational/motivational post (caption + suggested image description)
2. Educational carousel post (hook + 3 slide topics + CTA)

**Requirements for all posts:**
- Use my established brand voice consistently
- Include relevant hashtags (3-5 per post)
- Show personality while providing value
- Include appropriate CTAs
- Demonstrate voice flexibility across content types

This helps me see how my brand voice translates to actual social content.`
          }
        ]
      }
    ]
  },

  w5: {
    id: 'w5',
    label: 'Week 5',
    title: 'Week 5 — Second Screen Companion',
    subtitle: 'Clean Copy/Paste',
    estimatedTime: '120 min',
    difficulty: 'Intermediate',
    sections: [
      {
        id: 'w5-move1',
        title: 'Move 1 — Story Compression',
        hint: 'Instruction',
        content: "Run in your ongoing brand thread. If you lack a one‑line story, use the fallback formula provided.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "One‑line story (fallback inside)",
            prompt: `Write a one‑sentence story in my calibrated voice that states what we do and why it matters.
If missing, start with: We [verb] [audience] so they can [outcome]. Return one line only.`
          },
          {
            title: "Hooks (10)",
            prompt: `Using my one‑line story, Strategy Seal, and chant, write 10 hooks (≤90 chars) each with 2 hashtags. Return a simple list.`
          }
        ]
      },
      {
        id: 'w5-move2',
        title: 'Move 2 — Compile BCF (Executables only)',
        hint: 'Instruction',
        content: "Create your Brand Constellation Files - executable JSON and CSV assets for consistent brand application.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Visual DNA → Visual_DNA.json",
            prompt: `Create Visual_DNA.json with: colors{primary,secondary,neutral[]}, typefaces{primary,secondary,fallback}, textures[], shapes[], symbols[], image_prompt_modifiers[]. Return JSON only.`
          },
          {
            title: "Voice Engine → Voice_Engine.json", 
            prompt: `Create Voice_Engine.json with: persona_prompt, tone_adjectives[], rhythm_rules[], banned_words[], formality_score (0–1). Return JSON only.`
          },
          {
            title: "Name Library → Name_Stack.csv",
            prompt: `Create CSV with columns: category,name,notes. Include 8–15 rows across brand, product, series, fan_label, signoff.`
          },
          {
            title: "Hook Library → Hook_Arsenal.json",
            prompt: `Create Hook_Arsenal.json with keys: awareness, launch, nurture. Each value is an array of {text, hashtags[], tone}. 5+ entries each.`
          },
          {
            title: "Platform Adaption → Platform_Remix_Rules.json",
            prompt: `Create Platform_Remix_Rules.json with entries for instagram, linkedin, youtube, tiktok. Fields: pacing, line_length_hint, emoji_policy, CTA_style.`
          }
        ]
      },
      {
        id: 'w5-move3',
        title: 'Move 3 — Constellation Deck (Gamma)',
        hint: 'Instruction',
        content: "Create a comprehensive brand presentation using all your artifacts.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "15‑slide Brand Constellation Outline",
            prompt: `Compose a 15‑slide outline "Brand Constellation" using my artifacts (Voice Matrix, Strategy Seal, Product Diagram, Competitor Grid, Name_Stack.csv, Visual_DNA.json, Hook_Arsenal.json). Return slide titles + 3 bullets each.`
          }
        ]
      },
      {
        id: 'w5-move4',
        title: 'Move 4 — Draft 5 Posts (Cross‑platform)',
        hint: 'Instruction',
        content: "Generate platform-specific content using your brand assets.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "5 Cross‑platform Posts",
            prompt: `Using my one‑line story and Visual_DNA, generate 5 posts for IG, LinkedIn, YouTube Community, TikTok, and 1 wildcard. For each: hook, 120–180 char caption, 3 hashtags, image_prompt aligned to Visual_DNA.`
          }
        ]
      },
      {
        id: 'w5-move5',
        title: 'Move 5 — Schedule (Outside‑AI)',
        hint: 'Manual',
        content: "Use native tools. Proof = 1 screenshot of a scheduled item. • IG/FB: Meta Business Suite → Planner → Create → Schedule. • LinkedIn: Start post → ⋯ → Schedule → confirm. • YouTube Studio: Upload → Visibility: Schedule. • TikTok Web: Upload → Schedule (≈10 days).",
        hasPrompts: false
      },
      {
        id: 'w5-move6',
        title: 'Move 6 — Founderpath (Console)',
        hint: 'Instruction',
        content: "Create a team summary of your Brand Constellation Files.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Team note for FP",
            prompt: `Summarize my BCF in 1 paragraph: brand promise, audience, chant, key visuals, first 3 post themes. One paragraph only.`
          }
        ]
      },
      {
        id: 'w5-move7',
        title: 'Move 7 — (Optional) Deepsite Quick Page',
        hint: 'Optional',
        content: "Generate website copy aligned to your Visual DNA. • Reminder: If you don't have GPT+, copy any prompt into Gemini/Vertex. Save outputs in Drive.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Website Copy Generator",
            prompt: `Generate: hero H1 (≤7 words), subhead (≤18 words), 3 short benefits (≤6 words), CTA (≤3 words), section titles for About/Offer/Proof — aligned to Visual_DNA.`
          }
        ]
      }
    ]
  },
  w2: {
    id: 'w2',
    label: 'Week 2',
    title: 'Week 2 — The Spy',
    subtitle: 'Live session. Product • Market • Positioning as Artifact',
    duration: '90 min',
    difficulty: 'Intermediate',
    sections: [
      {
        id: 'w2-intro',
        title: 'Introductions & Setup',
        hint: 'Instruction',
        content: "Re-ground the cohort: 'The Spy' week = seeing clearly. • Position AI tools (Figma AI, Manus.ai, Gemini/Grok) as competitive intelligence companions. • Provide visual tool options: Primary: Figma AI for diagrams + seals, Fallback: Mermaid.js block or Gamma/Canva chart, Docs/Drive: Journaling, memos, and uploads.",
        hasPrompts: false
      },
      {
        id: 'w2-artifact1',
        title: 'Artifact 1: Product Artifact Diagram',
        hint: 'Instruction',
        content: "Turn your product into a clear artifact diagram. Show how it works, who it serves, and why it matters. Use your brand voice to narrate the loop.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Map the Loop (bullets)",
            prompt: `Help me map my product/service loop in bullet points:

1. What does my customer need/want initially?
2. How do they discover my solution?
3. What's their first interaction with my product/service?
4. What value do they receive immediately?
5. How does this lead to continued engagement?
6. What's the cycle that keeps them coming back?

Create a clear, logical flow that shows the customer journey from need to satisfaction to retention.`
          },
          {
            title: "Redraw as Simple Diagram (Mermaid.js)",
            prompt: `Convert my product loop into a simple Mermaid.js diagram:

Using my bullet points from the previous exercise, create a flowchart that shows:
- Customer entry point
- Key decision points
- Value delivery moments
- Feedback loops
- Retention cycles

Keep it simple - maximum 6-8 nodes. Use clear, descriptive labels. Format as proper Mermaid.js syntax.`
          },
          {
            title: "Brand Narration (single line)",
            prompt: `Create a single-line brand narration of my product loop in my calibrated voice:

Using my product diagram and brand voice, write one compelling sentence (25-35 words) that captures:
- What my product does
- Who it serves
- Why it matters
- The transformation it creates

This should sound like my brand and be memorable enough to use in presentations.`
          },
          {
            title: "Option A/B Fork (trade-offs)",
            prompt: `Identify the key trade-offs in my product positioning:

For my product/service, what are the main either/or decisions I've made?

Format as:
**Option A**: [Description] - Benefits: [list] - Trade-offs: [what we give up]
**Option B**: [Alternative] - Benefits: [list] - Trade-offs: [what we give up]

Include 2-3 major positioning forks that define my competitive stance.`
          }
        ]
      },
      {
        id: 'w2-artifact2',
        title: 'Artifact 2: Competitor Grid',
        hint: 'Instruction',
        content: "Lay your brand side-by-side against 3 rivals. No sugar-coating. Bring your calibrated brand tone to the labels.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Select and Lock Rivals (specificity)",
            prompt: `Help me identify my 3 most relevant competitors:

1. **Direct Competitor**: Who offers the most similar solution to my exact target market?
2. **Indirect Competitor**: Who solves the same problem but with a different approach?
3. **Aspirational Competitor**: Who do I want to compete with as I grow?

For each, provide:
- Company name and brief description
- Why they're a relevant comparison
- What makes them a worthy rival to analyze

Be specific - no generic categories like "all consulting firms."`
          },
          {
            title: "Build the 4-Column Grid (table)",
            prompt: `Create a 4-column competitor comparison table:

| Feature/Aspect | My Brand | [Competitor 1] | [Competitor 2] | [Competitor 3] |
|----------------|----------|----------------|----------------|----------------|
| Core Offering | | | | |
| Target Market | | | | |
| Pricing Model | | | | |
| Key Strength | | | | |
| Main Weakness | | | | |
| Brand Voice | | | | |
| Distribution | | | | |

Fill this out honestly - include where competitors are stronger than me.`
          },
          {
            title: "Distinctiveness Lines (row by row)",
            prompt: `For each row in my competitor grid, write a distinctiveness line in my brand voice:

Go through each aspect (Core Offering, Target Market, Pricing, etc.) and write one sentence that captures how I'm different from my competitors in that area.

Format:
**Core Offering**: "While [competitors do X], we [unique approach]..."
**Target Market**: "Unlike [competitor focus], we specifically serve..."
**Pricing Model**: "Where others [pricing approach], we..."

Keep each line under 25 words and in my authentic brand voice.`
          },
          {
            title: "Strength/Weakness Summary (two lines)",
            prompt: `Write a two-line honest assessment:

**Line 1 - My Competitive Strength**: In one sentence, what's my biggest advantage over these competitors? Be specific and honest.

**Line 2 - My Competitive Gap**: In one sentence, where do I need to improve to better compete? No false modesty, but no self-destruction either.

Each line should be 15-25 words and sound like my brand voice - confident but realistic.`
          }
        ]
      },
      {
        id: 'w2-artifact3',
        title: 'Artifact 3: Reality Check Memo',
        hint: 'Instruction',
        content: "Write an internal spy memo in your brand's voice — clear, direct, no fluff. Imagine briefing your board or your future superfan.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Full Memo (3 paragraphs)",
            prompt: `Write a 3-paragraph internal reality check memo in my brand voice:

**Paragraph 1 - Current Position**: Where we stand in the market right now. What's working, what's not. Be honest about our competitive position.

**Paragraph 2 - Market Reality**: What the competitive landscape actually looks like. Who's winning, who's losing, what trends matter. No wishful thinking.

**Paragraph 3 - Strategic Implications**: Given paragraphs 1 and 2, what does this mean for our next moves? What should we double down on, what should we change?

Write like you're briefing someone who needs the unvarnished truth. Use my brand voice but keep it direct and actionable.`
          },
          {
            title: "Headlines (compression)",
            prompt: `Compress my reality check memo into 5 punchy headlines:

Take the key insights from my 3-paragraph memo and turn them into newspaper-style headlines that capture the essence. Each headline should be 6-10 words and written in my brand voice.

Format:
1. [Current position headline]
2. [Market reality headline]  
3. [Competitive threat headline]
4. [Opportunity headline]
5. [Strategic direction headline]

These should be memorable and shareable internally.`
          },
          {
            title: "Risk Metaphors (2)",
            prompt: `Create 2 metaphors that capture my biggest competitive risks:

**Risk Metaphor 1**: Compare my biggest competitive threat to a vivid, relatable situation. Complete this: "Competing with [competitor] is like..."

**Risk Metaphor 2**: Compare my biggest strategic challenge to another vivid metaphor. Complete this: "Our position in the market is like..."

Make these memorable, accurate, and in my brand voice. They should help people understand complex competitive dynamics quickly.`
          },
          {
            title: "Deck Headers (micro)",
            prompt: `Create 8 slide headers for a competitive strategy presentation:

Turn my reality check memo into presentation-ready slide titles. Each should be 3-6 words, punchy, and capture a key insight.

Format as:
Slide 1: [Title]
Slide 2: [Title]
...
Slide 8: [Title]

These should tell the story of where we are, what we're up against, and where we're going. Use my brand voice but keep them presentation-friendly.`
          }
        ]
      },
      {
        id: 'w2-artifact4',
        title: 'Artifact 4: Strategy Seal',
        hint: 'Instruction',
        content: "Distill your distinction into a 5–7 word mark. This is your spy badge — a stamp you'll reuse in future artifacts.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Extract & Seal (primary)",
            prompt: `Create my primary Strategy Seal - a 5-7 word phrase that captures my competitive distinction:

Based on my competitor analysis and reality check memo, what's the essence of what makes me different? 

Requirements:
- 5-7 words maximum
- Captures my unique competitive position
- Sounds like my brand voice
- Memorable and repeatable
- Could work as a tagline or internal rallying cry

Try 3 different versions, then pick the strongest one as my primary Strategy Seal.`
          },
          {
            title: "Alternates (tone variants)",
            prompt: `Create 3 alternate versions of my Strategy Seal with different tones:

Using my primary Strategy Seal as the base, create variations that emphasize different aspects:

**Version 1 - Confident/Bold**: Make it more assertive and competitive
**Version 2 - Approachable/Friendly**: Make it warmer and more accessible  
**Version 3 - Expert/Authority**: Make it more professional and credible

Each should be 5-7 words and capture the same core distinction but with different emotional energy.`
          },
          {
            title: "Badge Format (ASCII or circle text)",
            prompt: `Format my Strategy Seal as a visual badge:

Take my primary Strategy Seal and create a simple text-based badge format that I can use in documents, emails, and presentations.

Options:
1. ASCII art style border with text inside
2. Simple circle/oval with text
3. Banner/ribbon style
4. Stamp/seal format

Create 2-3 different visual treatments using only text characters. Keep it simple enough to copy/paste but distinctive enough to be memorable.`
          },
          {
            title: "Symbol Suggestion (1–2 icons)",
            prompt: `Suggest 1-2 simple icons/symbols that could represent my Strategy Seal:

Based on my Strategy Seal and competitive positioning, what visual symbols would reinforce my distinction?

For each suggestion:
- Describe the icon/symbol
- Explain why it connects to my Strategy Seal
- How it could be used (logo element, bullet point, etc.)
- Why it would resonate with my target audience

Keep suggestions simple - think emoji-level simplicity, not complex illustrations.`
          }
        ]
      }
    ]
  },
  w3: {
    id: 'w3',
    label: 'Week 3',
    title: 'Week 3 — The Oracle',
    subtitle: 'Identity System • Names • Symbols • Style Type One-Pager',
    duration: '90 min',
    difficulty: 'Intermediate',
    sections: [
      {
        id: 'w3-intro',
        title: 'Introductions & Setup',
        hint: 'Live',
        content: "Moving from voice and positioning into your first Identity System. • Focus on creating verbal and symbolic building blocks — names, symbols, chants, and moodboards. • Goal: Style Type One-Pager, your first true snapshot of a brand system. • Remember: clarity beats cleverness. You're creating tools you'll reuse for campaigns, offers, and identity work.",
        hasPrompts: false
      },
      {
        id: 'w3-move1',
        title: 'Move 1: Name System Board',
        hint: 'Instruction',
        content: "Explore naming as a system. Your brand isn't just one name — it's a constellation of product titles, fan labels, email handles, and content series. These are the hooks that repeat in culture.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Prompt 1 — Name Ideas",
            prompt: `Generate names for your products, series, or offers.

I need names for my [category - product/series/podcast/community/etc.]. 

My brand voice: [insert your brand voice/archetype]
My target audience: [describe who you serve]
My core offering: [what you do/sell]
My Strategy Seal: [your 5-7 word distinction]

Generate 15 name options that:
1. Sound like my brand voice
2. Are memorable and easy to say
3. Could work across different contexts
4. Avoid generic business terms
5. Have personality and energy

For each name, include a one-line explanation of why it fits my brand.`
          },
          {
            title: "Prompt 2 — Handles & Domains",
            prompt: `Find email or domain handles that fit your voice.

Based on my brand names and voice, help me find available handles:

My top 3 name candidates: [list from previous prompt]
My brand voice: [your voice characteristics]
My industry/niche: [what you do]

For each name candidate, suggest:
1. Domain variations (.com, .co, .io, etc.)
2. Social media handle options
3. Email handle possibilities
4. Backup variations if main options are taken

Check for:
- Easy to type and remember
- Sounds like my brand when spoken
- Works across platforms
- Professional but personality-driven`
          }
        ]
      },
      {
        id: 'w3-move2',
        title: 'Move 2: Identity Components Map',
        hint: 'Instruction',
        content: "Every brand has pieces it uses again and again. This move helps you see your toolkit clearly — and decide which pieces to sharpen now.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Prompt 3 — Brand Toolkit Map",
            prompt: `List your key brand pieces (best + backup).

Help me map my current brand toolkit and identify what I need to develop:

**Current Brand Assets I Have:**
- Logo/visual mark: [describe what you have]
- Color palette: [list colors if you have them]
- Fonts/typography: [what you currently use]
- Voice/tone: [your established voice]
- Tagline/slogan: [if you have one]
- Content formats: [what you create regularly]

**Brand Assets I Need:**
- What's missing from my toolkit?
- What needs improvement?
- What should I prioritize next?

**Brand Toolkit Priorities:**
Rank these in order of importance for my business:
1. Visual identity (logo, colors, fonts)
2. Voice and messaging
3. Content templates and formats
4. Social media presence
5. Website and digital presence

Give me a 3-month roadmap for building out my brand toolkit.`
          }
        ]
      },
      {
        id: 'w3-move3',
        title: 'Move 3: Symbol Starter Set',
        hint: 'Instruction',
        content: "Your words should have visual echoes. Start simple: emoji, ASCII, and minimal marks. These are the symbols you'll use in posts, decks, and as shorthand with your audience.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Prompt 4 — Symbol Set",
            prompt: `Create simple marks (emoji, ASCII, icons).

Help me create a symbol starter set for my brand:

My brand voice: [your voice/archetype]
My Strategy Seal: [your 5-7 word distinction]
My core values: [list 3-5 key values]
My industry: [what you do]

Create a symbol set including:

**Emoji Set (5-7 emojis):**
- Primary brand emoji (represents your essence)
- Content category emojis (for different types of posts)
- Call-to-action emojis (for engagement)
- Personality emojis (that match your voice)

**ASCII/Text Symbols (3-5 options):**
- Simple text-based marks I can use anywhere
- Bullet point alternatives
- Section dividers
- Signature elements

**Icon Concepts (3 ideas):**
- Simple visual concepts that could become logos
- Geometric shapes that represent my brand
- Symbolic representations of my work

For each symbol, explain why it connects to my brand and how I could use it.`
          }
        ]
      }
    ]
  },
  w4: {
    id: 'w4',
    label: 'Week 4',
    title: 'Week 4 — The Architect',
    subtitle: 'Visual Identity System • Style Guide • Brand Application',
    duration: '120 min',
    difficulty: 'Advanced',
    sections: [
      {
        id: 'w4-intro',
        title: 'Introductions & Setup',
        hint: 'Live',
        content: "Transform your brand elements into a cohesive visual identity system. • Focus on creating a comprehensive style guide that can be applied consistently. • Goal: Complete Visual Style Guide (VSG) that serves as your brand bible. • Remember: consistency creates recognition. You're building a system that scales.",
        hasPrompts: false
      },
      {
        id: 'w4-move1',
        title: 'Move 1: Visual Style Guide Generator',
        hint: 'Instruction',
        content: "Create your comprehensive Visual Style Guide - the blueprint for all your brand applications.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "VSG Generator",
            prompt: `Create a comprehensive Visual Style Guide for my brand:

**Brand Foundation:**
- Brand name: [your brand name]
- Strategy Seal: [your 5-7 word distinction]
- Brand voice: [your established voice/archetype]
- Target audience: [who you serve]

**Visual Identity System:**

1. **Logo System:**
   - Primary logo concept and description
   - Logo variations (horizontal, stacked, icon-only)
   - Minimum size requirements
   - Clear space guidelines
   - What NOT to do with the logo

2. **Color Palette:**
   - Primary colors (2-3 colors with hex codes)
   - Secondary colors (2-4 supporting colors)
   - Neutral colors (grays, whites, blacks)
   - Color usage guidelines
   - Accessibility considerations

3. **Typography:**
   - Primary typeface (headers/titles)
   - Secondary typeface (body text)
   - Font weights and styles to use
   - Hierarchy guidelines (H1, H2, body, etc.)
   - Web-safe alternatives

4. **Visual Elements:**
   - Photography style guidelines
   - Illustration style (if applicable)
   - Icon style and usage
   - Pattern or texture usage
   - Spacing and layout principles

5. **Brand Applications:**
   - Business card layout
   - Letterhead design
   - Social media templates
   - Website header/footer
   - Email signature

Format this as a professional style guide document.`
          }
        ]
      },
      {
        id: 'w4-move2',
        title: 'Move 2: Visual Vocabulary Development',
        hint: 'Instruction',
        content: "Develop the visual language that will make your brand instantly recognizable across all touchpoints.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Visual Vocabulary",
            prompt: `Develop my brand's visual vocabulary:

Based on my brand voice and Strategy Seal, help me define:

**Visual Personality:**
- If my brand were a design style, what would it be? (minimalist, bold, organic, geometric, etc.)
- What emotions should my visuals evoke?
- What design principles best represent my brand?

**Visual Elements Library:**
- Shapes: What geometric shapes represent my brand?
- Lines: Thick/thin, straight/curved, sharp/soft?
- Textures: Smooth, rough, organic, digital?
- Patterns: Geometric, organic, abstract, literal?

**Photography/Imagery Style:**
- Color treatment: Bright, muted, high contrast, monochrome?
- Composition: Centered, rule of thirds, dynamic angles?
- Subject matter: People, objects, landscapes, abstract?
- Mood: Professional, casual, aspirational, authentic?

**Layout Principles:**
- Spacing: Tight, generous, asymmetrical, grid-based?
- Alignment: Centered, left-aligned, justified?
- Hierarchy: How should information be prioritized visually?

Create a visual vocabulary guide that anyone could use to create on-brand materials.`
          }
        ]
      },
      {
        id: 'w4-move3',
        title: 'Move 3: Brand Application Templates',
        hint: 'Instruction',
        content: "Create practical templates that ensure consistent brand application across all materials and platforms.",
        hasPrompts: false,
        copyablePrompts: [
          {
            title: "Stylescape Build",
            prompt: `Create a stylescape (visual mood board) for my brand:

Using my established brand elements, create a comprehensive stylescape that includes:

**Color Story:**
- Primary color palette with emotional associations
- How colors work together in different combinations
- Color ratios (dominant, accent, neutral percentages)

**Typography Showcase:**
- Font pairings in action
- Hierarchy examples (headlines, subheads, body text)
- Typography personality (modern, classic, playful, serious)

**Visual Style Elements:**
- Logo placement examples
- Icon style and usage
- Photography/imagery style
- Graphic elements and patterns

**Layout Examples:**
- Business card design
- Social media post templates
- Website header concept
- Email newsletter layout
- Presentation slide template

**Brand Personality Visualization:**
- Adjectives that describe the visual style
- Mood and emotional tone
- Target audience alignment
- Competitive differentiation

Format this as a visual reference guide that captures the complete brand aesthetic.`
          }
        ]
      }
    ]
  },

};
