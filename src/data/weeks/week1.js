// Week 1 - Voice
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
      title: 'Move 1 — Core Business Context',
      hint: 'Foundation',
      content: `You are a brand strategist helping me develop my brand voice. I need you to create a dedicated workspace for our brand development and remember our conversation history.`,
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
      title: 'Move 2 — Archetype Suggestions',
      hint: 'Discovery',
      content: `If I don't have a complete Brand Scanner, help me create a quick brand foundation by identifying my brand archetype.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Archetype Analysis",
          prompt: `Based on my business context, help me identify my brand archetype:

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
      title: 'Move 3 — Brand Personality Questions',
      hint: 'Exploration',
      content: `Answer key questions about your brand personality to establish voice direction.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Personality Deep Dive",
          prompt: `1. What are 3 words that best describe my business personality?
2. What's one thing that makes my approach different from competitors?
3. How do I want customers to feel after interacting with my brand?
4. What's my brand's "why" - the deeper purpose behind what I do?

Use my answers to suggest an initial brand voice direction.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w1-move4',
      title: 'Move 4 — Brand Essence Metaphors',
      hint: 'Visualization',
      content: `Define your brand essence using concrete objects and metaphors to translate into specific voice traits.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Metaphor Mapping",
          prompt: `If my brand were:
1. An animal, what would it be and why?
2. A car, what make/model would it be?
3. A person at a party, how would they behave?
4. A piece of clothing, what would it be?
5. A movie genre, which one fits best?

For each answer, explain how this metaphor translates into specific voice and personality traits for my brand communications.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 5.`
        }
      ]
    },
    {
      id: 'w1-move5',
      title: 'Move 5 — Archetypal Energies',
      hint: 'Energy',
      content: `Explore how your brand could embody different archetypal energies: Hero, Creator, and Outlaw.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Energy Exploration",
          prompt: `Let's explore how my brand could embody different archetypal energies:

Hero Energy: How could my brand be the champion that helps customers overcome challenges?
Creator Energy: How could my brand inspire innovation and self-expression?
Outlaw Energy: How could my brand challenge the status quo and offer a rebellious alternative?

For each energy:
1. What would be my brand's mission/battle cry?
2. How would I communicate differently?
3. What kind of content would I create?
4. Which energy feels most authentic to my business goals?

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 6.`
        }
      ]
    },
    {
      id: 'w1-move6',
      title: 'Move 6 — Ransom Letter',
      hint: 'Creative',
      content: `Write a playful "ransom letter" from your brand - demanding something important from your audience in your authentic voice.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Ransom Letter Exercise",
          prompt: `Write a "ransom letter" from my brand - a message where I'm demanding something important from my audience, but in my authentic brand voice.

Scenario: I'm "holding hostage" a valuable piece of content, service, or insight that my audience desperately wants. Write a playful but firm message demanding they take a specific action to "get it back."

Requirements:
- Stay true to my brand archetype and voice
- Make it engaging and slightly provocative
- Include a clear call-to-action
- Show personality while maintaining professionalism
- 150-200 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 7.`
        }
      ]
    },
    {
      id: 'w1-move7',
      title: 'Move 7 — Runaway Letter',
      hint: 'Creative',
      content: `Write a "runaway letter" from your brand - explaining why you're leaving/taking a break in your authentic voice.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Runaway Letter Exercise",
          prompt: `Write a "runaway letter" from my brand - a message where I'm explaining why I'm leaving/taking a break, but in my authentic brand voice.

Scenario: I need to communicate a temporary absence, service pause, or major change to my audience. Write a message that explains the situation while maintaining my brand personality.

Requirements:
- Stay true to my brand archetype and voice
- Be honest but maintain positive energy
- Address potential concerns proactively
- Include what happens next
- Show vulnerability while maintaining authority
- 150-200 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 8.`
        }
      ]
    },
    {
      id: 'w1-move8',
      title: 'Move 8 — Retirement Letter',
      hint: 'Creative',
      content: `Write a "retirement letter" from your brand - a final farewell message that captures your brand's essence.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Retirement Letter Exercise",
          prompt: `Write a "retirement letter" from my brand - a final message to my audience, but in my authentic brand voice.

Scenario: I'm announcing the end of my business/service and saying goodbye to my community. Write a heartfelt farewell message that captures my brand's essence one last time.

Requirements:
- Stay true to my brand archetype and voice
- Express gratitude and reflection
- Share the impact we've made together
- Maintain my brand's emotional tone
- End with a memorable final thought
- 200-250 words max

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 9.`
        }
      ]
    },
    {
      id: 'w1-move9',
      title: 'Move 9 — Voice Matrix',
      hint: 'Framework',
      content: `Create a comprehensive voice matrix with characteristics, do's and don'ts, and voice modulation guidelines.`,
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

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc and paste them back here** so GPT has context. If you want to challenge yourself further, consider doing Move 10.`
        }
      ]
    },
    {
      id: 'w1-move10',
      title: 'Move 10 — Sample Social Posts (Extra Credit)',
      hint: 'Application',
      content: `Apply your established brand voice to create sample social media posts across different platforms and content types.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Social Media Voice Application",
          prompt: `Using my established brand voice, write sample social media posts:

Twitter/X Posts (3 different types):
1. Educational/tip post (280 chars max)
2. Behind-the-scenes/personal post (280 chars max)  
3. Promotional post for my service/product (280 chars max)

Instagram Posts (2 different types):
1. Inspirational/motivational post (caption + suggested image description)
2. Educational carousel post (hook + 3 slide topics + CTA)

Requirements for all posts:
- Use my established brand voice consistently
- Include relevant hashtags (3-5 per post)
- Show personality while providing value
- Include appropriate CTAs
- Demonstrate voice flexibility across content types

This helps me see how my brand voice translates to actual social content.

✅ Review these results. Edit if needed. If approved, **add them to your Google Drive doc**.`
        }
      ]
    }
  ]
};
