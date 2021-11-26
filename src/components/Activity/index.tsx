import Link from "next/link";
import {  ActivityWrapper, ActivityDate, ActivityName } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { getColorOfDate, showDateAndTime } from "../../utils/moment";

export default function Activity({photo, name, date, id, color, type}){
	return (
		<Link href={`${type.toLowerCase()}s/${id}`}>
			<ActivityWrapper>
				<ActivityName
					backgroundColor={color}
				>
					<div>
						<img src={photo} alt={name} />
					</div>
					<p>{name}</p>
				</ActivityName>

				<ActivityDate
					color={getColorOfDate(date)}
				>
					<FontAwesomeIcon 
						icon={faCalendarAlt}
						color={getColorOfDate(date)}
						size="lg"
					/>
					<p> {showDateAndTime(date, "DD/MM/YY")} </p>
				</ActivityDate>
			</ActivityWrapper>
		</Link>
		)
	}