import ShimmerEffect from "../ShimmerEffect";
import { Skeleton, MarginTenPx } from "./styles";

export default function QuestionSkeleton(){
    return (
        <Skeleton>
            <ShimmerEffect 
                width="85%"
                height="40px"
            />
            <MarginTenPx />
            <ShimmerEffect 
                width="70%"
                height="20px"
            />
            <MarginTenPx />
            <ShimmerEffect 
                width="40%"
                height="20px"
            />
            <MarginTenPx />
            <ShimmerEffect 
                width="60%"
                height="20px"
            />
            <MarginTenPx />
            <ShimmerEffect 
                width="80%"
                height="20px"
            />
            <MarginTenPx />
            <ShimmerEffect 
                width="50%"
                height="20px"
            />
        </Skeleton>
    )
}