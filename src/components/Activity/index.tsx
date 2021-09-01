import Link from "next/link";
import {  ActivityWrapper, ActivityDate, ActivityName } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function Activity({photo, name, date, id, color}){
    return (
        <Link href="/">
            <ActivityWrapper>
                <ActivityName
                    backgroundColor={color}
                >
                    <div>
                        <img src={photo} alt={name} />
                    </div>
                    <p>{name}</p>
                </ActivityName>
                <ActivityDate>
                    <FontAwesomeIcon 
                        icon={faCalendarAlt}
                        color="#fff"
                        size="lg"
                    />
                    <p>{date}</p>
                </ActivityDate>
            </ActivityWrapper>
        </Link>
    )
}