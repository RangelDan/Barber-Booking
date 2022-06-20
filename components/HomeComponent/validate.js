export const validate = (resInfo) => {
    if (!resInfo.clientName || resInfo.clientName == " ") {
        return false;
    }
    if (!resInfo.date || !resInfo.time || !resInfo.haircut) {
        return false;
    }
}