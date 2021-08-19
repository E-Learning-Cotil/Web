import { ShimmerDiv } from './styles';

interface ShimmerEffectProps{
    width: string;
    height: string;
}

export default function ShimmerEffect({width, height}: ShimmerEffectProps){   
    return (
        <ShimmerDiv 
            width={width}
            height={height}
        />
    )
}