/// <reference types="@cloudflare/workers-types" />
const { HTMLRewriter } = globalThis;

type HTMLRewriterElementContentHandlers =
  globalThis.HTMLRewriterElementContentHandlers;
type HTMLRewriterDocumentContentHandlers =
  globalThis.HTMLRewriterDocumentContentHandlers;
type Text = globalThis.Text;
type Doctype = globalThis.Doctype;
type DocumentEnd = globalThis.DocumentEnd;
type ContentOptions = globalThis.ContentOptions;
type Content = globalThis.Content;
type Comment = globalThis.Comment;
type Element = globalThis.Element;
type EndTag = globalThis.EndTag;

export { HTMLRewriter };
export type {
  HTMLRewriterElementContentHandlers,
  HTMLRewriterDocumentContentHandlers,
  Text,
  Doctype,
  DocumentEnd,
  ContentOptions,
  Content,
  Comment,
  Element,
  EndTag,
};
