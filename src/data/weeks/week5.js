// Week 5 - Launch (Updated with Enhanced BCF Content)
// Retrofitted Prompts with Drive Save + Checkpoints (FP as Final Console)

export const week5 = {
  id: 'w5',
  label: 'Week 5',
  title: 'Week 5 — Launch',
  subtitle: 'Retrofitted Prompts with Drive Save + Checkpoints ([Founderpath](https://founderpath.com) as Final Console)',
  estimatedTime: '150 min',
  difficulty: 'Advanced',
  sections: [
    {
      id: 'w5-move1',
      title: 'Move 1 — Story Compression',
      hint: 'Synthesis',
      content: `Using your Strategy Seal + chant, compress into a one-line story and generate hooks for launch.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "One-line story + 10 hooks",
          prompt: `Using my Strategy Seal + chant, compress into:
"We [verb] [audience] so they can [outcome]."
Return one line only.

Then → Generate 10 hooks (≤90 chars) each with 2 hashtags.
Return as a simple list.

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc**.`
        }
      ]
    },
    {
      id: 'w5-move2',
      title: 'Move 2 — Compile BCF (Executables Only)',
      hint: 'Assets',
      content: `Generate 5 executable assets for your Brand Constellation Files.

**Important:** Copy outputs directly into BCF doc (no edits).`,
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

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc**.`
        },
        {
          title: "Prompt F — Consolidated BCF Package",
          prompt: `Combine all five Brand Constellation Files into one unified package.

Artifacts to include:
- Visual_DNA.json
- Voice_Engine.json
- Name_Stack.csv
- Hook_Arsenal.json
- Platform_Remix_Rules.json

Return them in a clean copy-paste format.

✅ Review these results. Edit if needed. If approved, **save the full package into your Google Drive doc**.`
        },
        {
          title: "Prompt G — Full Brand Constellation File",
          prompt: `Generate a complete Brand Constellation File in JSON format, modeled after a professional schema. Include:
- meta {owner, version, created_date, updated_date}
- brand_basics {name, tagline, mission, audience}
- visual_dna {colors, typefaces, textures, shapes, symbols, image_prompt_modifiers}
- voice_engine {persona_prompt, tone_adjectives, rhythm_rules, banned_words, formality_score}
- name_stack {category, name, notes}
- hook_arsenal {awareness, launch, nurture}
- platform_remix_rules {instagram, linkedin, youtube, tiktok}
- myth_maker, product_as_artifact, business_mirror, enemy_framer (skeleton fields if not filled)
- governance {changelog, contributors}

✅ Review these results. Edit if needed. If approved, **save the full JSON file into your Google Drive doc**. This becomes your single source of truth.`
        }
      ]
    },
    {
      id: 'w5-move3',
      title: 'Move 3 — Draft 5 Posts',
      hint: 'Content',
      content: `Create platform-specific posts for IG, LinkedIn, YouTube Community, TikTok, and 1 wildcard.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "5 Cross-platform posts",
          prompt: `Create platform-specific posts:
- IG, LinkedIn, YouTube Community, TikTok, 1 wildcard
- Each: hook + caption (120-180 chars) + 3 hashtags + image_prompt aligned to Visual_DNA

✅ Review these results. Edit if needed. If approved, **save them to your Google Drive doc**.`
        }
      ]
    },
    {
      id: 'w5-move4',
      title: 'Move 4 — Founderpath Console Pass',
      hint: 'Integration',
      content: `Export your full Google Drive doc and process through [Founderpath](https://founderpath.com) for business-ready refinement.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Founderpath Processing",
          prompt: `Export your full Google Drive doc (with Moves 1–3 included) as a single file.

Upload that file into Founderpath with the following prompt:

"This is my Brand Constellation File, Deck Outline, and Draft Posts. Please refine these into business-ready slides, evaluate and rewrite posts (mark Ready or Rewrite), and suggest one additional launch asset (press release, founder note, or investor one-pager)."

✅ Once FP delivers results: Review them. Edit if needed. Save back into your Drive doc.`
        }
      ]
    },
    {
      id: 'w5-move5',
      title: 'Move 5 — Gamma Deck Build',
      hint: 'Presentation',
      content: `Take FP-refined outputs and build your 15-slide Constellation Deck in Gamma.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Constellation Deck Creation",
          prompt: `Take FP-refined outputs and feed them into Gamma to build your 15-slide Constellation Deck.

Slides to include:
- Intro + recap
- Guide vs. System
- Constellation File overview (executables only)
- Moves 1–4 outputs
- Closing: next steps + growth cycles

✅ Review the deck. Edit in Gamma as needed. Save final version to your Drive doc.`
        }
      ]
    },
    {
      id: 'w5-move6',
      title: 'Move 6 — (Optional) Deepsite Quick Page',
      hint: 'Website',
      content: `Optional: Spin up a quick landing page aligned to your BCF using Deepsite.`,
      hasPrompts: false,
      copyablePrompts: [
        {
          title: "Landing Page Creation",
          prompt: `Optional: Spin up a quick landing page aligned to your BCF. Take the entire file and paste it into Deepsite.

Build an award-winning website with high-end cinematic level polish (no corny visuals, tacky effects) with the following elements:
- Hero H1 (≤7 words)
- Subhead (≤18 words)
- 3 short benefits (≤6 words each)
- CTA (≤3 words)
- Section titles for About / Offer / Proof

✅ Review this draft. Edit if needed. Save to Drive if you want to keep it.`
        }
      ]
    }
  ]
};
