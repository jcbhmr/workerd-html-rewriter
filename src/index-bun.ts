/// <reference types="bun-types" />
const { HTMLRewriter } = globalThis;

type HTMLRewriterElementContentHandlers =
  HTMLRewriterTypes.HTMLRewriterElementContentHandlers;
type HTMLRewriterDocumentContentHandlers =
  HTMLRewriterTypes.HTMLRewriterDocumentContentHandlers;
type Text = HTMLRewriterTypes.Text;
type Doctype = HTMLRewriterTypes.Doctype;
type DocumentEnd = HTMLRewriterTypes.DocumentEnd;
type ContentOptions = HTMLRewriterTypes.ContentOptions;
type Content = HTMLRewriterTypes.Content;
type Comment = HTMLRewriterTypes.Comment;
type Element = HTMLRewriterTypes.Element;
type EndTag = HTMLRewriterTypes.EndTag;

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
