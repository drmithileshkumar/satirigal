import { geoPosition } from "$lib/stores";

export const validateRole = (role) => {
    const allowedRoles = ['Doctor', 'Patient', 'Hospital', 'Nurse', 'Store', 'Lab', 'Scan', 'Ambulance', 'Admin', 'Verifier'];
    return allowedRoles.includes(role);
}
export const validateGender = (gender) => {
    const allowedGenders = ['Male', 'Female', ''];
    return allowedGenders.includes(gender);
}
export const validateName = (name) => {
    let nameAntiPattern = /[^a-zA-Z ]/g;
    return !nameAntiPattern.test(name);
}
export const validatePhone = (phone) => {
    const length = phone.length === 10;
    const phoneAntiPattern = /[^\d]/g;
    return length && !phoneAntiPattern.test(phone); 
}
export const validateGeoPosition = (geoPosition) => {
    const hasCoords = geoPosition.hasOwnProperty('coords');
    const hasTimestamp = geoPosition.hasOwnProperty('timestamp');
    const hasLongitude = geoPosition.coords.hasOwnProperty('longitude')
    const hasLatitude = geoPosition.coords.hasOwnProperty('latitude');
    const isNumTimestamp = typeof geoPosition.timestamp == 'number';
    const isNumLongitude = typeof geoPosition.coords.longitude == 'number';
    const isNumLatitude = typeof geoPosition.coords.latitude == 'number';
    const nKeys = Object.keys(geoPosition).length == 2;
    const nCoords = Object.keys(geoPosition.coords).length == 2;
    return hasCoords && hasTimestamp && hasLongitude && hasLatitude && isNumTimestamp && isNumLatitude && isNumLongitude && nKeys && nCoords;
}
export const validatePassword = (password) => {
    return [
        {
            name: 'Password must be at least 8 characters',
            passed: password.length >= 8,
        },
        {
            name: 'Password must contain at least one number',
            passed: /[0-9]/.test(password),
        },
        {
            name:
                'Password must contain at least one special character (#?!@$%^&*-)',
            passed: /[#?!@$%^&*-]/.test(password),
        },
    ]
}
