import Lottie from "lottie-react";

function Animation({ animPath }) {
  return (
    <Lottie
      animationData={animPath}
      loop={true}
      autoplay={true}
      style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"   // similar to "slice"
  }}
    />
  );
}

export default Animation;