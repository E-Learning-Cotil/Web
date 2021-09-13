import { useState, useEffect } from "react";
import Link from "next/link";
import {  ActivityWrapper, ActivityDate, ActivityName } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const dateNow = new Date();

export default function Activity({photo, name, date, id, color}){
	const [dateTime, setDateTime] = useState({
		day: dateNow.getDay(),
		month: dateNow.getMonth(),
		year: dateNow.getFullYear(),
		hours: dateNow.getHours(),
		minutes: dateNow.getMinutes(),
		seconds: dateNow.getSeconds()
	});

	const [convertedData,setConvertedData] = useState({
		day: new Date(date).getDay(),
		month: new Date(date).getMonth(),
		year: new Date(date).getFullYear(),
		hours: new Date(date).getHours(),
		minutes:  new Date(date).getMinutes()
	});

	const [dateColor, setDateColor] = useState("white");

	useEffect(() => {
		const timer = setInterval(() => {
			const dateNow = new Date();
			setDateTime({
				day: dateNow.getDay(),
				month: dateNow.getMonth(),
				year: dateNow.getFullYear(),
				hours: dateNow.getHours(),
				minutes: dateNow.getMinutes(),
				seconds: null
			});
			checkActivityDate();
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	
	function checkActivityDate(){
		if(convertedData.day <= dateTime.day){
			if((convertedData.day == dateTime.day) && (convertedData.month == dateTime.month) && (convertedData.year == dateTime.year)){
				setDateColor("yellow");
			}
			else{
				setDateColor("green");
			}
		}else if((convertedData.month <= dateTime.month) && (convertedData.year <= dateTime.year)){
			setDateColor("red");
		}
	}	

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

				<ActivityDate
					color={dateColor}
				>
					<FontAwesomeIcon 
					icon={faCalendarAlt}
					color={dateColor}
					size="lg"
					/>
					<p>{`${convertedData.day}/${convertedData.month}`}</p>
				</ActivityDate>
			</ActivityWrapper>
		</Link>
		)
	}