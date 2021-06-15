import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <Loader
      type="MutatingDots"
      color="#00BFFF"
      height={100}
      timeout={1100}
      width={100}
      ThreeDotsThreeDotsThreeDotsThreeDots
    />
  );
};

export default LoaderSpinner;
