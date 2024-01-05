function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // 创建任务项
    var li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <span>${taskInput.value}</span>
        <button onclick="deleteTask(this)">删除</button>
    `;

    // 将任务项添加到任务列表
    taskList.appendChild(li);

    // 清空输入框
    taskInput.value = "";
}

function deleteTask(button) {
    var confirmation = confirm("确定要删除这个任务吗？");

    if (confirmation) {
        // 用户点击了确定，执行删除任务的操作
        // 这里可以添加删除任务的代码
        alert("任务已删除！");
        
        // 获取任务项元素并移除
        var taskItem = button.parentNode;
        taskItem.parentNode.removeChild(taskItem);
    } else {
        // 用户点击了取消，不执行删除任务的操作
        alert("任务未删除。");
    }
}

function completeTask(checkbox) {
    var confirmation = confirm("确定任务已完成吗？");

    if (confirmation) {
        // 用户点击了确定，执行标记任务为完成的操作
        // 这里可以添加标记任务为完成的代码
        alert("任务已完成！");
        
        // 在文本前面添加删除线
        checkbox.nextElementSibling.style.textDecoration = "line-through";
    } else {
        // 用户点击了取消，不执行标记任务为完成的操作
        alert("任务未完成。");
        // 移除删除线
        checkbox.nextElementSibling.style.textDecoration = "none";
    }
}

// script.js

// 在页面加载完毕后弹出提示框
window.onload = function() {
    alert("欢迎使用廖源华的第一个软件 To-Do List 应用！");
};

