Vue.component("todo-item", {
	props: ["todo"],
	template: "<li>{{ todo.text }}</li>"
});

var todoApp = new Vue({
	el: "#todoApp",
	data: {
		message: "test",
		todos: [
			{ text: 'bobby JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	},
	computed: {
		sum: function () {
			return Object.keys(this.todos).length;
		},
		now: function () {
		    return Date.now()
		  }
	},
	methods: {
		noww: function () {
			return Date.now()
		}
	}
});

var schedApp = new Vue({
	el: "#schedApp",
	data: {
		schedContent: "Schedule!",
		schedActive: false
	}
})
