const Todo = require('../models/Todo');
const {
	SUCCESSFULLY_CREATED_MESSAGE,
	SUCCESSFULLY_UPADATED_MESSAGE,
	SUCCESSFULLY_TOGGLED_MESSAGE,
	SUCCESSFULLY_REMOVED_MESSAGE,
} = require('../constants/index.js');

function getAll(req, res) {
	async function main() {
		const todo = await Todo.getAll();
		if (todo) res.status(200).json({todo, status: 0});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

function get(req, res) {
	const id = req.params.todoId;

	async function main() {
		const todo = await Todo.get(id);
		if (todo) res.status(200).json({status: 0, todo});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

function create(req, res) {
	async function main() {
		const todo = await Todo.create(req.body);
		if (todo) res.status(200).json({todo, msg: SUCCESSFULLY_CREATED_MESSAGE, status: 0});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

function update(req, res) {
	const id = req.params.todoId;
	const updatedTodo = req.body;

	async function main() {
		const todo = await Todo.update(id, updatedTodo);
		if (todo) res.status(200).json({todo, msg: SUCCESSFULLY_UPADATED_MESSAGE, status: 0});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

function toggle(req, res) {
	const id = req.params.todoId;

	async function main() {
		const todo = await Todo.toggle(id);
		if (todo.err) return res.status(400).json(todo);
		res.status(200).json({todo, msg: SUCCESSFULLY_TOGGLED_MESSAGE, status: 0});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

function remove(req, res) {
	const id = req.params.todoId;

	async function main() {
		const todo = await Todo.remove(id);
		if (todo) res.status(200).json({id, msg: SUCCESSFULLY_REMOVED_MESSAGE, status: 0});
	}

	return main()
		.catch(err => res.status(500).json(err));
}

module.exports = {
	getAll,
	get,
	create,
	update,
	toggle,
	remove
};
