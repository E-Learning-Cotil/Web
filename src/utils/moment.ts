import moment from "moment";
import 'moment/locale/pt-br';

function showDateAnTime(date: string, format: string){
    moment.locale('pt-br');
    const formattedDate = moment(date).format(format);
    return formattedDate;
}

function showTimePassed(date: string){
    const timePassed = moment(date).fromNow();
    return timePassed;
}

function getColorOfDate(date: string){
    const isSameDay = moment().isSame(date, 'day');
    const haveAlreadyPassed = moment().isAfter(date, 'day');
    
    let color;
    if(isSameDay){
        color = "yellow";
    }else if(haveAlreadyPassed){
        color = "red";
    }else{
        color = "green";
    }

    return color;    
}

export {
    showDateAnTime,
    getColorOfDate,
    showTimePassed
}