import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      id="comments"
      repo="Deba22/my-portfolio"
      repoId="MDEwOlJlcG9zaXRvcnkzNDMzODE2MTM="
      category="Blog Comments"
      categoryId="DIC_kwDOFHeWbc4C17Ba"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}