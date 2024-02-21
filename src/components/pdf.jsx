import React from 'react';

const PDFViewer = ({ path }) => {
  return (
    <div className='object-contain w-[400px] h-[400px] '>
      <iframe src={path}  width="100%" height="100%" />
    </div>
  );
};

export default PDFViewer;
