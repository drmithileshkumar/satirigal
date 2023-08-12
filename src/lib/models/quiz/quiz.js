// @ts-nocheck

export const initializeNewQuiz = (publicID, title, description, tags, subjects, chapters, nq, duration, time, validity, totalmarks, questions, privacy) => {
    let newQuiz = {
        publicID,
        creationTimestamp: Date.now(), //private
        title,
        description,
        tags,
        subjects,
        chapters,
        nq,
        duration,
        time,
        validity,
        totalmarks,
        questions,
        images: '',// id in the images collection
        
        privacy,
        
    }
    return newQuiz;
}