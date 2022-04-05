import React from 'react';
import tw from 'twin.macro';

const InnerPanel = tw.div`
    m-auto
    bg-pink-400
    w-11/12
    height[90%]
    rounded-2xl
    box-shadow[1px 1px 20px salmon]

`;

function Bottom() {
	return <InnerPanel>
        
    </InnerPanel>;
}

export default Bottom;
