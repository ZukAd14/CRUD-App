

const dateToStr = (date) => {
    const data = date.toISOString();
    let d = data.substring(8,10);
    const m = data.substring(5,7);
    const y = data.substring(0,4);
    const convertedDate = m + '/' + (++d) + '/' + y ;
    
    
    
    //console.log(data, d, m, y, convertedDate)
    return (convertedDate);
};

export default dateToStr;