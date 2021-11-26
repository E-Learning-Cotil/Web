import ShimmerEffect from "../ShimmerEffect";
import { Skeleton } from "./styles";

export default function ClassSkeleton(){
    return (
        <Skeleton>
            <section>
                <ShimmerEffect 
                    width="200px"
                    height="24px"
                />
                <section></section>
                <ShimmerEffect 
                    width="120px"
                    height="16px"
                />  
            </section>
        </Skeleton>
    )
}