import { useDoc } from "@docusaurus/plugin-content-docs/client";
import React from "react";

// @ts-ignore
export default function MDXComponentContainer({
  MDXComponent,
}: {
  MDXComponent: any;
}): JSX.Element {
  const metadata = useDoc();
  const hideRightPanel = metadata.frontMatter.hide_right_panel;

  return (
    <div
      className={`col col--${hideRightPanel ? 12 : 7} openapi-left-panel__container`}
    >
      <MDXComponent />
    </div>
  );
}
