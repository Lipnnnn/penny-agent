import type { ChapterDef } from "./types";
import LowDiligenceChapter from "../chapters/01-low-diligence/LowDiligence";
import { narrations as lowDiligenceNarrations } from "../chapters/01-low-diligence/narrations";
import StrategicGapChapter from "../chapters/02-strategic-gap/StrategicGap";
import { narrations as strategicGapNarrations } from "../chapters/02-strategic-gap/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "low-diligence",
    title: "低水平勤奋",
    narrations: lowDiligenceNarrations,
    Component: LowDiligenceChapter,
  },
  {
    id: "strategic-gap",
    title: "战略差距",
    narrations: strategicGapNarrations,
    Component: StrategicGapChapter,
  },
];
