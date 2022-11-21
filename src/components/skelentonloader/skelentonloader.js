import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Skeletonloader = ({ height, width, borderRadius, marginRight }) => {
  return (
    <div className="skeletonloader">
      <Skeleton
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
        }}
      />
    </div>
  );
};

Skeletonloader.defaultProps = {
  height: 16,
  width: '100%',
  borderRadius: 8,
}

export default Skeletonloader;
