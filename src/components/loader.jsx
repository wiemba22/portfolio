import React from 'react';
import { Audio } from 'react-loader-spinner';
import { PropagateLoader } from 'react-spinners';


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
          <PropagateLoader
            color="#f50b86"
            loading={true} 
            size={15} 
          />
        </div>
      );
    }
    

export default Loader;
