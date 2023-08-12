// @ts-nocheck


export const initializeNewTrigonometry = (publicID, course, isPaid, startdate, duration, completed, transcript) => {
    let newTrigonometry = {
        publicID,
        creationTimestamp: Date.now(), //private
        instructor: 'Dr Mithilesh Kumar',
        course,  isPaid, startdate, duration, completed, transcript
    }
    return newTrigonometry;
}