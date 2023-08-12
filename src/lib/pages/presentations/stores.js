//@ts-nocheck
import { writable } from "svelte/store";


export const chapters = [
    'Sets', 'Relations and functions 11', 'Trigonometric functions', 'Principle of mathematical induction', 'Complex numbers and quadratic equations', 'Linear inequalities', 'Permutations and combinations', 'Binomial theorem', 'Sequences and series', 'Straight lines', 'Conic sections', 'Indroduction to 3D geometry', 'Limits and derivatives', 'Statistics', 'Probability', 'Relations and functions 12', 'Inverse trigonometric functions', 'Matrices', 'Determinants', 'Continuity and differentiability', 'Application of derivatives', 'Integrals', 'Application of integrals', 'Differential equations', 'Vector algebra', 'Three dimensional geometry', 'Linear programming'
]
export const sections = { 
    'Sets': [
        'Introduction',
        'Sets and their representations',
        'The empty set',
        'Finite and infinite sets',
        'Equal sets',
        'Subsets',
        'Real numbers',
        'Power set',
        'Universal set',
        'Venn diagrams',
        'Operations on sets',
        'Complement of a set',
        'Practical problems'
    ], 
    'Relations and functions 11': [
        'Cartesian product of sets',
        'Relations',
        'Functions'
    ], 
    'Trigonometric functions': [
        'Angles',
        'Trigonometric functions',
        'Trigonometric functions of sum and difference of two angles',
        'Trigonometric equations'
    ], 
    'Principle of mathematical induction': [
        'Motivation',
        'The principle of mathematical induction'
    ], 
    'Complex numbers and quadratic equations': [
        'Complex numbers',
        'Algebra of complex numbers',
        'The modulus and the conjugate of complex number',
        'Argand plane and polar representation',
        'Quadratic equations'
    ], 
    'Linear inequalities': [
        'Inequalities',
        'One variable',
        'Graphical solution in two variables',
        'Solution of system in two variables'
    ], 
    'Permutations and combinations': [
        'Fundamental principle of counting',
        'Permutations',
        'Combinations'
    ], 
    'Binomial theorem': [
        'Binomial theorem for positive integral indices',
        'General and middle terms'
    ], 
    'Sequences and series': [
        'Sequences',
        'Series',
        'Arithmetic progression',
        'Geometric progression',
        'Relationship between AM and GM',
        'Sum to n terms of Special series'
    ], 
    'Straight lines': [
        'Slope of a line',
        'Various forms of the equation of a line',
        'General equation of a line',
        'Distance of a point from a line'
    ], 
    'Conic sections': [
        'Sections of a cone',
        'Circle',
        'Parabola',
        'Ellipse',
        'Hyperbola'
    ], 
    'Indroduction to 3D geometry': [
        'Coordinate axes and coordinate planes in 3D space',
        'Coordinate of a point in space',
        'Distance between two points',
        'Section formula'
    ], 
    'Limits and derivatives': [
        'Intuitive idea of derivatives',
        'Limits',
        'Limits of Trigonometric functions',
        'Derivatives'
    ], 
    // 'Mathematical reasoning': [
    //     'Statements',
    //     'New statements from old',
    //     'Special words/phrases',
    //     'Implications',
    //     'Validating statements'
    // ], 
    'Statistics': [
        'Range',
        'Mean deviation',
        'Variance and standard deviation',
        'Analysis of frequency distributions'
    ], 
    'Probability': [
        'Random experiments',
        'Event',
        'Axiomatic approach to probability'
    ], 
    'Relations and functions 12': [
        'Types of relations',
        'Types of functions',
        'Composition of functions and invertible function',
        'Binary operations'
    ], 
    'Inverse trigonometric functions': [
        'Basic concepts',
        'Properties of inverse trigonometric functions'
    ], 
    'Matrices': [
        'Matrix',
        'Typse of matrices',
        'Operations on matrices',
        'Transpose of a matrix',
        'Symmetric and skew symmetric matrices',
        'Transformation of a matrix',
        'Invertible matrices'
    ], 
    'Determinants': [
        'Determinant',
        'Properties of determinants',
        'Area of a triangle',
        'Minors and cofactors',
        'Adjoint and inverse of a matrix',
        'Applications of determinants and matrices'
    ], 
    'Continuity and differentiability': [
        'Continuity',
        'Differentiability',
        'Exponential and logarithmic functions',
        'Logarithmic differentiation',
        'Derivatives of functions in parametric forms',
        'Second order derivative',
        'Mean value theorem'
    ], 
    'Application of derivatives': [
        'Rate of change of quantities',
        'Increasing and decreasing functions',
        'Tangents and normals',
        'Approximations',
        'Maxima and minima'
    ], 
    'Integrals': [
        'Integration as an inverse process of differentiation',
        'Methods of integration',
        'Integrals of some particular functions',
        'Integration by partial fractions',
        'Integration by parts',
        'Definite integral',
        'Fundamental theorem of calculus',
        'Evaluation of definite integrals by substitution',
        'Some properties of definite integrals'
    ], 
    'Application of integrals': [
        'Area under simple curves',
        'Area between two curves'
    ], 
    'Differential equations': [
        'Basic concepts',
        'General and particular solutions of a differential equation',
        'Formation of a differential equation whose general solution is given',
        'Methods of solving first order first degree differential equations'
    ], 
    'Vector algebra': [
        'Some basic concepts',
        'Types of vectors',
        'Addition of vectors',
        'Multiplication of a vector by a scalar',
        'Product of two vectors'
    ], 
    'Three dimensional geometry': [
        'Direction cosines and direction ratios of a line',
        'Equation of a line in space',
        'Angle between two lines',
        'Shortest distance between two lines',
        'Plane',
        'Coplanarity of two lines',
        'Angle between two planes',
        'Distance of a point from a plane',
        'Angle between a line and a plane'
    ], 
    'Linear programming': [
        'Linear programming problem and its mathematical formulation',
        'Different types of linear programming problems'
    ]
}
export const subsections = {
    'Sets': {
        'Introduction': [],
        'Sets and their representations': [],
        'The empty set': [],
        'Finite and infinite sets': [],
        'Equal sets': [],
        'Subsets': [],
        'Power set': [],
        'Universal set': [],
        'Venn diagrams': [],
        'Operations on sets': [],
        'Complement of a set': [],
        'Practical problems': []
    }, 
    'Relations and functions 11': {
        'Cartesian product of sets': [],
        'Relations': [],
        'Functions': []
    }, 
    'Trigonometric functions': {
        'Angles': [],
        'Trigonometric functions': [],
        'Trigonometric functions of sum and difference of two angles': [],
        'Trigonometric equations': []
    }, 
    'Principle of mathematical induction': {
        'Motivation': [],
        'The principle of mathematical induction': []
    }, 
    'Complex numbers and quadratic equations': {
        'Complex numbers': [],
        'Algebra of complex numbers': [],
        'The modulus and the conjugate of complex number': [],
        'Argand plane and polar representation': [],
        'Quadratic equations': []
    }, 
    'Linear inequalities': {
        'Inequalities': [],
        'One variable': [],
        'Graphical solution in two variables': [],
        'Solution of system in two variables': []
    }, 
    'Permutations and combinations': {
        'Fundamental principle of counting': [],
        'Permutations': [],
        'Combinations': []
    }, 
    'Binomial theorem': {
        'Binomial theorem for positive integral indices': [],
        'General and middle terms': []
    }, 
    'Sequences and series': {
        'Sequences': [],
        'Series': [],
        'Arithmetic progression': [],
        'Geometric progression': [],
        'Relationship between AM and GM': [],
        'Sum to n terms of Special series': []
    }, 
    'Straight lines': {
        'Slope of a line': [],
        'Various forms of the equation of a line': [],
        'General equation of a line': [],
        'Distance of a point from a line': []
    }, 
    'Conic sections': {
        'Sections of a cone': [],
        'Circle': [],
        'Parabola': [],
        'Ellipse': [],
        'Hyperbola': []
    }, 
    'Indroduction to 3D geometry': {
        'Coordinate axes and coordinate planes in 3D space': [],
        'Coordinate of a point in space': [],
        'Distance between two points': [],
        'Section formula': []
    }, 
    'Limits and derivatives': {
        'Intuitive idea of derivatives': [],
        'Limits': [],
        'Limits of Trigonometric functions': [],
        'Derivatives': []
    }, 
    // 'Mathematical reasoning': {
    //     'Statements': [],
    //     'New statements from old': [],
    //     'Special words/phrases': [],
    //     'Implications': [],
    //     'Validating statements': []
    // }, 
    'Statistics': {
        'Range': [],
        'Mean deviation': [],
        'Variance and standard deviation': [],
        'Analysis of frequency distributions': []
    }, 
    'Probability': {
        'Random experiments': [],
        'Event': [],
        'Axiomatic approach to probability': []
    }, 
    'Relations and functions 12': {
        'Types of relations': [],
        'Types of functions': [],
        'Composition of functions and invertible function': [],
        'Binary operations': []
    }, 
    'Inverse trigonometric functions': {
        'Basic concepts': [],
        'Properties of inverse trigonometric functions': []
    }, 
    'Matrices': {
        'Matrix': [],
        'Typse of matrices': [],
        'Operations on matrices': [],
        'Transpose of a matrix': [],
        'Symmetric and skew symmetric matrices': [],
        'Transformation of a matrix': [],
        'Invertible matrices': []
    }, 
    'Determinants': {
        'Determinant': [],
        'Properties of determinants': [],
        'Area of a triangle': [],
        'Minors and cofactors': [],
        'Adjoint and inverse of a matrix': [],
        'Applications of determinants and matrices': []
    }, 
    'Continuity and differentiability': {
        'Continuity': [],
        'Differentiability': [],
        'Exponential and logarithmic functions': [],
        'Logarithmic differentiation': [],
        'Derivatives of functions in parametric forms': [],
        'Second order derivative': [],
        'Mean value theorem': []
    }, 
    'Application of derivatives': {
        'Rate of change of quantities': [],
        'Increasing and decreasing functions': [],
        'Tangents and normals': [],
        'Approximations': [],
        'Maxima and minima': []
    }, 
    'Integrals': {
        'Integration as an inverse process of differentiation': [],
        'Methods of integration': [],
        'Integrals of some particular functions': [],
        'Integration by partial fractions': [],
        'Integration by parts': [],
        'Definite integral': [],
        'Fundamental theorem of calculus': [],
        'Evaluation of definite integrals by substitution': [],
        'Some properties of definite integrals': []
    }, 
    'Application of integrals': {
        'Area under simple curves': [],
        'Area between two curves': []
    }, 
    'Differential equations': {
        'Basic concepts': [],
        'General and particular solutions of a differential equation': [],
        'Formation of a differential equation whose general solution is given': [],
        'Methods of solving first order first degree differential equations': []
    }, 
    'Vector algebra': {
        'Some basic concepts': [],
        'Types of vectors': [],
        'Addition of vectors': [],
        'Multiplication of a vector by a scalar': [],
        'Product of two vectors': []
    }, 
    'Three dimensional geometry': {
        'Direction cosines and direction ratios of a line': [],
        'Equation of a line in space': [],
        'Angle between two lines': [],
        'Shortest distance between two lines': [],
        'Plane': [],
        'Coplanarity of two lines': [],
        'Angle between two planes': [],
        'Distance of a point from a plane': [],
        'Angle between a line and a plane': []
    }, 
    'Linear programming': {
        'Linear programming problem and its mathematical formulation': [],
        'Different types of linear programming problems': []
    }
}

export const selectedChapter = writable(chapters[0]);
export const selectedSection = writable(sections[chapters[0]][0]);

//bind:lineWidth bind:strokeColor bind:globalCompositeOperation bind:stMode bind:arcMode
export const lineWidth = writable(2);
export const strokeColor = writable('red');
export const globalCompositeOperation = writable('source-over');
export const stMode = writable(false);
export const arcMode = writable(false);
export const presentationMode = writable(false);

export const presentation = writable(null);
export const currentSlide = writable(-2);
export const autoScroll = writable(false);
export const slideCounter = writable(0);
export const overlay = writable(null);

export const iitQuestions = {
    '2023': [
        {name: 'Probability', url: '/iit/2023/probability'},
        {name: 'Triangle identities', url: '/iit/2023/triangle'},
        {name: 'Circle', url: '/iit/2023/circle'},
        {name: 'Combinatorics', url: '/iit/2023/combinatorics'},
        {name: 'Complex number', url: '/iit/2023/complex'},
    ]
}