import { Skeleton } from "./styles";

import ShimmerEffect from "../ShimmerEffect";

function TableSkeletonRow(){
    return (
        <tr>
            <td><ShimmerEffect width="100px" height="20px"/></td>
            <td><ShimmerEffect width="100px" height="20px"/></td>
            <td><ShimmerEffect width="100px" height="20px"/></td>
            <td><ShimmerEffect width="100px" height="20px"/></td>
        </tr>
    );
}

export default function TableSkeleton(){   
    return (
        <Skeleton>
            <thead>
                <tr>
                    <th>Nome da matéria</th>
                    <th>Média dos testes</th>
                    <th>Média das atividades</th>
                    <th>Média final</th>
                </tr>
            </thead>
            <tbody>
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
            </tbody>
        </Skeleton>
    )
}