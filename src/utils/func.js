export const mappedDate = (date) => date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0];

export const someEmptyField = (obj) => {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === [] || obj[key] === null) {
        return true;
        }
    }
    return false;
}

export const mapWeighing = (weighing) => {
    //weighing is a string
    const weighingLength = weighing.length;
    if (weighingLength < 7) {
        if (weighingLength < 5) {
            return weighing;
        }
        else{
            return weighing.substring(0, 4) + '-' + weighing.substring(4, weighingLength);
        }}
    else{
        //weighing example '2020/21'
        return weighing.slice(0,7).substring(0, weighingLength - 2) + '-' + weighing.substring(weighingLength - 2, weighingLength);
    }
}