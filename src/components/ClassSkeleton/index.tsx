import ShimmerEffect from "../ShimmerEffect";
import { Skeleton } from "./styles";

export default function ClassSkeleton(){
    return (
        <Skeleton>
                <ShimmerEffect 
                    width="60px"
                    height="60px"
                />
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