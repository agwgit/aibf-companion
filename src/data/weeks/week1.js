// Week 1 - Voice (Updated with Engaging Content + Checklist)
// Retrofitted Prompts with Drive Save + Checkpoints

export const week1 = {
  id: 'w1',
  label: 'Week 1',
  title: 'Week 1 — Voice',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints',
  estimatedTime: '90 min',
  difficulty: 'Beginner',
  sections: [
    {
      id: 'w1-move1',
      title: 'Move 1 — Custom Instructions Setup',
      hint: 'Foundation',
      content: `**Why this matters:** GPT will only be as useful as the space you set up for it. This step pins down your dedicated brand workspace. It's like telling a studio assistant what your style is, what you're aiming for, and how they should respond to you.

You're not just "using GPT" — you're onboarding a creative sparring partner.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Foundation Setup",
          prompt: `You are a brand strategist helping me develop my brand voice. I need you to:

1. Create a dedicated workspace for our brand development
2. Remember our conversation history and build on previous insights
3. Ask clarifying questions when you need more context
4. Provide specific, actionable guidance

Let's start by establishing my brand foundation. What's the first thing you need to know about my business?

Here's my core business context:

Business: [Your business description]
Target Audience: [Your ideal customer]
Main Value Proposition: [What you offer and why it matters]
Current Stage: [Startup/Growth/Established]
Industry: [Your industry/niche]

Please acknowledge this context and ask me 3 specific questions that will help you understand my brand voice needs better.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 2.`
        }
      ]
    },
    {
      id: 'w1-move2',
      title: 'Move 2 — Archetype Selection',
      hint: 'Discovery',
      content: `**Why this matters:** Archetypes are shortcuts for human recognition. Choosing the right one helps you borrow familiar emotional DNA, so your brand instantly feels alive and relatable.

Don't treat this as a box-checking exercise. Imagine your brand as a character in a story: How do they act at the table? What do they fight for? What do they never compromise on?`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Archetype Discovery",
          prompt: `If I don't have a complete Brand Scanner, help me create a quick brand foundation:

Based on my business context, help me identify my brand archetype:

1. Analyze my business description, values, and target audience
2. Suggest 2-3 brand archetypes that could fit my brand
3. For each archetype, explain:
   - Core personality traits
   - Voice characteristics
   - How it would appeal to my target audience
   - Example brands that use this archetype well
4. Ask me which resonates most and why

Use the 12 classic brand archetypes: Innocent, Explorer, Sage, Hero, Outlaw, Magician, Regular Guy/Girl, Lover, Jester, Caregiver, Creator, Ruler.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 3.`
        }
      ]
    },
    {
      id: 'w1-move3',
      title: 'Move 3 — Stress-Test Letters (Ransom, Runaway, Retirement)',
      hint: 'Voice Test',
      content: `**Why this matters:** The fastest way to see if a voice holds up is to throw it into extremes. Can your brand sound urgent? Vulnerable? Grateful? These "letters" test your range.

Don't overthink — these are drafts. But notice: where does your voice stay strong? Where does it wobble or slip into cliché? Those are clues about where to refine.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Ransom Letter Challenge",
          prompt: `Write a "ransom letter" from my brand - a message where I'm demanding something important from my audience, but in my authentic brand voice.

Scenario: I'm "holding hostage" a valuable piece of content, service, or insight that my audience desperately wants. Write a playful but firm message demanding they take a specific action to "get it back."

Requirements:
- Stay true to my brand archetype and voice
- Make it engaging and slightly provocative
- Include a clear call-to-action
- Show personality while maintaining professionalism
- 150-200 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Runaway Letter.`
        },
        {
          title: "Runaway Letter Challenge",
          prompt: `Write a "runaway letter" from my brand - a message where I'm explaining why I'm leaving/taking a break, but in my authentic brand voice.

Scenario: I need to communicate a temporary absence, service pause, or major change to my audience. Write a message that explains the situation while maintaining my brand personality.

Requirements:
- Stay true to my brand archetype and voice
- Be honest but maintain positive energy
- Address potential concerns proactively
- Include what happens next
- Show vulnerability while maintaining authority
- 150-200 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Retirement Letter.`
        },
        {
          title: "Retirement Letter Challenge",
          prompt: `Write a "retirement letter" from my brand - a final message to my audience, but in my authentic brand voice.

Scenario: I'm announcing the end of my business/service and saying goodbye to my community. Write a heartfelt farewell message that captures my brand's essence one last time.

Requirements:
- Stay true to my brand archetype and voice
- Express gratitude and reflection
- Share the impact we've made together
- Maintain my brand's emotional tone
- End with a memorable final thought
- 200-250 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w1-move4',
      title: 'Move 4 — Voice Matrix + Sample Post',
      hint: 'Framework',
      content: `**Why this matters:** This is where theory becomes usable. The Voice Matrix is your rulebook: tone, rhythm, dos/don'ts, modulation across platforms. The sample post is your first proof-of-life.

When you can hand this matrix to someone else and they can write like you, you've succeeded. That's the test.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Complete Voice Matrix",
          prompt: `Create a comprehensive voice matrix for my brand:

Voice Characteristics:
1. Tone: [Friendly/Professional/Casual/Authoritative] - explain why
2. Personality: [3-5 key personality traits]
3. Language Style: [Simple/Complex/Technical/Conversational]
4. Emotional Range: [What emotions does my brand express and avoid?]

Do's and Don'ts:
- 5 things my brand voice ALWAYS does
- 5 things my brand voice NEVER does
- Specific words/phrases to use regularly
- Words/phrases to avoid completely

Voice Modulation:
- How does the voice change for different audiences?
- How does it adapt for different content types?
- What stays consistent across all communications?

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Sample Post.`
        },
        {
          title: "Sample Social Post",
          prompt: `Using my established brand voice, write a sample social media post that demonstrates my voice in action:

Requirements:
- Choose a relevant topic for my industry/audience
- Write for your preferred platform (Instagram, LinkedIn, Twitter, etc.)
- Include appropriate hashtags (3-5)
- Show personality while providing value
- Include a clear call-to-action
- 150-280 characters depending on platform

This post should be something I could actually publish and feel proud of - it's my voice "proof-of-life."

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context.`
        }
      ]
    },
    {
      id: 'w1-checklist',
      title: '✅ Week 1 Completion Checklist',
      hint: 'Completion',
      content: `By the end of Week 1, you should have:

• **Custom GPT instructions saved and pinned**
• **1–2 brand archetypes chosen (with reasoning)**
• **Drafts of the Ransom, Runaway, and Retirement letters**
• **A working Voice Matrix and one sample social post**

Take a moment to review your work. Does your brand voice feel authentic and distinctive? Can you imagine using this voice consistently across all your communications? If yes, you're ready for Week 2!`,
      hasPrompts: false,
      copyablePrompts: []
    }
  ]
};
