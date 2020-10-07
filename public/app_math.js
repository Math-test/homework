const Mathtable = document.querySelector("#math-table");
const form = document.querySelector("#add-math-question-form");
//增加題目與題型與年級
function renderMath(doc) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().topic;
    td2.textContent = doc.data().status;
    td3.textContent = doc.data().lesson;
    td4.textContent = doc.data().question;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    // 刪除資料
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection("math").doc(id).delete();


    });
    Mathtable.appendChild(tr);
}
// getting data 
db.collection("math").get().then(data => {
    data.docs.forEach(doc => {
        renderMath(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection("math").add({
        topic: form.topic.value,
        status: form.status.value,
        lesson: form.lesson.value,
        question: form.question.value
    });
    form.topic.value = '';
    form.status.value = '';
    form.lesson.value = '';
    form.question.value = '';
});
//