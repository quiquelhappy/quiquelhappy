import type { LangCode } from './locales.ts';
import { en, type Messages } from './en.ts';
import { es } from './es.ts';
import { ca } from './ca.ts';
import { de } from './de.ts';
import { fr } from './fr.ts';

export const all: Record<LangCode, Messages> = { en, es, ca, de, fr };
