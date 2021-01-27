import React from 'react'

export const Another = () => {

    const [teachersSelectVal, setTeachersSelectVal] = React.useState([]);
    const [popups, setPopups] = React.useState(null);

    const { teachersList, newClasses } = props; // gets it from admin_add_new_instance

    const noTeachersYet = !teachersList || teachersList.length < 2

    let uClassesInfo = [];
    if (!noTeachersYet && newClasses && newClasses.length) {
        newClasses.forEach(c => {
            let filteredSameClass = uClassesInfo.filter(uc => uc.grade === c.grade && uc.classIndex === c.classIndex)
            if (filteredSameClass && !filteredSameClass.length) {
                uClassesInfo.push(c)
            }
        })
        uClassesInfo = uClassesInfo.sort((a, b) => a.grade > b.grade ? 1 : a.grade < b.grade ? -1 : (a.classIndex > b.classIndex ? 1 : (a.classIndex < b.classIndex ? -1 : 0)))
    }


    const handleTeacherSelectChange = (e, index) => {
        let newVals = Array.from(teachersSelectVal);
        newVals[index] = e.target.value;
        setTeachersSelectVal(newVals)
    }

    const getTeacherNames = () => {
        if (!teachersList || !Array.isArray(teachersList)) return [];

        let optionsArr = teachersList.map((t, i) => {
            return <option key={"k" + i + t.teacherFirstName} value={`${t.teacherFirstName} ${t.teacherLastName}`}>{`${t.teacherFirstName} ${t.teacherLastName}`}</option>
        })
        optionsArr.unshift(<option value='' />)
        return optionsArr;
    }
    const hadnleSubmit = () => {
        if (noTeachersYet) {
            props.openPopups(null, null)
            return;
        }
        const doneAssigning = teachersSelectVal && (teachersSelectVal.length == teachersSelects.length) && teachersSelectVal.every(t => t.length) //previously used to disable the "done" buttin (disabled={!noTeachersYet && !doneAssigning}) but then realized that it shouldn't be mandatory to assign home teacher to all classes cos maybe didn't add all teachers yet
        if (!doneAssigning) setPopups([<ErrorPopup text={'לא סיימת למלא מחנכים לכל הכיתות, האם ברצונך לסיים בכל זאת?'} key="k0" okayText={"כן, סיים"} cancelText={"לא, המשך לערוך"} handlePopupClick={finished => {
            if (!finished) {
                setPopups(null)
                return;
            }
            assignTeachers()
        }} />, <DarkBackgroundBehindPopup key="k1" />])
        else assignTeachers()
    }

    const assignTeachers = () => {
        const assignedAll = teachersSelectVal && (teachersSelectVal.length == teachersSelects.length) && teachersSelectVal.every(t => t.length) //previously used to disable the "done" buttin (disabled={!noTeachersYet && !doneAssigning}) but then realized that it shouldn't be mandatory to assign home teacher to all classes cos maybe didn't add all teachers yet
        if (!assignedAll) { props.openPopups(null, null); return; }
        let newCls;
        const classesWHomeTeacher = uClassesInfo.map((cls, index) => {
            if (!teachersSelectVal[index])
                return null;
            newCls = { ...cls }
            newCls.firstName = teachersSelectVal[index].split(' ')[0]
            newCls.lastName = teachersSelectVal[index].split(' ')[1]
            return newCls;
        })
        props.openPopups(null, 'LOADING')
        props.StudentsStore.assignHomeTeacher(classesWHomeTeacher.filter(c => c), (err, timeo) => {
            props.openPopups(err, 'ERROR')
            if (timeo) {
                setTimeout(() => { props.openPopups(null, null) }, 2000)
            }
        })
    }

    const teachersSelects = noTeachersYet ? "טרם קיימים מורים בבית הספר שלך, אנא שבץ מחנכים ומחנכות לאחר הוספתם למערכת" : uClassesInfo.map((c, index) => {
        return (
            <div key={ClassesUtils.hebrewGrades[c["grade"] - 1] + c["classIndex"]} >
                <h5 className="home-teacher-title" >שכבה</h5>
                <h3 className="home-teacher-title" > {ClassesUtils.hebrewGrades[c["grade"] - 1] | "?"}</h3>
                <h5 className="home-teacher-title" > כיתה מספר</h5>
                <h3 className="home-teacher-title" > {c["classIndex"]}</h3>
                <h6>מה שמו של מחנך הכיתה?</h6>
                <div>
                    <Select
                        className="home-teacher-info-select"
                        native
                        value={teachersSelectVal[index] ? teachersSelectVal[index] : ''}
                        onChange={(e) => { handleTeacherSelectChange(e, index) }}
                        inputProps={{ id: 'home-teacher-name-select' }}
                    >
                        {getTeacherNames()}
                    </Select>
                </div>
                <br />
            </div>
        );
    })


    
    return (
        <div>
            <h3>ANOTHER</h3>
        </div>
    )
}
