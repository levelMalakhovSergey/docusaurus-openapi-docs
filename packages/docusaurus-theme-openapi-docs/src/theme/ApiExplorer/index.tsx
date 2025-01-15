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
import SkeletonLoader from "@theme/SkeletonLoader";

function ApiExplorer({
  item,
  infoPath,
  hideRightPanel,
}: {
  item: NonNullable<ApiItem>;
  infoPath: string;
  hideRightPanel?: boolean;
}) {
  const postman = new sdk.Request(item.postman);

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
