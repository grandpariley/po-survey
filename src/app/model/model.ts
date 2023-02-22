export type SurveyState = 'INFO' | 'SHORT' | 'MEDIUM' | 'LONG' | 'COMPLETE' | null;

export interface SurveySubmission {
    short: ShortSurveySubmission | null;
    medium: MediumSurveySubmission | null;
    long: LongSurveySubmission | null;
}

export interface ShortSurveySubmission {
    q1: 'A' | 'B' | 'C' | null | undefined;
}

export interface MediumSurveySubmission {
    q2: string | null | undefined;
    q3: Rank | null | undefined;
    q4a: number | null | undefined;
    q4b: number | null | undefined;
    q4c: Rank | null | undefined;
    q5: 'A' | 'B' | null | undefined;
}

export interface LongSurveySubmission {
    q6: Rank | null | undefined;
    q7: Rank | null | undefined;
    q8: Rank | null | undefined;
    q9: string | null | undefined;
}

export type Rank = (number | null)[];