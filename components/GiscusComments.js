import Script from "next/script";

export default function GiscusComments() {
  return (
    <>
      <Script
        src="https://giscus.app/client.js"
        data-repo="Deba22/my-portfolio"
        data-repo-id="MDEwOlJlcG9zaXRvcnkzNDMzODE2MTM="
        data-category="Blog Comments"
        data-category-id="DIC_kwDOFHeWbc4C17Ba"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      />
      <div className="giscus" />
    </>
  );
}