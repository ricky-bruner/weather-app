
function getDate(){
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if( dd < 10 ) {
        dd = "0" + dd
    };
    if( mm < 10 ) {
        mm = "0" + mm
    };
    date = mm + "/" + dd + "/" + yyyy
    return date;
}

module.exports = getDate;