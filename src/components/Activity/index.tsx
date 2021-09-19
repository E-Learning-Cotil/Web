import { useState, useEffect } from "react";
import Link from "next/link";
import {  ActivityWrapper, ActivityDate, ActivityName } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const dateNow = new Date();

export default function Activity({photo, name, date, id, color}){
	const [dateTime, setDateTime] = useState({
		day: dateNow.getDate(),
		month: dateNow.getMonth() + 1,
		year: dateNow.getFullYear(),
		hours: dateNow.getHours(),
		minutes: dateNow.getMinutes(),
		seconds: dateNow.getSeconds()
	});

	const [convertedData,setConvertedData] = useState({
		day: new Date(date).getDate(),
		month: new Date(date).getMonth() + 1,
		year: new Date(date).getFullYear(),
		hours: new Date(date).getHours(),
		minutes:  new Date(date).getMinutes()
	});

	const [dateColor, setDateColor] = useState("white");

	useEffect(() => {
		const timer = setInterval(() => {
			const dateNow = new Date();
			setDateTime({
				day: dateNow.getDate(),
				month: dateNow.getMonth() + 1,
				year: dateNow.getFullYear(),
				hours: dateNow.getHours(),
				minutes: dateNow.getMinutes(),
				seconds: dateNow.getSeconds()
			});
			checkActivityDate();
		}, 1000);
		return () => clearInterval(timer);
	}, []);

    useEffect(() => {
        checkActivityDate();
    },[dateTime]);
	
	function checkActivityDate(){
        if((convertedData.month >= dateTime.month) && (convertedData.year >= dateTime.year)){
			if((convertedData.day == dateTime.day) && (convertedData.month == dateTime.month) && (convertedData.year == dateTime.year) && ((convertedData.hours > dateTime.hours) || ((convertedData.minutes > dateTime.minutes) && (convertedData.hours == dateTime.hours)))){
				setDateColor("yellow");
			}
            else if(((convertedData.day == dateTime.day) && (convertedData.month == dateTime.month) && (convertedData.year == dateTime.year)) && ((convertedData.hours < dateTime.hours) || ((convertedData.hours == dateTime.hours) && (convertedData.minutes <= dateTime.minutes)))){
                setDateColor("red");
            }
			else if(convertedData.day > dateTime.day){
				setDateColor("green");
			}
            else if(convertedData.day < dateTime.day){
				setDateColor("red");
			}
		}else{
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
					<p> { convertedData.day < 10 ? `0${convertedData.day}/` : `${convertedData.day}/` }
                        { convertedData.month < 10 ? `0${convertedData.month}` : `${convertedData.month}` }
                    </p>
                    
				</ActivityDate>
			</ActivityWrapper>
		</Link>
		)
	}