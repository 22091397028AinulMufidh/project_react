import React from "react";
import Button from "../Components/Button.jsx";

function Course() {
    return (
        <>
            <div class="grid grid-col-4 grid-flow-col gap-4">
              {/* Container Video */}
              <div>
              </div>
              

              {/* Container Answer Choice */}
              <div>
                <li>
                  <p>1. Import the Required CSS:  video player properly.</p>
                  <p>2. Use the Imported Component: react-html5video.</p>
                </li>
              </div>
            </div>

            {/* DIV CONTAINER 2 */}
            <div class="grid grid-col-4 grid-flow-col gap-4" className="mt-8">
              <div>
                <Button/>
              </div>
              
              <div>
                <li>
                  <p>1. Import the Required CSS:  video player properly.</p>
                  <p>2. Use the Imported Component: react-html5video.</p>
                </li>
              </div>
            </div>
            
      </>
      
    )
}

export default Course