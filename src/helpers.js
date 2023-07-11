export function capitalFirstLetter(string){
    if (string){
        return string.charAt(0).toUpperCase();
    }
}
export function validaitionEmail(email){
    var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

    return regex.test(String(email).toLowerCase());

};