// @ts-nocheck


export const initializeNewQuestion = (publicID, title, description, tags, subjects, chapters, statement, options, answer, difficulty, solution, marks, penalty) => {
    let newQuestion = {
        publicID,
        creationTimestamp: Date.now(), //private
        title,
        description,
        tags,
        subjects,
        chapters,
        statement,
        options,
        answer,
        difficulty,
        solution,
        marks,
        penalty,
        images: '',// id in the images collection
        privacy: 'Private',
        
    }
    return newQuestion;
}