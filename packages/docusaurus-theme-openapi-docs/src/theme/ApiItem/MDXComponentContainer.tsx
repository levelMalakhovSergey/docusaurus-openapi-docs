import React from "react";

// @ts-ignore
export default function MDXComponentContainer({
  MDXComponent,
  hideRightPanel,
}: {
  MDXComponent: any;
  hideRightPanel?: boolean;
}): JSX.Element {
  return (
    <div
      className={`col col--${hideRightPanel ? 12 : 7} openapi-left-panel__container`}
    >
      <MDXComponent />
    </div>
  );
}
