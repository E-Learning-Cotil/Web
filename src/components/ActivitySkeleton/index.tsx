import ShimmerEffect from "../ShimmerEffect";
import { Skeleton } from "./styles";

export default function ActivitySkeleton(){
    return (
        <Skeleton>
                <ShimmerEffect 
                    width="60px"
                    height="60px"
                />
                <ShimmerEffect 
                    width="200px"
                    height="24px"
                />
        </Skeleton>
    )
}