export type ExtraContent = {
  vocabulary?: { term: string; meaning: string; example?: string }[];
  vocabularyBasic?: { term: string; meaning: string; example?: string }[];
  vocabularyIT?: { term: string; meaning: string; example?: string }[];
  sentencePatterns?: { pattern: string; example?: string }[];
  situations?: { title: string; example?: string }[];
  practice?: { title: string; prompt: string; sample?: string }[];
};

export type Lesson = {
  id: number;
  title: string;
  content: string;
  outcome?: string;
  tasks?: string[];
  extra?: ExtraContent;
};