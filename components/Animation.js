import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

function Animation({ animPath }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
}

export default Animation;