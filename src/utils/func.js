export const mappedDate = (date) => date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0];

export const someEmptyField = (obj) => {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === [] || obj[key] === null) {
        return true;
        }
    }
    return false;
}