import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import React from 'react'

function Loading() {

    return (
        <div>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
          />        
        </div>
    )
}

export default Loading
