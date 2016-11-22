

var lectureData = [
	{
			title: "Visual III - Copy, Illustration, Animation",
			number: 10,
			description: "Study the principals of delightful design. We also learn how to better communicate to our users through copy, illustration, and animation.",
			assignment: {
				description: "OPTIONAL: Find a design that you like on the internet and try to recreate it as accurately as possible in Sketch or Figma (really try to nail those details!).",
				bullets: [
					"Choose an app, website, Dribbble shot, or illustration that you like",
					"Submit 1) a screenshot of the original piece, and 2) an exported copy of your version as PDF in Canvas",
					"NOT REQUIRED--this is an extra assignment for those who want to catch up on homework. If you’re caught up, it won’t improve your grade."
				]
			},
			resources: [
				{
					title: "Dribbble",
					link: "https://dribbble.com"
				},
				{
					title: "Typewolf",
					link: "https://typewolf.com"
				},
				{
					title: "Fonts in Use",
					link: "https://fontsinuse.com"
				}
			],
			youtube: "https://youtu.be/WP9GsyW-BcQ",
			date: "Novemeber 21, 2016",
			slides: "/lectures/Lecture10.pdf"
	},{
			title: "Visual II - Color & Type",
			number: 9,
			description: "Dive into how we can make our designs more delightful using color, patterns, branding, and typography.",
			assignment: {
				description: "Improve the layout using the principles outlined in this lecture (alignment, size, proximity, font-size, font-weight, etc)",
				bullets: [
					"Use high fidelity screens from the previous wireframe assignment",
					"Or create new screens from scratch",
					"Add color, pick custom font and font weights"
				]
			},
			resources: [
				{
					title: "Google Fonts",
					link: "https://fonts.google.com"
				}
			],
			youtube: "https://youtu.be/bncPY2GJwNI",
			date: "Novemeber 14, 2016",
			slides: "/lectures/Lecture9.pdf"
	},{
			title: "Visual I - Layout & Hierarchy",
			number: 8,
			description: "Overview of whats defines a successful layout. We cover hierarchy, size, composititn, proximity, grids and more.",
			assignment: {
				description: "Improve the layout using the principles outlined in this lecture (alignment, size, proximity, font-size, font-weight, etc)",
				bullets: [
					"Use low fidelity screens from the previous wireframe assignment",
					"Or create new screens from scratch"
				]
			},
			resources: [],
			youtube: "https://youtu.be/JNxE-cU2pqw",
			date: "Novemeber 7, 2016",
			slides: "/lectures/Lecture8.pdf"
	},{
			title: "Evaluate - Did it work?",
			number: 7,
			description: "Learn how to successfully conduct usability tests on the product prototype.",
			assignment: {
				description: "Test your interactive prototype by conducting a usability on another person.",
				bullets: [
					"Write a list of at least three insights from your test",
					"BONUS - update your prototype based on your findings"
				]
			},
			resources: [],
			youtube: "https://youtu.be/3YDoYxgMKJ4",
			date: "October 31, 2016",
			slides: "/lectures/Lecture7.pdf"
	},{
			title: "Interactive Prototyping",
			number: 6,
			description: "Using the wireframes from last class, we start building interactive prototypes to see how the products work on device.",
			assignment: {
				description: "Build an interactive prototype of a phone ap to help students find places to study on campus.",
				bullets: [
					"Minimum three screens",
					"Use Figma or Sketch to make wireframes",
					"Use Invision to make interactive prototype",
					"Submit by sending us a public link on Canvas"
				]
			},
			resources: [],
			youtube: "https://youtu.be/LDz-zmgZp14",
			date: "October 23, 2016",
			slides: "/lectures/Lecture6.pdf"
	},{
		title: "Wireframing and Sketching",
		number: 5,
		description: "Review the basics of wireframing and sketching for quickly modeling and prototyping app layouts and flows.",
		assignment: {
			description: "Start designing a phone app to help students find places to study on campus.",
			bullets: [
				"Minimum two versions of the screen",
				"Use Figma or Sketch (see starter file)",
				"Only use black and white (no color, no gray)",
				"Only use Comic Sans for text"
			]
		},
		resources: [],
		youtube: "https://youtu.be/s193MB7m3JU",
		date: "October 10, 2016",
		slides: "/lectures/Lecture5.pdf"
	},
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
		slides: "/lectures/Lecture4.pdf"
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
		slides: "/lectures/Lecture3.pdf"
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
		slides: "/lectures/Lecture2.pdf"
	},
	{
		title: "Intro - Welcome",
		number: 1,
		description: "Learn about the goals for the course, and see a quick exercise about beautiful, simple and functional design.",
		assignment: null,
		resources: [],
		youtube: "https://youtu.be/pl21kehYvvs",
		date: "September 12, 2016",
		slides: "/lectures/Lecture1.pdf"
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
