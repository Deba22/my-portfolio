
import Lottie from "react-lottie";

function Animation({ animPath }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie options={defaultOptions} />
  )
}

export default Animation
