//@ts-nocheck
export const initializeNewWorkout = (publicID, workoutClass, workoutChapter, attempted, correct, average, fastest, slowest) => {
    let newWorkout = {
        creationTimestamp: Date.now(), //private
        publicID, //public
        workoutClass, workoutChapter, attempted, correct, average, fastest, slowest
    }
    return newWorkout;
}