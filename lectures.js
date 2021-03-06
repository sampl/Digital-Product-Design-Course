

var lectureData = [
	{
		title: "Information Architecture",
		number: 4,
		description: "Creating and organizing the structure of an application to suit a certain behavior.",
		assignment: {
			description: "Diagram your app:",
			bullets: [
				"Use your own app idea or model a basic todo list",
				"Show pages as rectangles",
				"Show the interactions between pages as arrows",
				"Indicate the starting point and the 'a ha!' (success) moment"
			]
		},
		resources: [],
		youtube: "https://youtu.be/pl21kehYvvs",
		date: "October 3, 2016",
		slides: "lecture4.pdf"
	},
	{
		title: "User Research",
		number: 3,
		description: "Talking to people to learn more about problems they are facing and why.",
		assignment: {
			description: "Write a one sentence brief:",
			bullets: [
				"Talk to other people",
				"Find a problem that can be solved with design",
				"It can't be a problem that you have",
				"Write a one sentence design brief",
				"Use format from slides"
			]
		},
		resources: [],
		youtube: "https://youtu.be/pl21kehYvvs",
		date: "September 26, 2016",
		slides: "lecture3.pdf"
	},
	{
		title: "Design with a Capital D",
		number: 2,
		description: "Addressing initial course feedback and concerns. Also, we examine the question of 'what makes a design good?'.",
		assignment: {
			description: "Choose any object and write a one paragraph critique of it. Some questions to consider while doing this:",
			bullets: [
				"Who do you think it was designed for?",
				"What's good?",
				"What could be improved?",
				"Include WHY (use principles from Lecture #1)"
			]
		},
		resources: [],
		youtube: "https://youtu.be/pl21kehYvvs",
		date: "September 19, 2016",
		slides: "lecture2.pdf"
	},
	{
		title: "Intro - Welcome",
		number: 1,
		description: "Learn about the goals for the course, and see a quick exercise about beautiful, simple and functional design.",
		assignment: null,
		resources: [],
		youtube: "https://youtu.be/pl21kehYvvs",
		date: "September 12, 2016",
		slides: "lecture1.pdf"
	}
]

var overlay = new Vue({
	el: "#overlay",
	data: {
		lecture: null,
		show: false
	},
	methods: {
		close: function () {
			// hide the overlay
			overlay.$data.show = false;

			// set body scroll styles
			$('body').css("overflow-y", "scroll");

			// unload the lecture
			this.lecture = null
		}
	}
});

var lectures = new Vue({
	el: "#lectures",
	data: {
		lectures: lectureData
	},
	methods: {
		showLecture: function (lectureNumber) {
			// load the lecture
			var index = lectureData.length - lectureNumber;
			overlay.$data.lecture = lectureData[index]

			// set body scroll styles
			$('body').css("overflow-y", "hidden");

			// show the overlay
			overlay.$data.show = true;
		}
	}
});






