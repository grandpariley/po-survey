export type SurveyState = 'CONSENT' | 'INFO' | 'RISK' | 'SHORT' | 'LONG' | 'COMPLETE' | 'SUBMIT' | null;

export interface SurveySubmission {
    risk: RiskSurveySubmission | null;
    short: ShortSurveySubmission | null;
    long: LongSurveySubmission | null;
}

export interface RiskSurveySubmission {
    r1: MultipleChoice | null | undefined;
    r2: MultipleChoice | null | undefined;
    r3: MultipleChoice | null | undefined;
    r4: MultipleChoice | null | undefined;
    r5: MultipleChoice | null | undefined;
    r6: MultipleChoice | null | undefined;
    r7: MultipleChoice | null | undefined;
    r8: MultipleChoice | null | undefined;
    r9: MultipleChoice | null | undefined;
    r10: MultipleChoice | null | undefined;
}

export interface ShortSurveySubmission {
    q1: MultipleChoice | null | undefined;
}

export interface LongSurveySubmission {
    q2: string | null | undefined;
    q3: Rank | null | undefined;
    q4a: number | null | undefined;
    q4b: number | null | undefined;
    q4c: number | null | undefined;
    q5: MultipleChoice | null | undefined;
    q6: Rank | null | undefined;
    q7: Rank | null | undefined;
    q8: Rank | null | undefined;
    q9: string | null | undefined;
}

export type Rank = (number | null)[];
export type MultipleChoice = 'A' | 'B' | 'C' | 'D' | 'E';