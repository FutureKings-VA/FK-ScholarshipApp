import CPage,{FormPage as FPage} from '/application.js'
const nav = document.getElementsByTagName('nav')[0];

const profPage = new FPage('Profile');
const schPage = new CPage('Scholarships');
const testPage = new CPage('test');

schPage.navbtn[0].click();


const stripparams = [
	{
		type:'section',
		classes: 'd-flex flex-row flex-nowrap gap-1 overflow-auto',
		children:[
			{type:'div',classes:'btn-group',handle:'primary_filters',
			children:[
				{type:'rad-l', id:"Recomended", text:"Recomended"},
				{type:'rad-l', id:"Applied", text:"Applied"},
				{type:'rad-l', id:"Favorites", text:"Favorites"},
				{type:'rad-l', id:"AllScholar", text:"All"}
			]},
			{type:'div',classes:'btn-group',handle:'secondary_filters',
			children:[
				{type:'rad-l', added:"secondary", id:"test", text:"test"},
				{type:'rad-l', added:"secondary", id:"test1", text:"test"},
				{type:'rad-l', added:"secondary", id:"test2", text:"test"},
				{type:'rad-l', added:"secondary", id:"test3", text:"test"},
				{type:'rad-l', added:"secondary", id:"test4", text:"test"},
			]}
		]
	},
	{type:'div', classes:'btn-group p-0 m-0', handle:'filter_fncts',
	children:[
		{type:'button',classes:'btn btn-danger',text:'del'},
		{type:'button',classes:'btn btn-primary',text:'add'}
	]}
]

const formparams = [
	{"Name":['First','Last']},
	{"Email":["example@email.com"], type: 'email'},
	{"Level":['']},
	{"Major":["Computer Engineering"]}
]

const schParams = {title:'Title',p:'Title'};
let debuglist = [];
debuglist.push(schPage.createJumbotron());
debuglist.push(schPage.createNavStrip(stripparams));
// debuglist.push(testPage.createContent());
debuglist.push(profPage.createImg());
debuglist.push(profPage.createForm(formparams));


var scholarship_data;
fetch('./Sheet1.json')
    .then((response) => response.json())
    .then((json) => {
		console.log('hello');
		debuglist.push(schPage.createContent(json,schParams));
	});


console.debug(debuglist);
