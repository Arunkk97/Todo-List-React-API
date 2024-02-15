import React from 'react'
import useFetch from '../Hooks/useFetch'

function Todo() {
    const result = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(result);


    return (
        <>
            <h1 className='text-center text-danger mt-5 fw-bolder'>Todo List</h1>
            <div className='container '>
                <table className='table shadow mt-5'>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.length > 0 ? result.map((todo, index) => (
                                <tr key={index}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed?"true":"false"}</td>

                                </tr>

                            )) : <tr>Nothing to Fetch</tr>
                        }
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default Todo