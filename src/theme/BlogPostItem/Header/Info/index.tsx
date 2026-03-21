import React from "react";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

export default function InfoWrapper(): React.JSX.Element {
  const { metadata } = useBlogPost();
  const year = new Date(metadata.date).getFullYear();
  const readingTime = metadata.readingTime
    ? `${Math.ceil(metadata.readingTime)} min read`
    : "";

  return (
    <div className="margin-vert--md">
      <time dateTime={metadata.date}>{year}</time>
      {readingTime && <> · {readingTime}</>}
    </div>
  );
}
