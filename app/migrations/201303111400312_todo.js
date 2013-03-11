var preload_data = [
    {item: 'Complete the application for graduation'},
    {item: 'Tell your family and friends'},
    {item: 'Stay up to date'},
    {item: 'Apply for honors and awards'},
    {item: 'Request special seating for disability accommodations'},
    {item: 'Verify your information on the official commencement list'},
    {item: 'Attend Countdown to Commencement'},
    {item: 'Secure academic attire for the ceremony'},
    {item: 'Arrive at Kolf 45 minutes prior to ceremony'},
    {item: 'Relax and enjoy your ceremony'}
];

migration.up = function(migrator) {
	migrator.createTable({
		"columns": {
			"item":"text",
			"done":"integer",
			"date_completed":"text"
		}
	});
    for (var i = 0; i < preload_data.length; i++) {
        migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
	migrator.dropTable("todo");
};
