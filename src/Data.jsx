export const all = [
    {
        id : "d1",
        title : "Database Management",
        image : "",
        duration : 40,
        author : "Reach",
        questions : [
            {
                id:"q1",
                question : "What does database mean ?",
                image:"",
                type: "qna",
                duration:10
            },
            {
                id:"q2",
                image:"",
                type: "tf",
                duration:10,
                quiz : {question : "Is the state ment true of false : DBMS is a system ?",answer:"op2"},
            },
            {
                id:"q3",
                image:"",
                type: "qcm",
                duration:10,
                quiz : {question : "Select the correct one statement ?",answer:"anw3",anw1:"Dog is you",anw2:"Dog is him",anw3:"Dog is animal",anw4:"Dog is food"},
            },
            {
                id:"q4",
                image:"",
                type: "op",
                duration:10,
                quiz : {question : "Select the all wrong statements ?",answer:["anw1","anw2","anw3"],anw1:"Dog is you",anw2:"Dog is him",anw3:"Dog is animal",anw4:"Dog is food"},

            }
        ]

    }
];