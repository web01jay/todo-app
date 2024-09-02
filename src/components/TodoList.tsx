import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePriority } from '../store';
import { deleteTodo, archiveTodo } from '../store';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TodoListProps {
    onEditTask: (task: any) => void;
}

interface TodoTask {
    id: string;
    title: string | null | undefined;
    description: string | null | undefined;
    priority: string | number | boolean | null | undefined;
    completionTime: string | number | boolean | null | undefined;
}

const TodoList: React.FC<TodoListProps> = ({ onEditTask }) => {
    const todos = useSelector((state: any) => state.todos.todos);
    const dispatch = useDispatch();

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const updatedTodos: [TodoTask] | any = Array.from(todos) || [];
        const [movedItem] = updatedTodos.splice(result.source.index, 1);
        updatedTodos.splice(result.destination.index, 0, movedItem);
        updatedTodos.forEach((todo:TodoTask, index: number) => {
            dispatch(updatePriority({ id: todo.id, priority: index + 1 }));
        });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todoList">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todos.map((
                            todo: TodoTask,
                            index: number
                        ) => (
                            <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <h3>{todo.title}</h3>
                                        <p>{todo.description}</p>
                                        <p>Priority: {todo.priority}</p>
                                        <p>Completion Time: {todo.completionTime}</p>
                                        <button onClick={() => onEditTask(todo)}>Edit</button>
                                        <button onClick={() => dispatch(archiveTodo([todo.id]))}>Archive</button>
                                        <button onClick={() => dispatch(deleteTodo([todo.id]))}>Delete</button>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
