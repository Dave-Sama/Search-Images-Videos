import tw from "twin.macro";

export const Image = tw.div`
	flex
	flex-col
	self-center
    // w-11/12
	m-10
    max-w-max
	
`;

export const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;