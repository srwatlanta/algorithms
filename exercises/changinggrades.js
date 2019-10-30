function gradingStudents(grades) {
    function changeGrade(grade){
        if (grade < 35) return grade
        else{
            let add = 5 - (grade % 5)
            if(add < 3)return (grade + add)
            else return grade
        }
    }
    for(let i = 0; i < grades.length; i++){
        grades[i] = changeGrade(grades[i])
    }
    return grades
}