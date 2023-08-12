// @ts-nocheck


export const initializeNewCourse = (publicID, course, isPaid, startdate, duration, slot, days, completed, transcript) => {
    let newCourse = {
        publicID,
        creationTimestamp: Date.now(), //private
        instructor: 'Dr Mithilesh Kumar',
        course,  isPaid, startdate, duration, slot, days, completed, transcript
    }
    return newCourse;
}