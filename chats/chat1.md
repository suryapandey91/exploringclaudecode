# Comment UI

_Started 2026-05-25 18:05 UTC_

---

## User



## Assistant

_[tool: update_todos]_

I'll build Surya's portfolio as a single, polished HTML page following the brief — warm cream aesthetic, large display name, single-column flow, ticker, row-list work, and the community angle. I'll create an original design that draws on the aesthetic DNA described (cream bg, serif display name, monospace tags) rather than copying any specific site.

_[tool: copy_starter_component]_

_[tool: read_file]_

Good, I have what I need. Now let me build the portfolio.

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built **Surya Portfolio.html** — a single-page portfolio in the warm-cream / serif-display / single-column aesthetic, with original layout and copy.

What's in it:
- **Hero** — oversized "surya." in Fraunces, three pill descriptors, first-person intro with real numbers ($19.5M, 3,000+, 50+), portrait placeholder, social/resume/email row
- **What I do** — three cards with abstract line-art visuals (Agentic AI · Data Platforms · Strategy & GTM)
- **Impact** — 6-stat grid with the real metrics from the brief
- **Skills ticker** — continuous marquee through 20 capabilities (RAG, Unity Catalog, BCBS 239, etc.)
- **Selected work** — 5 row-list projects (Name | Sub | Category | Year | arrow), with hover slide
- **How I work** — pull-quote philosophy + meta sidebar (currently / previously / industries / certs)
- **For aspiring PMs** — 4 honest, mentor-tone resource links
- **Writing** — 3 article cards
- **Footer CTA** — "Let's build something real." with email + call buttons

**Tweaks panel** (toggle from the toolbar): swap palette (amber / earth / forest / ink / brick), switch display font, change vertical density, toggle ticker and portrait.

Drop in: the real headshot at the portrait block, real LinkedIn/resume/email URLs, real article and case-study URLs. The case-study template from the brief is ready to feed into individual `/work` pages whenever you want them built out.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Updated the nav brand to **Surya Prakash P.**

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Updated the first pill to **Product Manager**.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Updated to **B2B, SaaS, Data, AI/ML & Agentic AI**.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Capitalized to **Surya.**

## User

Act as an executive recruiter who is an experienced head hunter, suggest me the changes which I should be making to make sure they understand what I'm capable of and what I have delivered in the past.

## Assistant

Putting on the headhunter hat. I've placed candidates into Principal/Director PM roles at FAANG, fintech, and AI-native scale-ups. Here's what I'd flag on a 90-second skim of your site — ranked by leverage.

## 1. The hero doesn't tell me your level in 3 seconds
"Surya." + a long descriptor pill is *brand,* not *positioning.* A recruiter screening 80 profiles a day needs to know within one glance:
- **Seniority** (Sr Manager / Director / Principal)
- **Domain** (AI/Data PM, not generalist)
- **Scope** (ARR owned, team size, regulated industries)

**Suggested rewrite under the name:**
> *Principal PM · AI & Data Products · $19.5M+ ARR shipped · Banking, Insurance, Healthcare*

That single line does more recruiter work than the three pills currently do.

## 2. The new pill ("B2B, SaaS, Data, AI/ML & Agentic AI") is a downgrade
I know why you added it — keyword coverage. But it reads as *unfocused* to a hiring manager. Recruiters tag candidates by **one primary specialty + 2 adjacencies.** I'd split it:
- Keep one tight pill: **"Agentic AI & Data Platforms"**
- Move the rest into a hidden ATS-keyword strip near the footer (a `meta` description or a quietly-styled "also fluent in" line)

## 3. No "current role" line at the top
Right now I have to read 80 words to learn you're at EXL. Add a one-line current-role band directly under the descriptor:

> **Currently** → Principal Consultant, Data Products at EXL · Building EXLData.ai

## 4. Make "open to" explicit
"Available for select work" is ambiguous — is that contract? Advisory? FTE? Open to relocation? US/UK eligible? Recruiters disqualify on ambiguity. Add a small "Open to" block:

> **Open to:** Director / Principal PM roles · Remote or Gurgaon · AI / Data product leadership · Advisory engagements

## 5. Add company logos — "Logos" sells
Florence-style minimalism is great for designers; for senior PMs, *brand-name recognition is a shortcut.* A muted horizontal logo strip ("Previously at: Gartner · EXL · UnitedHealth · Tech Mahindra · Ericsson") sits right under the hero and does 30% of the credibility work on its own. Keep it grayscale, no flourish.

## 6. Reframe the mentorship section
"For aspiring PMs" — beautiful for community, but a Director-level recruiter might subconsciously *junior-code* you. Reframe as **leadership signal:**

> **"Building product leaders"** — *I've coached 50+ PMs through transitions into AI and regulated-industry product. India Co-Lead for IPA (~400 associates) at Gartner.*

Same content. Different signal. "Mentoring" reads junior; "developing leaders" + a 400-person community lead reads Director+.

## 7. The work rows are dead ends
Each row has an arrow but no destination. A recruiter who clicks "Research Desk" expects a case study with: *problem, your role, architecture decision, outcome.* Right now they land back on the same page. **Either:**
- Build out 2–3 case studies (you have the template in your brief — even one strong one beats five empty links)
- OR remove the arrows so they don't promise something that isn't there

## 8. Missing: a "How I think" artifact
The "opinions" pull-quote is good but it's one sentence. Senior PM hiring is increasingly *taste-driven.* Add **one piece of writing visibly published** (Medium, Substack, LinkedIn article) above the fold or in the hero. A linked 1,200-word post on "why we built Research Desk as multi-agent instead of single-agent RAG" does more for your candidacy than three more bullet points.

## 9. Numbers section: add context anchors
"$19.5M+ ARR" is strong but a recruiter who doesn't know Gartner's product mix can't size it. Add a sub-line:

> $19.5M+ · *Top-3 revenue product in the Gartner Research portfolio*

Same with "3,000+ MAUs" → "*~25% of Gartner analyst population*". Context multiplies impact.

## 10. Resume download is buried
Right now it's a small pill in the social row. Recruiters want the PDF in **one click from the top of the page.** Promote it to the nav: replace "Let's talk →" with "**Resume / Let's talk**" or add a second persistent button. Track downloads if you can — it's your highest-signal funnel event.

---

### If I could only ask you to do three things:
1. **Rewrite the hero descriptor line** to lead with seniority + scope + domain (#1)
2. **Add a logo strip + current-role band** under the hero (#3, #5)
3. **Build out ONE case study** in full so the work rows aren't promising air (#7)

Want me to implement any of these? I'd suggest starting with #1 + #3 + #5 as a single pass — they're the highest-leverage and don't require new content from you.

## User

Sure go for it

## Assistant

_[tool: str_replace_edit]_

On it. Implementing #1 (hero descriptor), #3 (current-role band), and #5 (logo strip) as one cohesive top-of-page rewrite.

_[tool: done]_

That warning is a false alarm — my page doesn't use a `#root` mount; React only powers the Tweaks panel (which has its own `#tweaks-root`). Page is clean.

Done. Three things changed at the top of the hero:

1. **Positioning line** (replaces pills) — *Principal-track PM · AI & Data Products · $19.5M+ ARR shipped · Banking · Insurance · Healthcare*
2. **"Currently" status band** with a live pulse dot — Principal Consultant, Data Products at **EXL**, building **EXLData.ai**
3. **"Previously at" logo strip** — Gartner · UnitedHealth/Optum · Xebia · Tech Mahindra · Ericsson, rendered as clean serif wordmarks (replace with real logo SVGs when you have them)

Also tightened the kicker to **"Gurgaon, India · Open to senior PM & product leadership roles"** so the "open to" is explicit (#4 from my list — small bonus).

Next highest-leverage move when you're ready: **build out one full case study** (Research Desk would be my pick — biggest scope, freshest, easiest to anonymize). Want me to draft that as a separate page using the case-study template from your brief?

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Renamed to **Data Insights**.

## User

Apply a direct edit. In Surya Portfolio.html: change the text from "Surya." to "Surya P.".
<mentioned-element>
dom:      body › main#top › section.hero.wrap › h1.hero-name.r[2/6]
text:     "Surya."
children: text, span
selector: [data-om-id="eb2fb4fe:23"]
id:       cc-2
</mentioned-element>

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

Updated to **Surya P.**

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Added **Financial Services** between Banking and Insurance.

## User

Apply comment

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

Updated to **BFSI · Research Consulting · Lifesciences**.

## User

Change the layout to this

## Assistant

Quick check before I touch anything — that screenshot is a **product onboarding screen** (looks like a SaaS app called "RegEx AI"), not a portfolio layout. Want me to:

**A.** Redesign the **hero of your portfolio** as a split screen — dark left half with your name + positioning, light right half with… work list? stats? a contact CTA?

**B.** Build this as a **separate product mockup** — i.e. design "RegEx AI" as a featured case-study artifact you can link from the Work section (since you mentioned wanting case studies last round)

**C.** Replace the whole portfolio with this split-screen aesthetic (warm cream → dark/light split throughout)

My read: **B** is what would actually serve you — a polished product mockup makes a case study *show* instead of *tell*, and we keep the warm portfolio shell that works. But say the word.

## User

Skip all of it

## Assistant

Got it — skipping that change. Portfolio stays as-is. Ready for the next edit whenever you are.

## User

Save as standalone HTML: Surya Portfolio.html

## Assistant

_[tool: copy_files]_

I'll make a standalone copy with a thumbnail, then bundle.

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean — only the harmless Babel-in-browser warning. Delivering the file:

_[tool: present_fs_item_for_download]_

Single self-contained file, works offline. ↑ Click to download.

## User

Change layout to this and make all the links actionable

## Assistant

_[tool: read_file]_

I'll convert the **What I Do** section into this stacked-card layout (icon block · title · spec sub-line · check/arrow), and do a sweep so every link on the page actually goes somewhere.

_[tool: grep]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now the markup — replace the three cards with the new stacked pattern + add a 4th industries card:

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the section header copy from "Three things" to match the 4-card list, and wire all the dead links:

_[tool: str_replace_edit]_

Now the work rows, resources, articles, CTA, and footer links:

_[tool: str_replace_edit]_

Lastly — soften the CTA so a click on a work row that scrolls there makes sense (case studies on request):

_[tool: str_replace_edit]_

_[tool: done]_

Done.

**What I Do** is now a stacked card list matching the reference — icon block · title · spec sub-line · arrow/check on the right. Featured card (Agentic AI) gets the accent border + filled icon, the rest fill in on hover. Added a 4th card for **Regulated Industries** since BFSI/lifesciences/research is core to your positioning. Section title shifted to "Where I go *deep*."

**Links audit — every dead `href="#"` killed:**
- LinkedIn → `linkedin.com/in/surya-prakash-pandey/` *(swap to your real handle)*
- Resume → downloads `Surya-Prakash-Pandey-Resume.pdf` *(drop the actual PDF in the project root)*
- GitHub → `github.com/suryaprakashpandey` *(swap)*
- Read.cv → `read.cv/suryaprakashpandey` *(swap)*
- Book a call → `calendly.com/suryaprakashpandey/30min` *(swap)*
- Work rows → scroll to **#contact** with a `data-project="..."` attr (so when you wire up real case studies, the click target's already labelled)
- Resource links → each opens a pre-filled `mailto:` with the resource name as subject *(I want X resource)*
- Article links → point at your LinkedIn articles feed *(swap to Medium/Substack when you publish there)*
- CTA copy now explicitly mentions case studies-on-request, so the scroll-to-contact behavior is honest

**Five swaps you need to make in source:**
1. Your real LinkedIn URL (3 places — hero social, footer, articles)
2. Your real email (currently `hello@suryapandey.com`)
3. Your real Calendly link
4. Your real GitHub / Read.cv handles
5. Drop the actual resume PDF in the project

Want me to add a "case study available on request" inline disclosure on the work rows themselves so it's clearer what happens when they click, or leave the scroll-to-contact as-is?

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Updated to **Data/Knowledge Products & Platforms**.

