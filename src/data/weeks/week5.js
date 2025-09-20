// Week 5 - Launch (Updated with Engaging Content + 10-Slide Gamma Deck)
// Retrofitted Prompts with Drive Save + Checkpoints (FP as Final Console)

export const week5 = {
  id: 'w5',
  label: 'Week 5',
  title: 'Week 5 — Launch',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints ([Founderpath](https://founderpath.com) as Final Console)',
  estimatedTime: '120 min',
  difficulty: 'Intermediate',
  introduction: `You've given your brand a voice, a product loop, an identity, and a visual system. Now comes the most important test: launching it into the world.

This week is about pulling all the pieces together into a package you can actually use. You'll compress your story, finalize your Brand Constellation File, polish it with Founderpath, and translate it into decks, posts, and even a landing page.

Think of this like the dress rehearsal before opening night. The audience doesn't see the edits, the reworks, or the rough drafts — they only see what you choose to ship.`,
  sections: [
    {
      id: 'w5-move1',
      title: 'Move 1 — Story Compression',
      hint: 'Distillation',
      content: `**Why this matters:** When you launch, you don't get 10 minutes to explain yourself. You get one line. This move distills your brand's promise into a single sentence, then stretches it into 10 hooks you can deploy across platforms.

If your story feels weak here, it won't survive the scroll.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "One-line story + 10 hooks",
          prompt: `Using my Strategy Seal + chant, compress into:
"We [verb] [audience] so they can [outcome]."
Return one line only.

Then → Generate 10 hooks (≤90 chars) each with 2 hashtags.
Return as a simple list.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 2.`
        }
      ]
    },
    {
      id: 'w5-move2',
      title: 'Move 2 — Brand Constellation Files (BCF)',
      hint: 'Executables',
      content: `**Why this matters:** Your BCF is your cartridge — a set of executable files that make your brand portable and repeatable. This is where you turn abstract choices (voice, visuals, hooks) into JSONs, CSVs, and clean docs anyone can plug into.

Piece by piece, then as a consolidated package, then finally as a full Brand Constellation File — your single source of truth.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Prompt A — Visual_DNA.json",
          prompt: `Generate Visual_DNA.json with:
colors{primary,secondary,neutral[]}, typefaces{primary,secondary,fallback}, textures[], shapes[], symbols[], image_prompt_modifiers[].
Return JSON only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt B — Voice_Engine.json", 
          prompt: `Generate Voice_Engine.json with:
persona_prompt, tone_adjectives[], rhythm_rules[], banned_words[], formality_score (0-1).
Return JSON only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt C — Name_Stack.csv",
          prompt: `Generate Name_Stack.csv with columns: category,name,notes.
Include 8-15 rows across brand, product, series, fan_label, signoff.
Return CSV format only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt D — Hook_Arsenal.json",
          prompt: `Generate Hook_Arsenal.json with keys: awareness, launch, nurture.
Each value is an array of {text, hashtags[], tone_hint}.
3-5 entries each.
Return JSON only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt E — Platform_Remix_Rules.json",
          prompt: `Generate Platform_Remix_Rules.json with entries for instagram, linkedin, youtube, tiktok.
Fields: pacing, line_length_hint, emoji_policy, CTA_style.
Return JSON only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt F — Consolidated BCF Package",
          prompt: `Create a consolidated Brand Constellation File package that combines all previous outputs into a single, organized JSON structure:

{
  "brand_metadata": {
    "name": "[brand name]",
    "strategy_seal": "[5-7 word distinction]",
    "one_line_story": "[from Move 1]",
    "created_date": "[today's date]"
  },
  "visual_dna": [Visual_DNA.json content],
  "voice_engine": [Voice_Engine.json content], 
  "name_stack": [Name_Stack.csv converted to JSON array],
  "hook_arsenal": [Hook_Arsenal.json content],
  "platform_remix_rules": [Platform_Remix_Rules.json content]
}

Return the complete consolidated JSON only.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc** and continue to the next prompt.`
        },
        {
          title: "Prompt G — Full Brand Constellation File Schema",
          prompt: `Generate the complete Brand Constellation File with professional schema structure:

Create a comprehensive BCF that includes:
- Executive summary section
- All previous JSON components
- Usage instructions for each component
- Integration guidelines for developers/designers
- Version control metadata
- Export formats (JSON, CSV, markdown)

Format as a professional technical document that could be handed to any agency or developer.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 3.`
        }
      ]
    },
    {
      id: 'w5-move3',
      title: 'Move 3 — Draft 5 Cross-Platform Posts',
      hint: 'Content Creation',
      content: `**Why this matters:** This is where theory touches reality. You'll use your hooks, voice, and visuals to create five raw posts — one for each major platform. They don't need to be perfect yet. They need to be real enough to test.

Think of them as launch dummies — once Founderpath refines them, they're ready to fly.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "5 Cross-platform posts",
          prompt: `Create platform-specific posts using my BCF components:

**Instagram Post:**
- Hook from Hook_Arsenal
- Caption (120-180 chars) in Voice_Engine tone
- 3 hashtags aligned to brand
- Image prompt using Visual_DNA modifiers

**LinkedIn Post:**
- Professional hook variation
- Caption (150-200 chars) with business focus
- 3 professional hashtags
- Image prompt for business context

**YouTube Community Post:**
- Engaging hook for video audience
- Caption (100-150 chars) with video tease
- 3 YouTube-friendly hashtags
- Thumbnail image prompt

**TikTok Post:**
- Trendy hook variation
- Caption (80-120 chars) with energy
- 3 trending hashtags
- Video concept description

**Wildcard Platform (choose one: Twitter/X, Pinterest, or Newsletter):**
- Platform-appropriate hook
- Optimized caption length
- Relevant hashtags
- Visual concept

Each post should feel authentically aligned to my brand voice while respecting platform culture.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 4.`
        }
      ]
    },
    {
      id: 'w5-move4',
      title: 'Move 4 — Founderpath Console Pass',
      hint: 'Polish',
      content: `**Why this matters:** GPT can generate, Gamma can package, but Founderpath is where you reality-check. This is your final console — upload your BCF, draft deck, and draft posts. FP will rewrite, validate, and sharpen them into business-ready assets.

This is the difference between draft energy and executive polish.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Founderpath Refinement Package",
          prompt: `Prepare a comprehensive package for [Founderpath](https://founderpath.com) refinement:

**Upload Package Contents:**
1. Complete Brand Constellation File (from Move 2)
2. Draft posts from all 5 platforms (from Move 3)
3. One-line story + 10 hooks (from Move 1)
4. Strategy Seal and brand voice summary

**Founderpath Instructions:**
"Please review and refine this brand package for executive presentation. Focus on:
- Sharpening the one-line story for maximum impact
- Polishing all social posts for professional deployment
- Validating BCF components for business use
- Creating one additional launch asset (email, press release, or pitch deck bullets)
- Ensuring consistency across all brand touchpoints"

**Expected Deliverables from FP:**
- Refined one-line story
- 5 polished, deployment-ready posts
- Validated and enhanced BCF
- 1 bonus launch asset
- Executive summary of brand positioning

Visit [Founderpath](https://founderpath.com) to upload your package and receive professional refinements.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 5.`
        }
      ]
    },
    {
      id: 'w5-move5',
      title: 'Move 5 — Gamma Deck Build',
      hint: 'Presentation',
      content: `**Why this matters:** Once FP has cleaned your content, Gamma becomes your stage. This move builds your **10-slide Brand Constellation Deck**, streamlined to fit Gamma's free tier but still covering everything an investor, partner, or customer would need.

Gamma doesn't replace FP — it showcases FP's refinements in a visual package you can share.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Brand Constellation Deck Outline (10 Slides)",
          prompt: `Create a 10-slide Brand Constellation Deck outline using my FP-refined content:

**Slide Structure:**
1. **Title Slide** – Brand name + refined one-line story
2. **The Challenge** – Market problem/opportunity
3. **Our Solution** – Strategy Seal + core offering
4. **Brand Voice & Identity** – Personality, tone, colors, fonts, visual DNA
5. **Target Audience** – Who we serve + why they care
6. **Product/Service Loop** – Customer journey visualization
7. **Competitive Position** – Differentiation vs. rivals
8. **Brand Toolkit** – Names, symbols, assets overview
9. **Launch & Content Strategy** – Go-to-market steps + posts
10. **Next Steps & Contact** – Roadmap + CTA

For each slide, provide:
- Slide title
- 3–5 bullet points
- Visual suggestion
- Speaker notes

Format for easy import into Gamma or similar tools.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc and paste them back here** so GPT has context. Then say: Next, Move 6.`
        }
      ]
    },
    {
      id: 'w5-move6',
      title: 'Move 6 — (Optional) Deepsite Quick Page',
      hint: 'Landing Page',
      content: `**Why this matters:** Want to go further? Deepsite can spin up a quick, cinematic landing page aligned to your Visual DNA. This is extra credit — not required — but it can give you a live, public artifact of your brand within hours.

A site that looks award-winning from day one sets the tone for everything else you build.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Deepsite Landing Page Brief",
          prompt: `Create a comprehensive brief for a Deepsite landing page:

**Page Concept:**
- One-page cinematic brand showcase
- Aligned to Visual_DNA color palette and typography
- Showcases refined one-line story prominently
- Professional but personality-driven

**Content Sections:**
1. **Hero Section** - One-line story + compelling visual
2. **About** - Brand essence + Strategy Seal explanation
3. **Approach** - How we work/what makes us different
4. **Portfolio/Examples** - Sample work or case studies
5. **Contact** - Clear CTA + contact information

**Design Requirements:**
- Use Visual_DNA colors as primary palette
- Implement Visual_DNA typography hierarchy
- Include brand symbols/icons from BCF
- Mobile-responsive and fast-loading
- Award-winning aesthetic quality

**Technical Specifications:**
- Single-page scroll experience
- Smooth animations and transitions
- SEO-optimized for brand name
- Social media preview optimization
- Contact form integration

**Content Guidelines:**
- All copy in established brand voice
- Consistent with FP-refined messaging
- Professional but approachable tone
- Clear value proposition throughout

This brief can be used with Deepsite or any premium web development service to create a launch-ready brand presence.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc**.`
        }
      ]
    },
    {
      id: 'w5-checklist',
      title: '✅ Week 5 Completion Checklist',
      hint: 'Completion',
      content: `By the end of Week 5, you should have:

• **A one-line story + 10 hooks**
• **A full Brand Constellation File (executables + consolidated JSON)**
• **Five draft posts across platforms**
• **FP-refined posts, deck bullets, and one extra launch asset**
• **A Gamma deck polished and ready to share**
• **(Optional) A quick Deepsite landing page**

If you've got this, you're not just "building a brand" — you've launched one. You have the cartridge, the deck, and the posts to make it real.

Congratulations! Your brand is now live and ready to make its mark in the world. 🚀`,
      hasPrompts: false,
      copyablePrompts: []
    }
  ]
};
