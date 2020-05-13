export function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
        });
    } else {
        console.log("Geolocation Failed. This usually means access was denied or HTTPS isn't running.");
    }
}