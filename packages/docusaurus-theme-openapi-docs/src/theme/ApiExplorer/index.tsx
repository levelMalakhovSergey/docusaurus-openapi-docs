/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";

import BrowserOnly from "@docusaurus/BrowserOnly";
import CodeSnippets from "@theme/ApiExplorer/CodeSnippets";
import Request from "@theme/ApiExplorer/Request";
import Response from "@theme/ApiExplorer/Response";
import SecuritySchemes from "@theme/ApiExplorer/SecuritySchemes";
import { ApiItem } from "docusaurus-plugin-openapi-docs/src/types";
import sdk from "postman-collection";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import SkeletonLoader from "@theme/SkeletonLoader";

function ApiExplorer({
  item,
  infoPath,
}: {
  item: NonNullable<ApiItem>;
  infoPath: string;
}) {
  const postman = new sdk.Request(item.postman);
  const metadata = useDoc();
  const hideRightPanel = metadata.frontMatter.hide_right_panel;
  return (
    <>
      {!hideRightPanel && (
        <div className="col col--5 openapi-right-panel__container">
          <BrowserOnly fallback={<SkeletonLoader size="lg" />}>
            {() => {
              return (
                <>
                  <SecuritySchemes infoPath={infoPath} />
                  {item.method !== "event" && (
                    <CodeSnippets
                      postman={postman}
                      codeSamples={(item as any)["x-codeSamples"] ?? []}
                    />
                  )}
                  <Request item={item} />
                  <Response item={item} />
                </>
              );
            }}
          </BrowserOnly>
        </div>
      )}
    </>
  );
}

export default ApiExplorer;
