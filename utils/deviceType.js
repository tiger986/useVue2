function isMoible(UA) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA) ?
        true :
        false;
}
export function deviceType(UA) {
    if (isMoible(UA)) {
        return {
            type: "mobile",
        };
    } else {
        return {
            type: "pc",
        };
    }
}