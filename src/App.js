import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	// when the app loads, we need to listen to the database and fetch new todos ans they get added/removed
	useEffect(() => {
		// this code here... fires when the app.js loads
		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setTodos(snapshot.docs.map((doc) => doc.data().todo));
			});
	}, []);

	const addTodo = (event) => {
		// this will fire off when we click the button
		// event.preventDefault to stop the app refreshing every time submit
		event.preventDefault();

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setTodos([...todos, input]);
		setInput(''); // clear up the input after submit
	};

	return (
		<div className='App'>
			<h1>Carol's Todo List</h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				</FormControl>
				<Button
					disabled={!input}
					type='submit'
					onClick={addTodo}
					variant='contained'
					color='primary'>
					Add Todo
				</Button>
				{/* <button type='submit' onClick={addTodo}>
					Add Todo
				</button> */}
			</form>

			<ul>
				{todos.map((todo) => (
					<Todo text={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
