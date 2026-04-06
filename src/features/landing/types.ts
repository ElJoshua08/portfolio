export type Prompt = string; // TODO: this shouldnt be string, but for now works.
export type Misc = string; // TODO: this also shouldnt be.
export type Body = { content: string; color: string }[];

export type Line = {
  prompt: Prompt | null;
  body: Body;
  misc: Misc | null;
};
