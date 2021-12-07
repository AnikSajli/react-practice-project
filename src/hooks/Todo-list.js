import React, {useState, useEffect} from "react";

export var TodoList = () => {
    const [todoList, modifyList] =  useState([
        { title: "Task 1", id: 1 },
        { title: "Task 2", id: 2 },
        { title: "Task 3", id: 3 }
    ]);
    const addTask = () => {
        modifyList([
            ...todoList,
            {title: "new task", id: Math.random()}
        ])
    }

    // useEffect(() => {
    //     console.log("Use Effect called!");
    // })
    return (
        <div>
            <ul>
                {todoList.map(task => {
                    return (
                        <li key={task.id}>{task.title}</li>
                    )
                })}
            </ul>
            <button onClick={addTask}>Add New Task</button>
        </div>
    )
}
