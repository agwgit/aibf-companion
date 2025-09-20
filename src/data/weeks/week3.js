// Week 3 - Identity
// Retrofitted Prompts with Drive Save + Checkpoints

export const week3 = {
  id: 'w3',
  label: 'Week 3',
  title: 'Week 3 — Identity',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints',
  estimatedTime: '75 min',
  difficulty: 'Beginner',
  sections: [
    {
      id: 'w3-move1',
      title: 'Move 1 — Generate Names',
      hint: 'Naming',
      content: `Generate names for your products, series, or offers that align with your brand voice and Strategy Seal.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Name Generation",
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

For each name, include a one-line explanation of why it fits my brand.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 2.`
        }
      ]
    },
    {
      id: 'w3-move2',
      title: 'Move 2 — Find Handles',
      hint: 'Digital',
      content: `Find email or domain handles that fit your voice and check availability across platforms.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Handle Discovery",
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
- Professional but personality-driven

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 3.`
        }
      ]
    },
    {
      id: 'w3-move3',
      title: 'Move 3 — Brand Toolkit Audit',
      hint: 'Assessment',
      content: `List your key brand pieces (best + backup) and create a 3-month roadmap for building out your brand toolkit.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Toolkit Assessment",
          prompt: `Help me map my current brand toolkit and identify what I need to develop:

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

Give me a 3-month roadmap for building out my brand toolkit.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w3-move4',
      title: 'Move 4 — Simple Marks',
      hint: 'Symbols',
      content: `Create simple marks (emoji, ASCII, icons) that represent your brand essence and can be used across different contexts.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Symbol Starter Set",
          prompt: `Help me create a symbol starter set for my brand:

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

For each symbol, explain why it connects to my brand and how I could use it.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc**.`
        }
      ]
    }
  ]
};
